import { siteConfig } from '../../data/siteConfig';
import { SocialIcons } from '../common/SocialIcons';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { MapPin, Clock } from 'lucide-react';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export const Footer = () => {
  return (
    <footer className="bg-carbon text-text border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-bold font-heading text-lg mb-3">{siteConfig.businessName}</p>
          <p className="text-sm text-text-secondary font-body leading-relaxed">
            Electricidad, llaves, seguridad e instalaciones para tu vehículo en Huancayo.
          </p>
          <div className="mt-4">
            <WhatsAppCTA size="sm" label="WhatsApp" />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 font-body">Navegación</h3>
          <ul className="space-y-2 text-sm font-body">
            {[
              { to: '/productos', label: 'Productos' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/galeria', label: 'Galería' },
              { to: '/contacto', label: 'Contacto' },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-text-secondary hover:text-accent motion-safe:transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 font-body">Especialidades</h3>
          <ul className="space-y-2 text-sm font-body">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to="/productos"
                  className="text-text-secondary hover:text-accent motion-safe:transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 font-body">Ubicación</h3>
          <p className="flex items-start gap-2 text-sm text-text-secondary font-body mb-3">
            <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
            {siteConfig.address}
          </p>
          <p className="flex items-start gap-2 text-sm text-text-secondary font-body mb-4">
            <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
            {siteConfig.hours}
          </p>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 font-body">Redes</h3>
          <SocialIcons />
        </div>
      </div>

      <div className="border-t border-border py-6 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] lg:pb-6 text-center">
        <p className="text-text-secondary text-sm font-body">
          © {new Date().getFullYear()} {siteConfig.businessName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
