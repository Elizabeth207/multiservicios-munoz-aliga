import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeading } from '../ui/SectionHeading';

interface AboutBlockProps {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  imageLeft: boolean;
}

const AboutBlock = ({ title, content, imageUrl, imageAlt, imageLeft }: AboutBlockProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className={`${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-[var(--shadow-card)]"
          onError={(e) => {
            e.currentTarget.src = '/assets/images/placeholders/producto-generico.svg';
            e.currentTarget.classList.add('object-contain', 'p-8', 'bg-[#eef0f3]');
          }}
        />
      </div>
      <div className={`${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="text-2xl font-bold mb-4 font-heading text-ink">{title}</h3>
        <p className="text-lg text-muted leading-relaxed font-body">{content}</p>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section className="section-light py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          align="left"
          eyebrow="Nosotros"
          title="Trabajo automotriz con atención cercana"
          description="Conoce cómo trabajamos en Huancayo, El Tambo."
        />

        <AboutBlock
          title="¿Quiénes somos?"
          content="En Multiservicios Muñoz y Aliga ofrecemos soluciones integrales para vehículos: productos, instalación, programación y reparación eléctrica con atención directa al cliente."
          imageUrl="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop"
          imageAlt="Técnico en taller automotriz"
          imageLeft
        />

        <AboutBlock
          title="Nuestro compromiso"
          content="Ofrecemos atención personalizada y trabajo de calidad, adaptándonos a las necesidades de cada vehículo y cliente."
          imageUrl="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1920&auto=format&fit=crop"
          imageAlt="Herramientas automotrices"
          imageLeft={false}
        />

        <AboutBlock
          title="Nuestra forma de trabajo"
          content="Diagnóstico y soluciones técnicas en electricidad, llaves y seguridad vehicular. Coordina tu visita o consulta por WhatsApp."
          imageUrl="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=1920&auto=format&fit=crop"
          imageAlt="Espacio de trabajo automotriz"
          imageLeft
        />
      </div>
    </section>
  );
};
