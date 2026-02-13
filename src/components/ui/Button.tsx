import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-obsidian font-semibold hover:bg-gold-hover shadow-lg shadow-gold/20 hover:shadow-gold/30',
  secondary:
    'bg-surface dark:bg-surface border border-steel text-text-primary hover:border-gold/50 hover:text-gold',
  ghost:
    'text-text-muted hover:text-gold hover:bg-white/5',
  outline:
    'border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', href, external, children, ...props }, ref) => {
    const prefersReduced = useReducedMotion();
    const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const motionProps = prefersReduced
      ? {}
      : {
          whileHover: { y: -2, transition: { duration: 0.2 } },
          whileTap: { scale: 0.97 },
        };

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }

    // Extract only the props that are safe for motion.button
    const { onClick, disabled, type, 'aria-label': ariaLabel, id } = props;

    return (
      <motion.button
        ref={ref}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        type={type}
        aria-label={ariaLabel}
        id={id}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
