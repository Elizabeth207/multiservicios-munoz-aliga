import { siteConfig } from '../data/siteConfig';
import { PageHero } from '../components/ui/PageHero';
import { HomeIntro } from '../components/home/HomeIntro';
import { ServicesSummary } from '../components/home/ServicesSummary';
import { HomeFeaturedServices } from '../components/home/HomeFeaturedServices';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { HomeGalleryPreview } from '../components/home/HomeGalleryPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ContactCTA } from '../components/ui/ContactCTA';
import { PageSeo } from '../lib/seo';

export const HomePage = () => {
  return (
    <>
      <PageSeo
        title="Inicio"
        description="Multiservicios Muñoz y Aliga en Huancayo: electricidad automotriz, llaves, alarmas, GPS, pantallas y más para tu vehículo."
        keywords="electricidad automotriz, llaves vehículos, alarmas, GPS, Huancayo, Junín"
      />
      <PageHero
        variant="split"
        title={siteConfig.businessName}
        subtitle="Soluciones integrales para tu vehículo: electricidad, llaves, seguridad e instalaciones con atención en Huancayo."
        showDefaultCtas
        imageAlt="Técnico trabajando en vehículo"
      />
      <HomeIntro />
      <ServicesSummary />
      <HomeFeaturedServices />
      <FeaturedProducts />
      <HomeGalleryPreview />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
};
