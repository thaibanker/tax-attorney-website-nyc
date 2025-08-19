const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3008';
const OUTPUT_DIR = './audit';
const SCREENS_DIR = './audit/screens/buttons';

// CSV header
const CSV_HEADER = 'source_page,selector,text,accessible_name,final_url,status_or_event,notes\n';

class ButtonAuditor {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = [];
    this.visitedPages = new Set();
    this.pagesToVisit = ['/'];
  }

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1920, height: 1080 });
    
    // Set up console error tracking
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('Console error:', msg.text());
      }
    });
  }

  async crawlSite() {
    console.log('Starting site crawl...');
    
    while (this.pagesToVisit.length > 0) {
      const currentPath = this.pagesToVisit.shift();
      if (this.visitedPages.has(currentPath)) continue;
      
      this.visitedPages.add(currentPath);
      console.log(`Crawling: ${currentPath}`);
      
      try {
        await this.page.goto(`${BASE_URL}${currentPath}`, { 
          waitUntil: 'networkidle2',
          timeout: 30000 
        });
        
        // Extract all internal links for further crawling (max depth 3)
        if (this.visitedPages.size < 50) { // Limit to prevent infinite crawling
          const links = await this.page.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('a[href]'));
            return anchors
              .map(a => a.getAttribute('href'))
              .filter(href => href && href.startsWith('/') && !href.includes('#'))
              .filter(href => !href.includes('mailto:') && !href.includes('tel:'));
          });
          
          links.forEach(link => {
            if (!this.visitedPages.has(link) && !this.pagesToVisit.includes(link)) {
              this.pagesToVisit.push(link);
            }
          });
        }
        
        // Test buttons on this page
        await this.testButtonsOnPage(currentPath);
        
      } catch (error) {
        console.error(`Error crawling ${currentPath}:`, error.message);
        this.results.push({
          source_page: currentPath,
          selector: 'PAGE_ERROR',
          text: 'Page failed to load',
          accessible_name: '',
          final_url: 'ERROR',
          status_or_event: error.message,
          notes: 'Page crawl failed'
        });
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  async testButtonsOnPage(pagePath) {
    console.log(`Testing buttons on: ${pagePath}`);
    
    try {
      // Find all button-like elements
      const buttonSelectors = [
        'button',
        '[role="button"]',
        'a[role="button"]',
        '[tabindex="0"]:not(a):not(input):not(select):not(textarea)',
        '.btn',
        '*[class*="btn"]'
      ];
      
      const buttons = await this.page.evaluate((selectors) => {
        const elements = [];
        
        selectors.forEach(selector => {
          try {
            const found = Array.from(document.querySelectorAll(selector));
            found.forEach((el, index) => {
              // Skip if already captured by a more specific selector
              if (elements.some(existing => existing.element === el)) return;
              
              const rect = el.getBoundingClientRect();
              if (rect.width === 0 || rect.height === 0) return; // Skip hidden elements
              
              const uniqueSelector = `${selector}:nth-of-type(${index + 1})`;
              elements.push({
                selector: uniqueSelector,
                text: el.textContent?.trim().substring(0, 100) || '',
                accessible_name: el.getAttribute('aria-label') || el.getAttribute('title') || '',
                tagName: el.tagName.toLowerCase(),
                href: el.getAttribute('href') || '',
                onclick: el.getAttribute('onclick') || '',
                type: el.getAttribute('type') || '',
                element: el // For deduplication only
              });
            });
          } catch (e) {
            console.log(`Error with selector ${selector}:`, e.message);
          }
        });
        
        // Remove the element reference before returning
        return elements.map(({element, ...rest}) => rest);
      }, buttonSelectors);

      console.log(`Found ${buttons.length} button(s) on ${pagePath}`);

      // Test each button
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        await this.testButton(pagePath, button, i);
        
        // Small delay between button tests
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
    } catch (error) {
      console.error(`Error testing buttons on ${pagePath}:`, error.message);
    }
  }

  async testButton(pagePath, button, index) {
    console.log(`Testing button ${index + 1}: "${button.text}"`);
    
    const initialUrl = this.page.url();
    let consoleErrors = [];
    
    // Set up console error capture for this test
    const errorHandler = (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    };
    this.page.on('console', errorHandler);
    
    try {
      // Navigate back to the page if needed
      if (!this.page.url().includes(pagePath.slice(1))) {
        await this.page.goto(`${BASE_URL}${pagePath}`, { 
          waitUntil: 'networkidle2',
          timeout: 15000 
        });
      }
      
      // Find and click the button
      const buttonElement = await this.page.$(button.selector);
      if (!buttonElement) {
        this.results.push({
          source_page: pagePath,
          selector: button.selector,
          text: button.text,
          accessible_name: button.accessible_name,
          final_url: 'ELEMENT_NOT_FOUND',
          status_or_event: 'ERROR',
          notes: 'Button element not found'
        });
        return;
      }

      // Check if element is clickable
      const isClickable = await this.page.evaluate(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && 
               getComputedStyle(el).visibility !== 'hidden' &&
               getComputedStyle(el).display !== 'none';
      }, buttonElement);

      if (!isClickable) {
        this.results.push({
          source_page: pagePath,
          selector: button.selector,
          text: button.text,
          accessible_name: button.accessible_name,
          final_url: 'NOT_CLICKABLE',
          status_or_event: 'ERROR',
          notes: 'Element is not clickable (hidden or zero size)'
        });
        return;
      }

      // Record state before click
      const urlBeforeClick = this.page.url();
      
      // Try to click and wait for potential navigation/changes
      try {
        await Promise.race([
          buttonElement.click(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Click timeout')), 5000))
        ]);
        
        // Wait for potential navigation or DOM changes
        await Promise.race([
          this.page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 3000 }),
          this.page.waitForFunction('document.readyState === "complete"', { timeout: 3000 }),
          new Promise(resolve => setTimeout(resolve, 2000))
        ]);
        
      } catch (clickError) {
        // Click or navigation might have failed, but continue to check state
        console.log(`Click/navigation warning for button "${button.text}":`, clickError.message);
      }

      // Check final state
      const urlAfterClick = this.page.url();
      const navigationOccurred = urlBeforeClick !== urlAfterClick;
      
      let status, finalUrl, notes = '';
      
      if (navigationOccurred) {
        try {
          const response = await this.page.goto(urlAfterClick, { timeout: 5000 });
          status = response ? response.status() : 'UNKNOWN';
          finalUrl = urlAfterClick;
          if (status >= 400) {
            notes = `HTTP error ${status}`;
          }
        } catch (navError) {
          status = 'NAV_ERROR';
          finalUrl = urlAfterClick;
          notes = navError.message;
        }
      } else {
        // Check for modal, hash change, or other interactions
        const hasModal = await this.page.evaluate(() => {
          const modals = document.querySelectorAll('[role="dialog"], .modal, [aria-modal="true"]');
          return modals.length > 0;
        });
        
        const hashChanged = urlAfterClick.includes('#') && !urlBeforeClick.includes('#');
        
        if (hasModal) {
          status = 'MODAL_OPENED';
          finalUrl = 'MODAL';
          notes = 'Modal dialog opened';
        } else if (hashChanged) {
          status = 'HASH_CHANGE';
          finalUrl = urlAfterClick;
          notes = 'Hash navigation occurred';
        } else {
          status = 'NO_NAVIGATION';
          finalUrl = 'NO_CHANGE';
          notes = 'No visible effect from button click';
        }
      }
      
      if (consoleErrors.length > 0) {
        notes += ` | Console errors: ${consoleErrors.join('; ')}`;
      }
      
      this.results.push({
        source_page: pagePath,
        selector: button.selector,
        text: button.text,
        accessible_name: button.accessible_name,
        final_url: finalUrl,
        status_or_event: status,
        notes: notes
      });
      
      // Take screenshot for problematic buttons
      if (status === 'NO_NAVIGATION' || status >= 400 || status === 'ERROR' || consoleErrors.length > 0) {
        try {
          const screenshotName = `${pagePath.replace(/\//g, '_')}_button_${index}.png`;
          await this.page.screenshot({ 
            path: path.join(SCREENS_DIR, screenshotName),
            fullPage: true 
          });
          console.log(`Screenshot saved: ${screenshotName}`);
        } catch (screenshotError) {
          console.error('Screenshot failed:', screenshotError.message);
        }
      }
      
    } catch (error) {
      this.results.push({
        source_page: pagePath,
        selector: button.selector,
        text: button.text,
        accessible_name: button.accessible_name,
        final_url: 'TEST_ERROR',
        status_or_event: 'ERROR',
        notes: error.message
      });
    } finally {
      this.page.removeListener('console', errorHandler);
    }
  }

  async saveResults() {
    // Save CSV
    const csvContent = CSV_HEADER + this.results
      .map(r => `"${r.source_page}","${r.selector}","${r.text}","${r.accessible_name}","${r.final_url}","${r.status_or_event}","${r.notes}"`)
      .join('\n');
    
    fs.writeFileSync(path.join(OUTPUT_DIR, 'button-audit.csv'), csvContent);
    
    // Save JSON for processing
    fs.writeFileSync(path.join(OUTPUT_DIR, 'button-audit.json'), JSON.stringify(this.results, null, 2));
    
    console.log(`\nAudit complete! Found ${this.results.length} buttons total.`);
    console.log(`Results saved to ${OUTPUT_DIR}/button-audit.csv`);
    
    // Summary statistics
    const problems = this.results.filter(r => 
      r.status_or_event === 'NO_NAVIGATION' || 
      r.status_or_event === 'ERROR' ||
      (typeof r.status_or_event === 'number' && r.status_or_event >= 400)
    );
    
    console.log(`Problematic buttons: ${problems.length}`);
    if (problems.length > 0) {
      console.log('Problem categories:');
      const categories = {};
      problems.forEach(p => {
        categories[p.status_or_event] = (categories[p.status_or_event] || 0) + 1;
      });
      Object.entries(categories).forEach(([category, count]) => {
        console.log(`  ${category}: ${count}`);
      });
    }
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Main execution
async function runAudit() {
  const auditor = new ButtonAuditor();
  
  try {
    await auditor.initialize();
    await auditor.crawlSite();
    await auditor.saveResults();
  } catch (error) {
    console.error('Audit failed:', error);
  } finally {
    await auditor.cleanup();
  }
}

// Run if called directly
if (require.main === module) {
  runAudit().catch(console.error);
}

module.exports = { ButtonAuditor, runAudit };