import { services } from '../data/services';
import { ServiceCategoryGroup } from '../components/services/ServiceCategoryGroup';
import { PageSeo } from '../lib/seo';
import { PageHero } from '../components/ui/PageHero';

const groupTitles: Record<string, string> = {
  electricidad: 'Electricidad automotriz',
  'llaves-seguridad': 'Llaves y sistemas de seguridad',
  instalaciones: 'Instalaciones',
};

const groupLayouts: Record<string, 'grid' | 'horizontal' | 'featured'> = {
  electricidad: 'featured',
  'llaves-seguridad': 'horizontal',
  instalaciones: 'grid',
};

export const ServicesPage = () => {
  const groups = services.reduce(
    (acc, service) => {
      if (!acc[service.groupId]) acc[service.groupId] = [];
      acc[service.groupId].push(service);
      return acc;
    },
    {} as Record<string, typeof services>
  );

  const order = ['electricidad', 'llaves-seguridad', 'instalaciones'];

  return (
    <>
      <PageSeo
        title="Servicios automotrices"
        description="Electricidad, llaves, programación de chips, alarmas, GPS e instalaciones en Huancayo."
        keywords="servicios automotrices, electricidad, llaves, alarmas, GPS, Huancayo"
      />
      <PageHero
        variant="compact"
        title="Nuestros servicios"
        subtitle="Diagnóstico, reparación e instalaciones especializadas para tu vehículo."
      />

      <div className="section-light min-h-screen py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {order.map((groupId) => {
            const groupServices = groups[groupId];
            if (!groupServices?.length) return null;
            return (
              <ServiceCategoryGroup
                key={groupId}
                services={groupServices}
                groupTitle={groupTitles[groupId] || groupId}
                layout={groupLayouts[groupId]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
