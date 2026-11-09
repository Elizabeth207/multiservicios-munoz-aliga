import { UserCheck, Wrench, Package, ShieldCheck, CarFront, Clock } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';

const reasons = [
  { text: 'Atención personalizada', icon: UserCheck },
  { text: 'Trabajo técnico especializado', icon: Wrench },
  { text: 'Amplia variedad de productos', icon: Package },
  { text: 'Seguridad e instalaciones profesionales', icon: ShieldCheck },
  { text: 'Soluciones para distintos vehículos', icon: CarFront },
  { text: 'Respuesta ágil por WhatsApp', icon: Clock },
];

export const WhyChooseUs = () => {
  return (
    <AnimatedSection className="section-light py-16 md:py-20 px-6 md:px-10 border-t border-border-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Confianza"
          title="¿Por qué elegirnos?"
          description="Beneficios verificables de nuestro servicio en Huancayo."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.text} className="card-premium">
                <div className="card-premium-inner flex items-center gap-4 p-5 w-full">
                  <span className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0 ring-1 ring-accent/15">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-ink font-medium font-body">{reason.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};
