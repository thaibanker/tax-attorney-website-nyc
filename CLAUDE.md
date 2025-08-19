# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.4.5 application for Strategic Tax NY/NJ, providing tax and IRS representation services. The website features 24+ crisis-focused service pages targeting urgent tax situations in New York, New Jersey, and Connecticut. The project uses App Router pattern with TypeScript, Tailwind CSS, and includes a comprehensive contact form system with email notifications.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack
```

### Build & Production
```bash
npm run build      # Build for production
npm run start      # Start production server
```

### Code Quality
```bash
npm run lint       # Run ESLint with Next.js configuration
```

### Component Management
```bash
npx shadcn@latest add <component>  # Add new shadcn/ui components
```

### Type Checking
```bash
npx tsc --noEmit        # Type check without emitting files
```

## Architecture

### Service Pages Strategy
The website follows a crisis-focused approach with 24+ service pages designed around urgent tax situations:
- **Crisis Categories**: Emergency situations (wage garnishment, asset seizure, audit defense)
- **Geographic Targeting**: NYC, NJ, CT specific pages
- **Urgency Levels**: Pages designed with crisis-level urgency (8/10, 9/10, 10/10)
- **Call-to-Action**: Prominent phone number (+1 929 416 3020) and consultation forms

### Contact Form System
- **Modal Component**: `ContactFormModal` with validation and multi-step UI
- **API Integration**: `/api/contact` route using Resend email service
- **Email Templates**: Professional HTML emails with urgency levels and formatting
- **Form Features**: Urgency levels (low/medium/high/emergency), comprehensive validation
- **Current Email**: Sends to `thaibanker@gmail.com` (testing restriction)

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
  - 24+ service-specific pages with crisis-focused content
  - `/api/contact/` - Email notification API endpoint
- `/src/components/` - React components
  - `/ui/` - shadcn/ui base components (button, card, badge, separator)
  - `contact-form-modal.tsx` - Main contact form with email integration
  - `professional-header.tsx` - Navigation with crisis phone number
  - `professional-footer.tsx` - Footer with linked service pages
- `/src/lib/` - Utility functions
  - `utils.ts` - Contains `cn()` helper for className merging

### Key Technologies
- **Framework**: Next.js 15.4.5 with App Router pattern
- **Runtime**: React 19.1.0 with Server Components (RSC)
- **Language**: TypeScript with strict mode and enhanced type checking
- **Styling**: Tailwind CSS with CSS variables and custom theme extension
- **UI Components**: shadcn/ui (New York style, RSC enabled)
- **Fonts**: Inter (body), Outfit (display), JetBrains Mono (code)
- **Email Service**: Resend API for contact form notifications
- **Icons**: Lucide React icon library
- **Build Tool**: Turbopack for development (via --turbopack flag)

### Button Styling Patterns
Emergency buttons use specific styling for visibility:
```tsx
<Button 
  size="xl" 
  variant="destructive" 
  className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white"
>
  Emergency Help
</Button>
```

### Content Architecture
- **Crisis Levels**: Pages rated 8/10, 9/10, or 10/10 crisis levels
- **Service Categories**: Audit defense, tax debt relief, wage garnishment, liens/levies, innocent spouse, unfiled returns, business issues, tax planning
- **Geographic Focus**: New York, New Jersey, Connecticut tri-state area
- **Contact Integration**: Every page includes prominent contact methods

### Component Patterns
- **Server Components**: Default for static content and SEO
- **Client Components**: Used for interactive elements (contact forms, modals)
- **Modal System**: Contact form opens via state management in client components
- **Professional Styling**: Crisis-focused design with red/destructive color schemes
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Email Configuration
- **Service**: Resend (resend.com)
- **API Key**: Configured via `RESEND_API_KEY` environment variable
- **From Address**: `Strategic Tax NY/NJ <onboarding@resend.dev>`
- **Test Email**: Currently sends to `thaibanker@gmail.com`
- **Templates**: Professional HTML with urgency indicators and client information

## Domain & Deployment
- **Primary Domain**: strategictaxnynj.com (configured with Cloudflare DNS)
- **Deployment**: Vercel with GitHub integration
- **Environment**: Production deployment linked to main branch

## Important Development Notes
- Contact form submissions require `RESEND_API_KEY` environment variable
- All service pages follow consistent crisis-focused content structure
- Footer "Our Services" links are mapped to actual service pages
- No test framework currently configured
- Prettier and ESLint configured for code quality
- Emergency button styling must maintain visibility with white borders