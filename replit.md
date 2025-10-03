# KPI Digital Website

## Overview
KPI Digital is a high-converting website for trades businesses (electricians, plumbers, HVAC, carpentry) built with React, TypeScript, and modern web technologies. Its purpose is to position KPI Digital as the leading partner for trades businesses seeking clarity, systems, and growth. The site features premium animations, a conversion-focused design, and extensive business education content, including interactive assessment calculators for Clarity, Systems, and Growth, each offering comprehensive PDF reports. The project aims to drive digital transformation and provide actionable insights for business improvement.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript.
- **Routing**: Wouter for lightweight client-side routing.
- **Styling**: Tailwind CSS with shadcn/ui for consistent and premium design.
- **Animations**: Framer Motion for smooth transitions and interactions.
- **State Management**: TanStack Query for server state management.
- **Form Handling**: React Hook Form with Zod validation.

### Backend Architecture
- **Runtime**: Node.js with Express.js server.
- **Database**: PostgreSQL with Drizzle ORM, hosted on Neon serverless.
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage.
- **API Design**: RESTful endpoints with JSON responses.

### Security Architecture
- **Content Security Policy (CSP)**: Helmet with environment-aware strict CSP in production.
- **Input Validation & Sanitization**: Comprehensive utility with HTML escaping, email/text sanitization, and whitelist validation.
- **Security Headers**: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- **Rate Limiting**: Dual-tier (global and email-specific) with trust proxy.
- **CORS Policy**: Environment-aware with production whitelist.
- **Error Handling**: Generic client messages with detailed server-side logging (dev only).
- **Attack Prevention**: XSS, NoSQL injection prevention (express-mongo-sanitize), and DoS protection.

### Design System
- **Component Library**: Radix UI primitives styled with shadcn/ui.
- **Color System**: CSS custom properties with HSL values for theming.
- **Typography**: Modern sans-serif fonts (Inter, DM Sans, Geist Mono).
- **Layout**: Mobile-first responsive design using Tailwind breakpoints.
- **Motion**: Intentional animations via Framer Motion.

### Content Management
- **Value Propositions**: Structured data for educational content.
- **SEO Optimization**: Dynamic meta tag management with Open Graph and Twitter Card support.
- **Educational Pages**: Dynamic routing for service explanation pages.

### Performance & Accessibility
- **Build System**: Vite for fast development and optimized builds.
- **Core Web Vitals**: Optimized for LCP, INP, CLS.
- **Accessibility**: WCAG 2.2 AA compliance.

### Conversion Features
- **Smart Forms**: Multi-step quote forms with conditional fields.
- **Trust Signals**: Integrated testimonials, certifications, and social proof.
- **CTA Optimization**: Strategically placed call-to-action buttons.
- **Analytics Ready**: Structured data markup for SEO.
- **Interactive Calculators**:
    - **Clarity Calculator**: 12 questions across 6 business areas, 4-tier results with business impact and next steps.
    - **Systems Calculator**: 28 questions across 6 systems areas, 4-tier results with maturity analysis and implementation guidance.
    - **Growth Calculator**: 25 questions across 5 growth areas, 4-tier results with readiness analysis and strategic recommendations.
- **PDF Report Generation**: Client-side professional grayscale PDF reports (8-15 pages) for all calculators, featuring detailed analysis, DIY approaches, KPI Digital solutions, next steps, and company branding, with email capture and notification to KPI Digital.

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL.
- **ORM**: Drizzle with drizzle-kit.
- **Validation**: Zod.

### UI & Animation Libraries
- **Component System**: Radix UI.
- **Animation**: Framer Motion.
- **Icons**: Lucide React.
- **Carousel**: Embla Carousel.

### Development Tools
- **Build Tool**: Vite with React plugin.
- **Styling**: Tailwind CSS with PostCSS.
- **Fonts**: Google Fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono).
- **Development**: TSX.

### Utility Libraries
- **Date Handling**: date-fns.
- **Class Management**: clsx and class-variance-authority.
- **Command Palette**: cmdk.
- **Intersection Observer**: react-intersection-observer.
- **PDF Generation**: @react-pdf/renderer.
- **Email Service**: Resend API.