/**
 * Global Branding Configuration
 *
 * This file centralizes all branding-related constants.
 * Change the product name here and it will reflect everywhere across the application.
 */

export const BRANDING = {
  // Product Information
  productName: 'Nexus AI',
  productNameShort: 'Nexus',
  tagline: 'Unified AI-First Productivity Platform',
  description: 'Eliminates tool fragmentation, reduces administrative overhead, and provides contextual, self-maintaining visibility across the entire product lifecycle.',

  // Domain Configuration
  domain: 'nexus.ai',

  // Contact Information
  email: {
    support: 'support@nexus.ai',
    hello: 'hello@nexus.ai',
    careers: 'careers@nexus.ai',
  },

  // Social Media (Optional - can be added later)
  social: {
    twitter: '',
    linkedin: '',
    github: '',
  },

  // Legal
  company: {
    name: 'Nexus AI Inc.',
    fullName: 'Nexus AI, Inc.',
  },
} as const;

export default BRANDING;
