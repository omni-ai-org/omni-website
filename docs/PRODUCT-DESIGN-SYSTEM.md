# OMNI Design System - React + TypeScript + Tailwind CSS

## Table of Contents
1. [Core Design Principles](#core-design-principles)
2. [Design Tokens](#design-tokens)
3. [Typography System](#typography-system)
4. [Color System](#color-system)
5. [Component Architecture](#component-architecture)
6. [Core Components](#core-components)
7. [Layout Components](#layout-components)
8. [Production Best Practices](#production-best-practices)
9. [Accessibility Guidelines](#accessibility-guidelines)
10. [Performance Patterns](#performance-patterns)

---

## Core Design Principles

### Design Philosophy
- **Brutalist Minimalism**: Bold typography, high contrast, geometric layouts
- **Function First**: Every design decision serves a purpose
- **Consistency**: Unified visual language across all components
- **Performance**: Optimize for speed and smooth interactions
- **Accessibility**: WCAG AA compliant, keyboard navigable

### Visual Identity
```typescript
// design-tokens.ts
export const DESIGN_PRINCIPLES = {
  contrast: 'high', // Black & white dominant
  typography: 'bold', // Large, impactful type
  spacing: 'generous', // Breathing room
  motion: 'purposeful', // Meaningful animations
  depth: 'flat-elevated' // Mostly flat with strategic elevation
} as const;
```

---

## Design Tokens

### Tailwind Configuration
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          light: '#2a2a2a',
          muted: '#4a4a4a',
        },
        paper: {
          DEFAULT: '#fafafa',
          white: '#ffffff',
          gray: '#e8e8e8',
        },
        accent: {
          DEFAULT: '#000000',
          hover: '#1a1a1a',
        },
        status: {
          success: '#0a0a0a',
          error: '#dc2626',
          warning: '#f59e0b',
          info: '#3b82f6',
        },
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        'hero': ['clamp(3rem, 12vw, 9rem)', { lineHeight: '0.9' }],
        'title': ['clamp(2rem, 8vw, 5rem)', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        'tightest': '-0.08em',
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ticker': 'ticker 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(-5%, 10%)' },
          '70%': { transform: 'translate(5%, -10%)' },
          '90%': { transform: 'translate(-3%, 15%)' },
        },
        slideUp: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Typography System

### Type Scale Utilities
```typescript
// utils/typography.ts
export const textStyles = {
  hero: 'font-display text-hero font-extralight tracking-tightest',
  h1: 'font-display text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter',
  h2: 'font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight',
  h3: 'font-display text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight',
  h4: 'font-display text-xl md:text-2xl font-normal tracking-tight',
  h5: 'font-display text-lg md:text-xl font-medium',
  body: 'font-sans text-base font-normal',
  bodyLarge: 'font-sans text-lg font-normal',
  bodySmall: 'font-sans text-sm font-normal',
  caption: 'font-sans text-xs font-normal tracking-wide',
  code: 'font-mono text-sm tracking-tight',
  label: 'font-sans text-xs font-medium tracking-wider uppercase',
} as const;
```

---

## Component Architecture

### Base Component Pattern
```typescript
// types/component-types.ts
import { ReactNode, HTMLAttributes } from 'react';

export interface BaseComponentProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  variant?: string;
  size?: string;
  asChild?: boolean;
}

// utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Core Components

### 1. Button Component
```typescript
// components/ui/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-display tracking-wider uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink',
  {
    variants: {
      variant: {
        primary: 'bg-ink text-paper border-2 border-ink hover:-translate-y-0.5 hover:shadow-[0_4px_0_0] hover:shadow-ink active:translate-y-0 active:shadow-none',
        secondary: 'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-paper',
        ghost: 'bg-transparent text-ink hover:bg-ink/10',
        destructive: 'bg-status-error text-paper border-2 border-status-error hover:brightness-110',
        outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink/5',
      },
      size: {
        xs: 'h-7 px-3 text-xs',
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    loading, 
    leftIcon, 
    rightIcon, 
    children, 
    disabled,
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

### 2. Input Component
```typescript
// components/ui/Input.tsx
import { forwardRef, InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const inputVariants = cva(
  'w-full font-sans bg-paper text-ink placeholder:text-ink/40 transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border-2 border-ink/20 focus:border-ink',
        filled: 'bg-ink/5 border-2 border-transparent focus:border-ink focus:bg-paper',
        underline: 'border-b-2 border-ink/20 focus:border-ink rounded-none px-0',
        ghost: 'border-2 border-transparent hover:border-ink/10 focus:border-ink',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, error, hint, ...props }, ref) => {
    const id = props.id || props.name;
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-xs font-medium tracking-wider uppercase mb-2"
          >
            {label}
          </label>
        )}
        <input
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1 text-xs text-status-error">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${id}-hint`} className="mt-1 text-xs text-ink/60">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
```

### 3. Card Component
```typescript
// components/ui/Card.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const cardVariants = cva(
  'bg-paper text-ink transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'border-2 border-ink',
        elevated: 'border-2 border-ink shadow-[4px_4px_0_0] shadow-ink',
        ghost: 'border border-ink/20',
        filled: 'bg-ink text-paper',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1 hover:shadow-[6px_6px_0_0] hover:shadow-ink',
        glow: 'hover:border-ink hover:bg-ink/5',
        invert: 'hover:bg-ink hover:text-paper',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: 'none',
      padding: 'md',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, hover, padding, className }))}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

// Card subcomponents
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
);

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-display text-2xl font-semibold tracking-tight', className)}
      {...props}
    />
  )
);

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-ink/70 mt-2', className)}
      {...props}
    />
  )
);

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
);

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 pt-4 border-t border-ink/20', className)} {...props} />
  )
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
```

---

## Layout Components

### 1. Navigation Sidebar
```typescript
// components/layout/Sidebar.tsx
import { useState, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { ChevronLeft, Menu } from 'lucide-react';

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, className, collapsible = true, defaultCollapsed = false }, ref) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

    return (
      <aside
        ref={ref}
        className={cn(
          'relative h-screen bg-paper border-r-2 border-ink transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
      >
        {collapsible && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute -right-4 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper hover:bg-ink/90 transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <Menu size={16} /> : <ChevronLeft size={16} />}
          </button>
        )}
        <div className={cn('flex flex-col h-full p-4', collapsed && 'items-center')}>
          {children}
        </div>
      </aside>
    );
  }
);

