import type { Service } from '../../types/service';
import { ServiceCard } from './ServiceCard';

interface ServiceCategoryGroupProps {
  services: Service[];
  groupTitle: string;
}

export const ServiceCategoryGroup = ({ services, groupTitle }: ServiceCategoryGroupProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 font-heading text-primary">{groupTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
