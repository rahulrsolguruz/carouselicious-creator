
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary: 'bg-neobrutalism-primary text-white hover:bg-neobrutalism-primary/90',
      secondary: 'bg-neobrutalism-secondary text-neobrutalism-dark hover:bg-neobrutalism-secondary/90',
      tertiary: 'bg-neobrutalism-tertiary text-white hover:bg-neobrutalism-tertiary/90',
      outline: 'bg-white text-neobrutalism-dark border-2 border-neobrutalism-dark hover:bg-gray-50',
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const baseClasses = 'font-medium border-2 border-black shadow-neo-sm inline-flex items-center justify-center transition-all duration-200 font-display hover:-translate-y-1 active:translate-y-0 active:shadow-none focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0';

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          loading ? 'opacity-80 cursor-not-allowed' : '',
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : icon && iconPosition === 'left' ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        
        {children}
        
        {!loading && icon && iconPosition === 'right' ? (
          <span className="ml-2">{icon}</span>
        ) : null}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