// Sidebar Item Component
interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({ 
  icon, 
  label, 
  active, 
  collapsed, 
  onClick 
}: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center w-full px-3 py-2 my-1 text-sm font-medium transition-all duration-200',
        'hover:bg-ink hover:text-paper rounded',
        active && 'bg-ink text-paper',
        collapsed ? 'justify-center' : 'justify-start'
      )}
      title={collapsed ? label : undefined}
    >
      {icon && <span className={cn('flex-shrink-0', !collapsed && 'mr-3')}>{icon}</span>}
      {!collapsed && <span>{label}</span>}
    </button>
  );
};

// Sidebar Group Component
interface SidebarGroupProps {
  title?: string;
  children: React.ReactNode;
  collapsed?: boolean;
}

export const SidebarGroup = ({ title, children, collapsed }: SidebarGroupProps) => {
  return (
    <div className="mb-6">
      {title && !collapsed && (
        <h3 className="px-3 mb-2 text-xs font-semibold tracking-wider uppercase text-ink/60">
          {title}
        </h3>
      )}
      {collapsed && title && <div className="h-px bg-ink/20 my-2 mx-2" />}
      {children}
    </div>
  );
};

Sidebar.displayName = 'Sidebar';
```

### 2. Header Component
```typescript
// components/layout/Header.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  transparent?: boolean;
  bordered?: boolean;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, fixed = true, transparent = false, bordered = true, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'w-full z-50 transition-all duration-300',
          fixed && 'fixed top-0 left-0 right-0',
          transparent ? 'bg-transparent' : 'bg-paper',
          bordered && 'border-b-2 border-ink',
          className
        )}
        {...props}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {children}
          </div>
        </div>
      </header>
    );
  }
);

// Header subcomponents
export const HeaderLogo = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center flex-shrink-0">
    <a href="/" className="font-display text-2xl font-bold tracking-tighter text-ink">
      {children}
    </a>
  </div>
);

export const HeaderNav = ({ children }: { children: React.ReactNode }) => (
  <nav className="hidden md:flex items-center space-x-8">
    {children}
  </nav>
);

export const HeaderActions = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center space-x-4">
    {children}
  </div>
);

Header.displayName = 'Header';
```

### 3. Layout Container
```typescript
// components/layout/Container.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
  padded?: boolean;
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[90rem]',
  full: 'max-w-full',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', centered = true, padded = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          sizeMap[size],
          centered && 'mx-auto',
          padded && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
```

### 4. Grid System
```typescript
// components/layout/Grid.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  flow?: 'row' | 'col' | 'dense';
}

