import type { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md';
}

export const IconBadge = ({ icon: Icon, className = '', size = 'sm' }: IconBadgeProps) => {
  const dim = size === 'sm' ? 'w-5 h-5' : 'w-7 h-7';
  return <Icon className={`${dim} text-accent ${className}`} strokeWidth={1.75} aria-hidden />;
};
