import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

/**
 * Button Component - Brutalist Design System
 *
 * Sharp, high-contrast buttons with hover effects
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-normal tracking-wider uppercase transition-all duration-300 cursor-pointer relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'border-2 border-ink bg-ink text-paper hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#2a2a2a]',
    secondary: 'border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-paper',
  };

  const sizeStyles = {
    sm: 'px-4 md:px-6 py-2 text-xs md:text-sm',
    md: 'px-8 md:px-10 lg:px-12 py-4 md:py-5 text-sm md:text-base',
    lg: 'px-10 md:px-14 lg:px-16 py-4 md:py-5 lg:py-6 text-base md:text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim();

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
