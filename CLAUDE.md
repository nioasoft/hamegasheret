# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is "המגשרת" (HaMegasheret) - a Hebrew-language law firm website specializing in divorce mediation and family law, built with Next.js 15 and Tailwind CSS. The site uses SHADCN UI components and is optimized for RTL (Right-to-Left) Hebrew text display.

## Development Commands
```bash
npm install       # Install dependencies
npm run dev       # Start development server with Turbopack (http://localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with RTL support
- **Components**: SHADCN UI (located in src/components/ui/)
- **Forms**: React Hook Form with Zod validation
- **Typography**: Noto Sans Hebrew font

### Key Architectural Decisions
1. **App Router Structure**: All pages use Next.js 15 App Router in `src/app/`
2. **RTL Configuration**: The entire site is configured for Hebrew RTL in `layout.tsx` with `dir="rtl"`
3. **SEO Optimization**:
   - Dynamic sitemap generation in `src/app/sitemap.ts`
   - Robots.txt configuration in `src/app/robots.ts`
   - Structured data and metadata in each page
4. **Component Library**: SHADCN UI components are customized and stored in `src/components/ui/`

### Important Files
- `src/app/layout.tsx`: Root layout with RTL setup, Hebrew font, and global metadata
- `next.config.ts`: Contains SEO headers, image optimization, and Vercel-specific optimizations
- `src/app/page.tsx`: Homepage with mediation services focus
- `src/app/sitemap.ts`: Dynamic sitemap generation for SEO

### Page Routes
- `/` - Homepage focusing on divorce mediation
- `/mediation` (גישור-גירושין) - Detailed mediation information
- `/about` (אודות) - About the firm and team
- `/articles` (מאמרים) - Professional articles on family law
- `/contact` (צור-קשר) - Contact forms and information

### Hebrew Content Considerations
- All content is in Hebrew
- Use RTL-aware styling (e.g., `ms-` instead of `ml-`, `me-` instead of `mr-`)
- Text alignment defaults to right
- Navigation and UI elements are mirrored for RTL

### Production Deployment
The site is deployed on Vercel with:
- Domain: `hamegasheret.co.il`
- Build command: `npm run build`
- No environment variables required
- Automatic cache headers configured in `next.config.ts`