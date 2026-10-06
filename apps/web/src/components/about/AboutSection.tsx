import { useScrollReveal } from '../../hooks/useScrollReveal';

interface AboutBlockProps {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  imageLeft: boolean;
  fallbackGradient: string;
}

const AboutBlock = ({ title, content, imageUrl, imageAlt, imageLeft, fallbackGradient }: AboutBlockProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`order-1 ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative rounded-lg overflow-hidden shadow-lg shadow-primary/20">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-64 md:h-80 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.background = fallbackGradient;
            }}
          />
        </div>
      </div>
      <div className={`order-2 ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="text-2xl font-bold mb-4 font-heading text-primary">{title}</h3>
        <p className="text-lg text-text-secondary leading-relaxed font-body">{content}</p>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <div className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-heading text-text">Sobre Nosotros</h2>
        
        {/* Bloque 1: Imagen izquierda, texto derecha */}
        <AboutBlock
          title="¿Quiénes somos?"
          content="En Multiservicios Muños ofrecemos soluciones integrales para vehículos, combinando productos, instalación, programación y reparación para brindar a nuestros clientes un servicio completo y confiable."
          imageUrl="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop"
          imageAlt="Mecánico trabajando en motor"
          imageLeft={true}
          fallbackGradient="linear-gradient(135deg, #0d1b2e 0%, #1E5A9C 100%)"
        />

        {/* Bloque 2: Imagen derecha, texto izquierda */}
        <AboutBlock
          title="Nuestro compromiso"
          content="Nuestro compromiso es ofrecer atención personalizada y trabajo de calidad, adaptándonos a las necesidades específicas de cada vehículo y cliente."
          imageUrl="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1920&auto=format&fit=crop"
          imageAlt="Herramientas automotrices"
          imageLeft={false}
          fallbackGradient="linear-gradient(135deg, #0d1b2e 0%, #3E8FD6 100%)"
        />

        {/* Bloque 3: Imagen izquierda, texto derecha */}
        <AboutBlock
          title="Nuestra forma de trabajo"
          content="Brindamos atención directa y diagnósticos precisos con tecnología moderna. Cada solución se personaliza según las necesidades de tu vehículo, garantizando resultados duraderos y confianza absoluta."
          imageUrl="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=1920&auto=format&fit=crop"
          imageAlt="Taller automotriz profesional"
          imageLeft={true}
          fallbackGradient="linear-gradient(135deg, #0d1b2e 0%, #7FC4F2 100%)"
        />
      </div>
    </div>
  );
};
