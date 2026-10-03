import { UserCheck, Wrench, ShieldCheck, Zap, Car, Clock } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  const reasons = [
    { text: 'Atención personalizada', icon: UserCheck },
    { text: 'Experiencia en el sector automotriz', icon: Wrench },
    { text: 'Amplia variedad de productos', icon: Car },
    { text: 'Servicios especializados', icon: ShieldCheck },
    { text: 'Soluciones para diferentes tipos de vehículos', icon: Car },
    { text: 'Trabajo personalizado', icon: Zap },
    { text: 'Atención rápida y directa', icon: Clock },
  ];

  return (
    <div 
      ref={ref}
      className={`py-16 px-8 bg-background ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-text">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex items-center gap-3 bg-surface border border-border rounded-lg p-4 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-text-secondary font-body">{reason.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
