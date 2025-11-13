import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

/**
 * Card Component - Minimalistic Design System
 *
 * A clean card component with generous white space and subtle shadows.
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
  onClick,
}) => {
  const baseStyles = 'bg-white rounded-xl border border-neutral-200 transition-all';

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:border-neutral-300 cursor-pointer'
    : 'shadow-sm';

  const combinedClassName = `${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`.trim();

  return (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
