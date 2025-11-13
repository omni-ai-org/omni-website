import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Container Component - Minimalistic Design System
 *
 * A responsive container for consistent page layouts with proper spacing.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8';

  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${className}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};

export default Container;
