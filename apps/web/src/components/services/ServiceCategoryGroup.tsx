import type { Service } from '../../types/service';
import { ServiceCard } from './ServiceCard';

interface ServiceCategoryGroupProps {
  services: Service[];
  groupTitle: string;
  layout?: 'grid' | 'horizontal' | 'featured';
}

export const ServiceCategoryGroup = ({
  services,
  groupTitle,
  layout = 'grid',
}: ServiceCategoryGroupProps) => {
  const featured = services[0];
  const rest = services.slice(1);

  if (layout === 'featured' && featured) {
    return (
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-ink mb-6">{groupTitle}</h2>
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <ServiceCard service={featured} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((service) => (
            <ServiceCard key={service.id} service={service} variant="horizontal" />
          ))}
        </div>
      </section>
    );
  }

  if (layout === 'horizontal') {
    return (
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-ink mb-6">{groupTitle}</h2>
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="horizontal" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-14">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-ink mb-6">{groupTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
