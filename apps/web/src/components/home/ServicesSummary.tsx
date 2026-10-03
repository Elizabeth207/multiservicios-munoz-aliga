import { Link } from 'react-router-dom';
import { Zap, Key, Shield } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ServicesSummary = () => {
  const { ref, isVisible } = useScrollReveal();

  const serviceGroups = [
    {
      id: 'electricidad',
      name: 'Electricidad automotriz',
      description: 'Diagnóstico, reparación de arrancadores y alternadores.',
      icon: Zap,
    },
    {
      id: 'llaves-seguridad',
      name: 'Llaves y sistemas de seguridad',
      description: 'Copia de llaves, programación de chips y controles.',
      icon: Key,
    },
    {
      id: 'instalaciones',
      name: 'Instalaciones',
      description: 'Alarmas, GPS, pantallas y accesorios.',
      icon: Shield,
    },
  ];

  return (
    <div 
      ref={ref}
      className={`py-16 px-8 bg-background ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-text">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.id} className="bg-surface border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <Icon className="w-8 h-8 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2 font-heading text-text">{group.name}</h3>
                <p className="text-text-secondary mb-4 font-body">{group.description}</p>
                <Link
                  to="/servicios"
                  className="text-primary hover:text-secondary font-medium transition-colors font-body"
                >
                  Ver más →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
