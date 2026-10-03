import type { Service } from '../../types/service';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { Zap, Key, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const groupIcons: Record<string, LucideIcon> = {
  'electricidad': Zap,
  'llaves-seguridad': Key,
  'instalaciones': Wrench,
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `Hola, quisiera consultar por el servicio: ${service.name}`;
    window.open(buildWhatsAppLink(message), '_blank');
  };

  const IconComponent = groupIcons[service.groupId] || Wrench;

  return (
    <div className="relative bg-gradient-to-br from-surface to-[#16416e] rounded-lg p-4 flex flex-col gap-2 shadow-2xl shadow-black/35 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-2 border-t border-surface-light">
      <div className="absolute top-3 right-3 bg-primary/20 p-2 rounded-full backdrop-blur-sm">
        <IconComponent className="w-5 h-5 text-primary" />
      </div>
      {service.image && (
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-48 object-cover rounded bg-background transition-transform duration-500 hover:scale-105"
        />
      )}
      <h3 className="font-semibold text-lg font-heading text-text">{service.name}</h3>
      {service.description && (
        <p className="text-sm text-text-secondary mt-1 font-body">{service.description}</p>
      )}
      <button 
        onClick={handleWhatsAppClick}
        className="mt-auto bg-secondary text-text px-4 py-2 rounded hover:bg-primary transition-all duration-300 font-medium font-body shadow-lg shadow-black/30 hover:shadow-primary/50 hover:scale-105"
      >
        Consultar por WhatsApp
      </button>
    </div>
  );
};
