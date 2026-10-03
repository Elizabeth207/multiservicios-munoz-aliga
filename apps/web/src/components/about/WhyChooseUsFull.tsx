import { UserCheck, Wrench, Package, ShieldCheck, Car, Zap, Clock } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyChooseUsFull = () => {
  const { ref, isVisible } = useScrollReveal();

  const reasons = [
    {
      title: 'Atención personalizada',
      description: 'Cada cliente es único, por eso adaptamos nuestras soluciones a sus necesidades específicas.',
      icon: UserCheck,
    },
    {
      title: 'Experiencia en el sector automotriz',
      description: 'Años de experiencia nos permiten ofrecer diagnósticos precisos y soluciones efectivas.',
      icon: Wrench,
    },
    {
      title: 'Amplia variedad de productos',
      description: 'Contamos con una amplia gama de productos para diferentes marcas y modelos de vehículos.',
      icon: Package,
    },
    {
      title: 'Servicios especializados',
      description: 'Nuestros técnicos están capacitados en áreas específicas como electricidad, cerrajería e instalaciones.',
      icon: ShieldCheck,
    },
    {
      title: 'Soluciones para diferentes tipos de vehículos',
      description: 'Atendemos autos, camionetas y vehículos de diferentes categorías.',
      icon: Car,
    },
    {
      title: 'Trabajo personalizado',
      description: 'Analizamos cada caso particular para ofrecer la mejor solución técnica y económica.',
      icon: Zap,
    },
    {
      title: 'Atención rápida y directa',
      description: 'Valoramos tu tiempo, por eso ofrecemos respuestas rápidas y procesos eficientes.',
      icon: Clock,
    },
  ];

  return (
    <div 
      ref={ref}
      className={`py-16 px-8 bg-background ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-heading text-text">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-surface border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <Icon className="w-8 h-8 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-3 font-heading text-primary">{reason.title}</h3>
                <p className="text-text-secondary font-body">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
