# Nexus AI Frontend

Unified AI-First Productivity Platform - Frontend Application

## Project Structure

```
src/
├── apps/
│   ├── public-website/    # Public website (nexus.ai)
│   └── platform/          # Main platform/product
├── shared/
│   ├── config/            # Global configuration (branding)
│   ├── components/        # Shared UI components
│   └── ...
└── App.tsx                # Main routing
```

## Quick Start

```bash
npm install
cp .env.example .env.local
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Global Configuration

Change product name in `src/shared/config/branding.ts`:

```typescript
export const BRANDING = {
  productName: 'Nexus AI',
  domain: 'nexus.ai',
  // ...
};
```

## Routes

- `/` - Public website home
- `/platform` - Platform dashboard

## Design System

- **Minimalistic** with generous white space
- **Semantic colors**: red (error), green (success), yellow (warning), blue (info)
- **Typography**: Inter (sans-serif), JetBrains Mono (monospace)
- **TailwindCSS** for styling

## Scripts

- `npm start` - Development server
- `npm test` - Test runner
- `npm run build` - Production build

## Tech Stack

React 18 • TypeScript • React Router v6 • TailwindCSS • Create React App

---

**Nexus AI, Inc.** • [docs/PRODUCT-SPECIFICATION.md](./docs/PRODUCT-SPECIFICATION.md)
