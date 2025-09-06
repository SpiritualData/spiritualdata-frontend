# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:5173)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint`

## Architecture Overview

This is a React 19 + Vite 6 + TypeScript frontend for SpiritualData, a spiritual guidance platform with AI-powered chat functionality.

### Key Architecture Components

- **Routing**: Uses React Router DOM 7 with Clerk authentication integration
- **Authentication**: Clerk handles user auth with protected routes via `RequireAuthentication` component
- **UI Framework**: Material-UI 7 with custom theme in `src/styles/theme`
- **Payment Integration**: Dual payment system with PayPal and Stripe
- **Analytics**: Hotjar integration for user behavior tracking
- **Email**: EmailJS for contact forms and notifications

### Application Structure

- **Entry Point**: `src/main.tsx` → `src/App.tsx`
- **Routing Logic**: Centralized in `src/hooks/routes.tsx` with Clerk provider
- **Layout Control**: `App.tsx` conditionally shows/hides Navbar/Footer based on route
- **Hidden Routes**: Authentication and chat pages (`/sign-in`, `/sign-up`, `/chat`, `/outcome-chat`) hide navigation

### Key Directories

- `src/pages/`: Page components (Home, About, Chat, Products, etc.)
- `src/components/`: Reusable UI components organized by feature
- `src/auth/`: Authentication components and guards
- `src/utils/`: Services and utilities (axios config, payment service)
- `src/styles/`: Custom Material-UI theme and styling
- `src/data/`: Static data and configuration

### Environment Configuration

Environment variables are strongly typed in `src/env.d.ts`:
- `VITE_CLERK_PUBLISHABLE_KEY`: Clerk authentication
- `VITE_BACKEND_URL`: API base URL
- `VITE_STRIPE_PUBLIC_KEY`: Stripe payments
- `VITE_PAYPAL_CLIENT_ID`: PayPal payments
- `VITE_EMAILJS_*`: EmailJS configuration
- `VITE_HOTJAR_ID`: Analytics tracking

### Path Aliases

Configured in both `vite.config.ts` and `tsconfig.json`:
- `@/*`: Maps to `./src/*`
- `@components/*`: Maps to `./src/components/*`
- `@pages/*`: Maps to `./src/pages/*`
- `@assets/*`: Maps to `./src/assets/*`

### Code Conventions

- ESLint configured for React hooks and refresh
- TypeScript strict mode enabled
- Follows React functional component patterns
- Material-UI ThemeProvider wraps entire application
- No unused variables except those matching `^[A-Z_]` pattern