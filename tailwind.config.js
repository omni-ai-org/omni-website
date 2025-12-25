/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brutalist color system from HTML
        ink: '#0a0a0a',
        paper: '#fafafa',
        ghost: '#e8e8e8',
        shadow: '#2a2a2a',
        accent: '#000',
      },
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "system-ui",
          "-apple-system",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.8rem, 10vw, 7.5rem)',
        'hero-mobile': 'clamp(2.5rem, 15vw, 5rem)',
      },
      letterSpacing: {
        'tight': '-1px',
        'tighter': '-2px',
        'extra-tight': '-4px',
        'ultra-tight': '-8px',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'slideUp': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slideDown': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fadeIn': 'fadeIn 1s ease forwards',
        'pulse-custom': 'pulseCustom 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'ripple': 'ripple 2s linear infinite',
        'ticker': 'ticker 20s linear infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(-5%, 10%)' },
          '70%': { transform: 'translate(5%, -10%)' },
          '90%': { transform: 'translate(-3%, 15%)' },
        },
        slideUp: {
          'to': { transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
        fadeIn: {
          'to': { opacity: '1' },
        },
        pulseCustom: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-100%, 0)' },
        },
      },
    },
  },
  plugins: [],
}
