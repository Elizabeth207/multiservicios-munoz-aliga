import { siteConfig } from '../../data/siteConfig';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { SocialIcons } from '../common/SocialIcons';

export const ContactInfo = () => {
  const handleWhatsAppClick = () => {
    window.open(buildWhatsAppLink(), '_blank');
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 font-heading text-text">Información de Contacto</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1 font-heading text-text">WhatsApp</h3>
          <button
            onClick={handleWhatsAppClick}
            className="text-whatsapp hover:text-whatsapp/80 font-medium transition-colors font-body"
          >
            {siteConfig.whatsappNumber}
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1 font-heading text-text">Dirección</h3>
          <p className="text-text-secondary font-body">
            {siteConfig.address || <span className="text-text-secondary/50">(pendiente)</span>}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1 font-heading text-text">Horario</h3>
          <p className="text-text-secondary font-body">
            {siteConfig.hours || <span className="text-text-secondary/50">(pendiente)</span>}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 font-heading text-text">Redes Sociales</h3>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
