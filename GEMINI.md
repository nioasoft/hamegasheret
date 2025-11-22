# Gemini Context: HaMegasheret (המגשרת)

## Project Overview
**"HaMegasheret" (The Mediator)** is a production-ready law firm website specializing in divorce mediation and family law.
*   **Primary Language:** Hebrew (RTL).
*   **Core Domain:** Family Law, Divorce Mediation, Child Custody.
*   **Target Audience:** Israeli couples seeking amicable divorce solutions.

## Technology Stack
*   **Framework:** Next.js 15 (App Router).
*   **Language:** TypeScript.
*   **Styling:** Tailwind CSS v4 (configured for RTL).
*   **UI Library:** SHADCN UI (Radix Primitives).
*   **Forms:** React Hook Form + Zod.
*   **Email:** Resend API.

## Development Workflow

### Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server with Turbopack (`http://localhost:3000`). |
| `npm run build` | Build the application for production. |
| `npm run start` | Start the production server. |
| `npm run lint` | Run ESLint static analysis. |

### Directory Structure
*   `src/app/` - App Router pages and layouts.
    *   `[slug]/` - Dynamic routes for articles.
    *   `api/` - Backend API routes (e.g., email sending).
*   `src/components/ui/` - Reusable SHADCN UI components.
*   `src/lib/` - Utilities, constants, and schema definitions.
*   `public/` - Static assets (images, icons).

## Coding Conventions & Guidelines

### 1. RTL & Hebrew Support
*   **Layout:** The root layout sets `dir="rtl"`.
*   **Styling:** Prefer logical properties (e.g., `ms-4` for margin-start) over physical properties (`ml-4`) to ensure proper RTL rendering.
*   **Font:** Noto Sans Hebrew is the primary typeface.

### 2. Next.js 15 Best Practices
*   **Server Components:** Use Server Components by default. Add `'use client'` only when necessary (state, effects).
*   **Metadata:** Define SEO metadata in `layout.tsx` or `page.tsx` using the Metadata API.
*   **Images:** Always use `next/image` for optimization.

### 3. SEO & Performance
*   **Sitemap:** Managed via `src/app/sitemap.ts`.
*   **Schema:** JSON-LD structured data is implemented for legal services and articles.
*   **Optimization:** Core Web Vitals focus (LCP, CLS).

## Deployment
*   **Platform:** Vercel.
*   **Configuration:** `next.config.ts` handles headers, security, and caching.
*   **Environment:** No complex `.env` setup required for basic operation.
