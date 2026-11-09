import { MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeading } from './SectionHeading';
import { WhatsAppCTA } from './WhatsAppCTA';
import { PrimaryButton } from './PrimaryButton';

export const ContactCTA = () => {
  return (
    <section className="section-dark py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          light={false}
          eyebrow="Contacto"
          title="¿Listo para atender tu vehículo?"
          description="Escríbenos por WhatsApp o visita nuestro taller en Huancayo, El Tambo."
        />
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <WhatsAppCTA size="lg" />
          <PrimaryButton to="/contacto" variant="ghost" size="lg">
            Formulario de contacto
          </PrimaryButton>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-sm text-text-secondary font-body">
          <span className="inline-flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-accent" aria-hidden />
            {siteConfig.address}
          </span>
          <span className="inline-flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-accent" aria-hidden />
            {siteConfig.hours}
          </span>
        </div>
      </div>
    </section>
  );
};
