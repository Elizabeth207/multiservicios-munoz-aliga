import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const AnimatedSection = ({ children, className = '', id }: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {children}
    </section>
  );
};
