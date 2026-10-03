import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/productos', label: 'Productos' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/galeria', label: 'Galería' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border py-4 px-8 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-bold font-heading text-text tracking-tight truncate">
          Multiservicios Muños y Aliga
        </h1>
        
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
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-primary font-semibold'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation dropdown */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col px-8 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-primary font-semibold'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