const gapMap = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 'md', flow = 'row', ...props }, ref) => {
    const colsClass = typeof cols === 'number' 
      ? `grid-cols-${cols}`
      : cn(
          cols.sm && `sm:grid-cols-${cols.sm}`,
          cols.md && `md:grid-cols-${cols.md}`,
          cols.lg && `lg:grid-cols-${cols.lg}`,
          cols.xl && `xl:grid-cols-${cols.xl}`
        );

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colsClass,
          gapMap[gap],
          flow !== 'row' && `grid-flow-${flow}`,
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';
```

---

## Production Best Practices

### 1. Component Organization
```
src/
├── components/
│   ├── ui/           # Basic reusable components
│   ├── layout/       # Layout components
│   ├── features/     # Feature-specific components
│   └── patterns/     # Complex component patterns
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript types
└── styles/           # Global styles
```

### 2. Custom Hooks
```typescript
// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// hooks/useTheme.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
```

### 3. Form Handling
```typescript
// components/patterns/Form.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema definition
const formSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('email')}
        label="Email"
        type="email"
        error={errors.email?.message}
        placeholder="you@example.com"
      />
      <Input
        {...register('password')}
        label="Password"
        type="password"
        error={errors.password?.message}
        placeholder="••••••••"
      />
      <Button type="submit" fullWidth loading={isSubmitting}>
        Sign In
      </Button>
    </form>
  );
};
```

### 4. Data Fetching Pattern
```typescript
// hooks/useQuery.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

// Custom query hook
export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: api.projects.list,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Custom mutation hook
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.projects.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

