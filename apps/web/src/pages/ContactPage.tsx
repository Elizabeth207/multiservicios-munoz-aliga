import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { MapEmbed } from '../components/contact/MapEmbed';
import { PageSeo } from '../lib/seo';
import { PageHero } from '../components/ui/PageHero';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import { ResponsiveImage } from '../components/ui/ResponsiveImage';
import { siteConfig } from '../data/siteConfig';

export const ContactPage = () => {
  return (
    <>
      <PageSeo
        title="Contacto"
        description="WhatsApp, ubicación y formulario de contacto — Multiservicios Muñoz y Aliga, Huancayo."
        keywords="contacto, WhatsApp, taller, Huancayo, El Tambo"
      />
      <PageHero
        variant="compact"
        title="Contacto"
        subtitle="Priorizamos WhatsApp para cotizaciones rápidas. También puedes usar el formulario o visitarnos."
        imageSrc="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Atención al cliente"
      />

      <div className="section-light py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-4 mb-10 p-6 md:p-8 rounded-2xl bg-carbon text-text">
            <p className="text-text-secondary font-body max-w-xl">
              Escríbenos con el producto o servicio que necesitas. Horario: {siteConfig.hours}
            </p>
            <WhatsAppCTA size="lg" label="Abrir WhatsApp ahora" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8 order-2 lg:order-1">
              <ContactInfo />
              <ContactForm />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <MapEmbed />
              <div className="card-light p-6">
                <h2 className="text-xl font-bold font-heading text-ink mb-4">Nuestro local</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ResponsiveImage
                    src="/assets/local.jpg.png"
                    alt="Fachada del local"
                    aspectClass="aspect-[4/3]"
                  />
                  <ResponsiveImage
                    src="/assets/local.png"
                    alt="Interior del local"
                    aspectClass="aspect-[4/3]"
                  />
                </div>
                <p className="text-muted text-sm mt-4 font-body">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
