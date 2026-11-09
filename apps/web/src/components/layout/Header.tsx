import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/galeria', label: 'Galería' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-carbon/95 backdrop-blur-md border-b border-border shadow-sm shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 min-w-0 focus-visible:outline-offset-4 motion-safe:transition-opacity hover:opacity-90"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white font-bold text-sm font-heading shrink-0 shadow-md shadow-accent/25">
            MM
          </span>
          <span className="text-sm sm:text-base font-bold font-heading text-text truncate max-w-[140px] sm:max-w-none">
            {siteConfig.businessName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg text-sm font-medium font-body motion-safe:transition-all
                ${location.pathname === link.to
                  ? 'text-accent bg-steel/60 shadow-inner'
                  : 'text-text-secondary hover:text-text hover:bg-steel/30'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <WhatsAppCTA size="sm" label="WhatsApp" />
        </div>

        <div className="lg:hidden flex items-center">
          <WhatsAppCTA size="sm" label="WA" className="!px-3" />
        </div>
      </div>
    </header>
  );
};
