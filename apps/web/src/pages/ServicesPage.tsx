import { useState } from 'react';
import { services } from '../data/services';
import { ServiceCategoryGroup } from '../components/services/ServiceCategoryGroup';
import { PageSeo } from '../lib/seo';
import { Wrench } from 'lucide-react';

export const ServicesPage = () => {
  const [imageError, setImageError] = useState(false);
  
  const groupTitles: Record<string, string> = {
    'electricidad': 'Electricidad automotriz',
    'llaves-seguridad': 'Llaves y sistemas de seguridad',
    'instalaciones': 'Instalaciones',
  };

  const groups = services.reduce((acc, service) => {
    if (!acc[service.groupId]) {
      acc[service.groupId] = [];
    }
    acc[service.groupId].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <>
      <PageSeo
        title="Servicios automotrices"
        description="Servicios automotrices en Huancayo: electricidad automotriz, diagnóstico y reparación de arrancadores y alternadores, llaves y sistemas de seguridad, copia de llaves, programación de chips, instalaciones de alarmas, GPS y accesorios."
        keywords="servicios automotrices, electricidad automotriz, llaves vehículos, cerrajería, alarmas, GPS, Huancayo"
      />
      {/* Banner */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop"
            alt="Servicios automotrices"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : null}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"
          style={{
            background: imageError 
              ? 'linear-gradient(135deg, #0a0a0f 0%, #a855f7 100%)'
              : undefined
          }}
        />
        <div className="absolute top-10 right-10 opacity-10">
          <Wrench className="w-48 h-48 text-primary" />
        </div>
        <div className="relative z-10 flex items-center h-full px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>Nuestros Servicios</h1>
        </div>
      </div>
      
      <div className="p-8 bg-background min-h-screen">
        {Object.entries(groups).map(([groupId, groupServices], index) => (
          <div key={groupId} className={index % 2 === 1 ? 'bg-gradient-to-b from-surface/20 to-background -mx-8 px-8 py-8' : ''}>
            <ServiceCategoryGroup
              services={groupServices}
              groupTitle={groupTitles[groupId] || groupId}
            />
          </div>
        ))}
      </div>
    </>
  );
};
