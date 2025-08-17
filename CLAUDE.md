# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.4.5 application for tax and IRS representation services in New York and New Jersey. The project uses the App Router pattern with TypeScript and Tailwind CSS.

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

## Architecture

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
  - Service-specific pages (tax-debt-relief, irs-audit-help, etc.)
  - Root layout with metadata and font configuration
- `/src/components/` - React components
  - `/ui/` - shadcn/ui base components (button, card, badge, separator)
  - Business components (header, footer, hero, services sections)
- `/src/lib/` - Utility functions
  - `utils.ts` - Contains `cn()` helper for className merging

### Key Technologies
- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (New York style, RSC enabled)
- **Fonts**: Inter (body), Outfit (display), JetBrains Mono (code)

### TypeScript Configuration
- Strict mode enabled with additional safety checks
- Path alias: `@/*` maps to `./src/*`
- No unused locals/parameters, no implicit returns
- No unchecked indexed access

### Styling Patterns
- Uses Tailwind CSS with custom theme configuration
- CSS variables for colors (HSL format)
- Custom font families via CSS variables
- shadcn/ui components use `cn()` utility for className composition
- Dark mode support via class strategy

### Component Patterns
- Server Components by default (RSC enabled)
- Components use TypeScript with proper typing
- UI components follow shadcn/ui patterns with CVA for variants
- Business components compose UI primitives

## Important Notes
- No test framework currently configured
- Prettier configured for code formatting
- ESLint extends Next.js core-web-vitals and TypeScript configs
- Project appears to be a tax services website with multiple service pages