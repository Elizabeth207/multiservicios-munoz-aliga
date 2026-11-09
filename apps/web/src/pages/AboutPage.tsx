import { AboutSection } from '../components/about/AboutSection';
import { WhyChooseUsFull } from '../components/about/WhyChooseUsFull';
import { PageSeo } from '../lib/seo';
import { PageHero } from '../components/ui/PageHero';
import { ContactCTA } from '../components/ui/ContactCTA';

export const AboutPage = () => {
  return (
    <>
      <PageSeo
        title="Sobre nosotros"
        description="Multiservicios Muñoz y Aliga, taller automotriz en Huancayo, El Tambo."
        keywords="taller automotriz, Huancayo, El Tambo"
      />
      <PageHero
        variant="compact"
        title="Sobre nosotros"
        subtitle="Conoce nuestro taller y forma de trabajo en Huancayo."
        imageSrc="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Mecánico trabajando"
      />
      <AboutSection />
      <WhyChooseUsFull />
      <ContactCTA />
    </>
  );
};
