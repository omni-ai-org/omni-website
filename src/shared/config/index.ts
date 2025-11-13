/**
 * Shared Configuration Index
 *
 * Central export point for all configuration files
 */

export { BRANDING } from './branding';

// Environment-based configuration
export const CONFIG = {
  // API Configuration
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001',
    timeout: 30000,
  },

  // Feature Flags
  features: {
    enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
    enableNotifications: process.env.REACT_APP_ENABLE_NOTIFICATIONS === 'true',
  },

  // Application Configuration
  app: {
    environment: process.env.NODE_ENV || 'development',
    version: process.env.REACT_APP_VERSION || '1.0.0',
  },
} as const;

export default CONFIG;
