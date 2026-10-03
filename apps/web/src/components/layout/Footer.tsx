import { siteConfig } from '../../data/siteConfig';
import { SocialIcons } from '../common/SocialIcons';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { MessageCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(buildWhatsAppLink(), '_blank');
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* BLOQUE SUPERIOR */}
      <div className="bg-surface border-b border-border py-6 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-center md:justify-start">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 text-text hover:text-primary transition-colors font-body"
          >
            <MessageCircle className="w-5 h-5 text-whatsapp" />
            <span className="font-medium">Agenda tu cita ahora</span>
          </button>
          <div className="flex items-center gap-3 text-text-secondary font-body">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>{siteConfig.address}</span>
          </div>
        </div>
      </div>

      {/* BLOQUE INFERIOR */}
      <div className="py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HORARIO */}
          <div>
            <h3 className="text-lg font-bold font-heading text-text mb-4">HORARIO</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 text-text-secondary font-body">Lun – Sáb</td>
                  <td className="py-2 text-text font-body text-right">9:00am – 6:30pm</td>
                </tr>
                <tr>
                  <td className="py-2 text-text-secondary font-body">Dom</td>
                  <td className="py-2 text-text-secondary font-body text-right">Cerrado</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SERVICIOS */}
          <div>
            <h3 className="text-lg font-bold font-heading text-text mb-4">SERVICIOS</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to="/servicios"
                    className="text-text-secondary hover:text-primary transition-colors font-body"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NUESTRAS REDES */}
          <div>
            <h3 className="text-lg font-bold font-heading text-text mb-4">NUESTRAS REDES</h3>
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-border py-6 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-secondary text-sm font-body">© 2024 Multiservicios Muños y Aliga. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
