import type { Service } from '../../types/service';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { getServiceIcon } from '../../lib/automotiveIcons';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { PrimaryButton } from '../ui/PrimaryButton';
import { IconBadge } from '../ui/IconBadge';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'horizontal';
}

export const ServiceCard = ({ service, variant = 'default' }: ServiceCardProps) => {
  const handleWhatsAppClick = () => {
    window.open(
      buildWhatsAppLink(`Hola, quisiera consultar por el servicio: ${service.name}`),
      '_blank',
      'noopener,noreferrer'
    );
  };

  if (variant === 'horizontal') {
    return (
      <article className="card-light group grid sm:grid-cols-[200px_1fr] gap-0 overflow-hidden">
        {service.image && (
          <ResponsiveImage
            src={service.image}
            alt={service.name}
            aspectClass="aspect-[4/3] sm:aspect-auto sm:h-full min-h-[160px]"
            className="rounded-none sm:rounded-l-xl"
          />
        )}
        <div className="p-5 flex flex-col justify-center">
          <IconBadge icon={getServiceIcon(service.name, service.groupId)} size="md" className="mb-2" />
          <h3 className="font-bold text-lg font-heading text-ink">{service.name}</h3>
          {service.description && (
            <p className="text-sm text-muted font-body mt-1">{service.description}</p>
          )}
          <PrimaryButton variant="whatsapp" size="sm" className="mt-4 w-fit" onClick={handleWhatsAppClick}>
            Cotizar servicio
          </PrimaryButton>
        </div>
      </article>
    );
  }

  return (
    <article className="card-light group flex flex-col overflow-hidden h-full">
      {service.image && (
        <ResponsiveImage src={service.image} alt={service.name} aspectClass="aspect-[16/10]" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <IconBadge icon={getServiceIcon(service.name, service.groupId)} size="md" className="mb-2" />
        <h3 className="font-bold text-lg font-heading text-ink">{service.name}</h3>
        {service.description && (
          <p className="text-sm text-muted font-body mt-1 flex-1">{service.description}</p>
        )}
        <PrimaryButton variant="whatsapp" size="sm" className="w-full mt-4" onClick={handleWhatsAppClick}>
          Cotizar servicio
        </PrimaryButton>
      </div>
    </article>
  );
};