// Component using the hooks
export const ProjectList = () => {
  const { data, isLoading, error } = useProjects();
  const createProject = useCreateProject();

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorState error={error} />;

  return (
    <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
      {data?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};
```

---

## Accessibility Guidelines

### 1. Focus Management
```typescript
// utils/focus.ts
export const focusableElements = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export const trapFocus = (element: HTMLElement) => {
  const focusable = element.querySelectorAll(focusableElements);
  const firstFocusable = focusable[0] as HTMLElement;
  const lastFocusable = focusable[focusable.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  return () => element.removeEventListener('keydown', handleKeyDown);
};
```

### 2. ARIA Patterns
```typescript
// components/ui/Dialog.tsx
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';
import { trapFocus } from '@/utils/focus';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Dialog = ({ open, onClose, title, description, children }: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && dialogRef.current) {
      const cleanup = trapFocus(dialogRef.current);
      dialogRef.current.focus();
      return cleanup;
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby={description ? 'dialog-description' : undefined}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/50" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Dialog content */}
      <div
        ref={dialogRef}
        className="relative bg-paper border-2 border-ink p-6 max-w-md w-full mx-4"
        tabIndex={-1}
      >
        <h2 id="dialog-title" className="font-display text-2xl mb-2">
          {title}
        </h2>
        {description && (
          <p id="dialog-description" className="text-ink/70 mb-4">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};
```

---

## Performance Patterns

### 1. Code Splitting
```typescript
// routes/index.tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Skeleton } from '@/components/ui/Skeleton';

// Lazy load route components
const Dashboard = lazy(() => import('./Dashboard'));
const Projects = lazy(() => import('./Projects'));
const Settings = lazy(() => import('./Settings'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Skeleton className="h-screen" />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
};
```

### 2. Memoization Patterns
```typescript
// components/features/DataTable.tsx
import { memo, useMemo, useCallback } from 'react';

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onSort?: (key: keyof T) => void;
}

export const DataTable = memo(<T extends Record<string, any>>({
  data,
  columns,
  onSort,
}: DataTableProps<T>) => {
  // Memoize expensive computations
  const sortedData = useMemo(() => {
    // Sorting logic here
    return data;
  }, [data]);

  // Memoize callbacks
  const handleSort = useCallback((key: keyof T) => {
    onSort?.(key);
  }, [onSort]);

  return (
    <table className="w-full border-2 border-ink">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={String(column.key)}
              onClick={() => handleSort(column.key)}
              className="p-4 text-left font-display tracking-wider uppercase cursor-pointer hover:bg-ink hover:text-paper"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index} className="border-t border-ink/20">
            {columns.map((column) => (
              <td key={String(column.key)} className="p-4">
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

DataTable.displayName = 'DataTable';
```

### 3. Virtual Scrolling
```typescript
// components/patterns/VirtualList.tsx
import { useVirtual } from '@tanstack/react-virtual';
import { useRef } from 'react';

interface VirtualListProps<T> {
  items: T[];
  height: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export const VirtualList = <T,>({ items, height, renderItem }: VirtualListProps<T>) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtual({
    parentRef,
    size: items.length,
    estimateSize: useCallback(() => 80, []), // Estimated item height
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className="overflow-auto border-2 border-ink"
      style={{ height }}
    >
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualItem) => (
          <div
            key={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(items[virtualItem.index], virtualItem.index)}
          </div>
        ))}
      </div>
    </div>
  );
};
```

---

## Testing Patterns

### 1. Component Testing
```typescript
// components/ui/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { rerender } = render(<Button variant="secondary">Button</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('bg-transparent');
    
    rerender(<Button variant="primary">Button</Button>);
    expect(button).toHaveClass('bg-ink');
  });
});
```

### 2. Hook Testing
```typescript
// hooks/__tests__/useTheme.test.ts
import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../useTheme';

describe('useTheme Hook', () => {
  it('initializes with system theme', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('system');
  });

  it('updates theme correctly', () => {
    const { result } = renderHook(() => useTheme());
    
    act(() => {
      result.current.setTheme('dark');
    });
    
    expect(result.current.theme).toBe('dark');
  });

  it('persists theme to localStorage', () => {
    const { result } = renderHook(() => useTheme());
    
    act(() => {
      result.current.setTheme('light');
    });
    
    const stored = localStorage.getItem('theme-storage');
    expect(stored).toContain('"theme":"light"');
  });
});
```

---

## State Management Patterns

### 1. Zustand Store Setup
```typescript
// store/app.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface AppState {
  // State
  user: User | null;
  projects: Project[];
  selectedProjectId: string | null;
  isLoading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setProjects: (projects: Project[]) => void;
  selectProject: (id: string) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    immer((set) => ({
      // Initial state
      user: null,
      projects: [],
      selectedProjectId: null,
      isLoading: false,

      // Actions
      setUser: (user) => set((state) => {
        state.user = user;
      }),

      setProjects: (projects) => set((state) => {
        state.projects = projects;
      }),

      selectProject: (id) => set((state) => {
        state.selectedProjectId = id;
      }),

      updateProject: (id, updates) => set((state) => {
        const index = state.projects.findIndex((p) => p.id === id);
        if (index !== -1) {
          state.projects[index] = { ...state.projects[index], ...updates };
        }
      }),

      setLoading: (loading) => set((state) => {
        state.isLoading = loading;
      }),
    })),
    {
      name: 'app-store',
    }
  )
);

// Selectors
export const useUser = () => useAppStore((state) => state.user);
export const useProjects = () => useAppStore((state) => state.projects);
export const useSelectedProject = () => {
  const selectedId = useAppStore((state) => state.selectedProjectId);
  const projects = useAppStore((state) => state.projects);
  return projects.find((p) => p.id === selectedId);
};
```

---

## Error Handling Patterns

### 1. Error Boundary
```typescript
// components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // Send to error reporting service
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card variant="elevated" className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Something went wrong</CardTitle>
              <CardDescription>
                An unexpected error occurred. Please try again.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {process.env.NODE_ENV === 'development' && (
                <pre className="mb-4 p-4 bg-ink/5 text-xs overflow-auto">
                  {this.state.error?.stack}
                </pre>
              )}
              <Button onClick={this.handleReset} variant="primary" fullWidth>
                Try again
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## Animation Utilities

### 1. Framer Motion Patterns
```typescript
// utils/animations.ts
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down'): Variants => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'right' || direction === 'down' ? 100 : -100;

  return {
    hidden: {
      [axis]: value,
      opacity: 0,
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

// Usage in component
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export const AnimatedList = ({ items }: { items: string[] }) => {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={fadeInUp}
          className="p-4 bg-paper border-2 border-ink"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};
```

---

## Environment Configuration

### 1. TypeScript Config
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"],
      "@/store/*": ["./src/store/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### 2. ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

---

## Deployment Checklist

### Production Build Optimization
- [ ] Enable Tree Shaking
- [ ] Configure Code Splitting
- [ ] Optimize Bundle Size
- [ ] Enable Gzip/Brotli Compression
- [ ] Configure CDN for Static Assets
- [ ] Set up Error Monitoring (Sentry)
- [ ] Implement Analytics
- [ ] Add SEO Meta Tags
- [ ] Configure CSP Headers
- [ ] Enable Service Worker for PWA

### Performance Monitoring
```typescript
// utils/performance.ts
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      // Time to First Byte
      ttfb: perfData.responseStart - perfData.fetchStart,
      // DOM Content Loaded
      dcl: perfData.domContentLoadedEventEnd - perfData.fetchStart,
      // Load Complete
      load: perfData.loadEventEnd - perfData.fetchStart,
      // First Contentful Paint
      fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };

    console.log('Performance Metrics:', metrics);
    // Send to analytics service
  }
};
```

---

## Summary

This design system provides:
1. **Consistent Design Language** - Unified visual and interaction patterns
2. **Type Safety** - Full TypeScript coverage with proper types
3. **Accessibility** - WCAG AA compliant components
4. **Performance** - Optimized for production with lazy loading and memoization
5. **Developer Experience** - Clear patterns and reusable components
6. **Scalability** - Modular architecture that grows with your needs