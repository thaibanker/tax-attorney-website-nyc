# Agent Task Continuation Instructions

## Overview
This project is creating 30 high-converting tax resolution landing pages. An agent can use the task tracking system to continue where previous work left off.

## Task Tracking System

### 1. Main Task Log File: `task_completion_log.json`
- **Contains**: Current progress, completed tasks, next pending tasks
- **Updated**: After each page completion
- **Purpose**: Allows agents to resume work seamlessly

### 2. Project Plan File: `tax_resolution_seo_terms.md`
- **Contains**: Complete keyword research and strategy
- **Purpose**: Reference for crisis-level keywords and conversion optimization

## How to Continue Work

### Step 1: Read Current Status
```bash
# Check the task log to see current progress
cat task_completion_log.json
```

**Key Information to Extract:**
- `completed_pages`: How many pages are done (currently 3/30)
- `current_phase`: Which phase we're in (currently Phase 1)
- `next_pending_tasks`: Next pages to create
- `completed_tasks`: Examples of structure and quality

### Step 2: Identify Next Task
Look at `next_pending_tasks` array for the next page to create:
- **Page 4**: Letter 1058 Help NYC (Crisis Level: 10/10)
- **Page 5**: CP504 Notice Response (Crisis Level: 10/10)  
- **Page 6**: Tax Levy on Paycheck NJ (Crisis Level: 10/10)
- **Page 7**: IRS Taking My House NYC (Crisis Level: 10/10)
- **Page 8**: Same Day Tax Attorney (Crisis Level: 9/10)

### Step 3: Create Next Page
Use the same structure as completed pages:

```markdown
# [CRISIS HEADLINE] - [LOCAL MODIFIER]
## 🚨 [URGENT SITUATION] - [IMMEDIATE SOLUTION AVAILABLE]

[Follow the template_structure from task_completion_log.json]
```

### Step 4: Update Task Log
After completing each page:
1. Move task from `next_pending_tasks` to `completed_tasks`
2. Update completion date, word count, quality score
3. Record conversion elements included
4. Update counters: `completed_pages`, phase completion
5. Update `last_updated` timestamp

## Quality Standards

### Required Elements (from quality_checklist):
- ✅ Crisis-focused headline with NYC/NY/NJ modifier
- ✅ Multiple emergency CTAs throughout
- ✅ Local jurisdiction references
- ✅ Specific success story with dollar amounts
- ✅ 3-step emergency process
- ✅ Attorney credentials
- ✅ FAQ section (5+ questions)
- ✅ Cost of waiting vs. immediate action
- ✅ 24/7 availability messaging
- ✅ Multiple contact methods

### Word Count Target: 1500-2000+ words per page

### Crisis Levels:
- **10/10**: Maximum urgency (Letter 1058, CP504, bank seizures)
- **9/10**: High urgency (wage garnishment, property threats)
- **8/10**: Significant urgency (warrants, multiple notices)
- **7/10**: Building urgency (credit impacts, consequences)

## File Naming Convention
`page-[number]-[keyword-slug].md`

Examples:
- `page-4-letter-1058-help-nyc.md`
- `page-5-cp504-notice-response.md`
- `page-6-tax-levy-paycheck-nj.md`

## Success Examples
Review completed pages for structure and tone:
- `page-1-emergency-tax-attorney-nyc.md` - General crisis page
- `page-2-stop-wage-garnishment-today-nyc.md` - Specific enforcement action
- `page-3-irs-seized-my-bank-account.md` - Asset seizure focus

## Current Status Summary
- ✅ **Completed**: Pages 1-3 (Emergency Attorney, Wage Garnishment, Bank Seizure)
- ⏳ **Next**: Pages 4-8 (Phase 1 completion)
- 📅 **Timeline**: Phase 1 = Week 1 (Immediate Priority)
- 🎯 **Goal**: 30 total pages across 4 phases

## Agent Workflow
1. Read `task_completion_log.json` for current status
2. Identify next pending task with highest priority
3. Create page using established structure and quality standards
4. Update task log with completion details
5. Repeat for next task

The system ensures continuity, maintains quality standards, and tracks progress efficiently for any agent working on the project.
