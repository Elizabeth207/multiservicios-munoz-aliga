import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface SpecialtyCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const SpecialtyCard = ({ name, description, icon: Icon, href }: SpecialtyCardProps) => {
  return (
    <Link to={href} className="card-premium group block h-full focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
      <div className="card-premium-inner p-6 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-steel/10 flex items-center justify-center mb-4 ring-1 ring-border-light motion-safe:group-hover:scale-105 motion-safe:transition-transform">
          <Icon className="w-7 h-7 text-accent" strokeWidth={1.75} aria-hidden />
        </div>
        <h3 className="text-lg font-bold font-heading text-ink mb-2">{name}</h3>
        <p className="text-sm text-muted font-body flex-1 leading-relaxed">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent font-body group-hover:gap-2 motion-safe:transition-all">
          Explorar <ArrowRight className="w-4 h-4 motion-safe:group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
};
