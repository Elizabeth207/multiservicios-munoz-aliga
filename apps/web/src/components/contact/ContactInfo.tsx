import { MapPin, Clock, Phone } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { SocialIcons } from '../common/SocialIcons';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export const ContactInfo = () => {
  return (
    <div className="card-light p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 font-heading text-ink">Información de contacto</h2>

      <div className="space-y-5">
        <WhatsAppCTA className="w-full sm:w-auto" label="WhatsApp prioritario" />

        <p className="flex items-start gap-3 text-muted font-body text-sm">
          <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
          <button
            type="button"
            onClick={() => window.open(buildWhatsAppLink(), '_blank', 'noopener,noreferrer')}
            className="text-left hover:text-accent motion-safe:transition-colors"
          >
            +{siteConfig.whatsappNumber}
          </button>
        </p>

        <p className="flex items-start gap-3 text-muted font-body text-sm">
          <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
          <span>{siteConfig.address}</span>
        </p>

        <p className="flex items-start gap-3 text-muted font-body text-sm">
          <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
          <span>{siteConfig.hours}</span>
        </p>

        <div>
          <p className="text-sm font-medium text-ink mb-2 font-body">Redes sociales</p>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
