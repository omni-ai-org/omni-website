# Omni AI Website

AI-Native Execution Intelligence for Engineering Teams - Public Website

## Project Structure

```
src/
├── apps/
│   └── public-website/    # Public website (omni.vachas.ai)
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
  productName: 'Omni AI',
  domain: 'omni.vachas.ai',
  // ...
};
```

## Deployment

Hosted on GitHub Pages at [omni.vachas.ai](https://omni.vachas.ai)

```bash
npm run build
# Deploy build/ folder to GitHub Pages
```

## Design System

- **Brutalist** aesthetic with high contrast
- **Black & White** color scheme
- **Typography**: Inter Variable, monospace accents
- **TailwindCSS** for styling

## Scripts

- `npm start` - Development server
- `npm test` - Test runner
- `npm run build` - Production build

## Tech Stack

React 19 • TypeScript • React Router v7 • TailwindCSS • Clerk (Waitlist)

---

**Omni AI** • [omni.vachas.ai](https://omni.vachas.ai)
