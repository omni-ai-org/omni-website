/**
 * Global Branding Configuration
 *
 * This file centralizes all branding-related constants.
 * Change the product name here and it will reflect everywhere across the application.
 */

export const BRANDING = {
  // Product Information
  productName: 'Omni AI',
  productNameShort: 'Omni',
  tagline: 'AI-Native Execution Intelligence for Engineering Teams',
  description: 'Understand real progress from actual developer activity, not manual updates. Transform signals into insights automatically.',

  // Domain Configuration
  domain: 'omni.vachas.ai',

  // Contact Information
  email: {
    support: 'support@omni.vachas.ai',
    hello: 'hello@omni.vachas.ai',
    careers: 'careers@omni.vachas.ai',
  },

  // Social Media (Optional - can be added later)
  social: {
    twitter: '',
    linkedin: '',
    github: '',
  },

  // Legal
  company: {
    name: 'Omni AI',
    fullName: 'Omni AI',
  },
} as const;

export default BRANDING;
