import { Hero } from '../components/home/Hero';
import { ServicesSummary } from '../components/home/ServicesSummary';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { QuickContactAccess } from '../components/home/QuickContactAccess';
import { PageSeo } from '../lib/seo';

export const HomePage = () => {
  return (
    <>
      <PageSeo
        title="Inicio"
        description="Multiservicios Muños en Huancayo ofrece soluciones integrales para tu vehículo: electricidad automotriz, llaves y sistemas de seguridad, instalaciones de alarmas, GPS, pantallas y más."
        keywords="electricidad automotriz, llaves vehículos, alarmas, GPS, Huancayo, Junín"
      />
      <div className="min-h-screen">
        <Hero />
        <ServicesSummary />
        <div className="bg-gradient-to-b from-surface/20 to-background">
          <FeaturedProducts />
        </div>
        <WhyChooseUs />
        <QuickContactAccess />
      </div>
    </>
  );
};
