import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Wrench, Image, Users, MessageCircle, Wrench as BrandIcon } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/productos', label: 'Productos', icon: Package },
    { to: '/servicios', label: 'Servicios', icon: Wrench },
    { to: '/galeria', label: 'Galería', icon: Image },
    { to: '/nosotros', label: 'Nosotros', icon: Users },
    { to: '/contacto', label: 'Contacto', icon: MessageCircle },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border py-4 px-8 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrandIcon className="w-6 h-6 text-primary" />
          <h1 className="text-lg md:text-xl font-bold font-heading text-text tracking-tight truncate">
            Multiservicios Muños y Aliga
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-text text-2xl focus:outline-none"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                  location.pathname === link.to
                    ? 'text-primary font-semibold'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile navigation dropdown */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col px-8 py-4 gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleLinkClick}
                    className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                      location.pathname === link.to
                        ? 'text-primary font-semibold'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
