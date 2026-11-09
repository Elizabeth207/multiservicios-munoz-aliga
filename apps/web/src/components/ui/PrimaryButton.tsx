import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent/90 shadow-md shadow-accent/25',
  secondary:
    'bg-steel text-text border border-border hover:bg-steel/90',
  ghost:
    'border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white',
  whatsapp:
    'bg-whatsapp text-white hover:bg-whatsapp-dark shadow-md shadow-whatsapp/30',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonProps extends BaseProps {
  to?: never;
}

interface LinkButtonProps extends BaseProps {
  to: string;
}

export const PrimaryButton = (props: ButtonProps | LinkButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    type = 'button',
    disabled,
    onClick,
  } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-body btn-press
    motion-safe:transition-colors motion-safe:duration-200
    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
    ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
