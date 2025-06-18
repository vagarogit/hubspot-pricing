# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Run TypeScript type checking and build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

### Installation
- `npm install` - Install all dependencies

## Project Architecture

This is a React + TypeScript + Vite application for HubSpot pricing calculations.

### Technology Stack
- **Build Tool**: Vite 6.3.5
- **Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3 (strict mode)
- **UI Library**: @base-ui-components/react (beta)
- **Linting**: ESLint 9.25.0 with TypeScript and React plugins

### TypeScript Configuration
- Strict mode enabled
- Project references setup (tsconfig.app.json for app code, tsconfig.node.json for config files)
- No emit - Vite handles transpilation
- Target ES2020 with bundler module resolution

### Key Components
- **PricingCalculator** (`src/assets/components/pricing/PricingCalculator.tsx`) - Main pricing calculator component (currently minimal implementation)

### Project Structure Notes
- The PricingCalculator component is currently located in `src/assets/components/` which is unconventional. Consider moving to `src/components/` for better organization.
- The project is essentially a fresh Vite template with minimal customization - ready for implementing the pricing calculator functionality.