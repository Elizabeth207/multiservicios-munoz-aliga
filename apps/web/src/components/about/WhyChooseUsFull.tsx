import { UserCheck, Wrench, Package, ShieldCheck, CarFront, Clock } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';

const reasons = [
  {
    title: 'Atención personalizada',
    description: 'Adaptamos soluciones a las necesidades de tu vehículo y tu consulta.',
    icon: UserCheck,
  },
  {
    title: 'Trabajo técnico especializado',
    description: 'Electricidad, cerrajería e instalaciones con enfoque profesional.',
    icon: Wrench,
  },
  {
    title: 'Amplia variedad de productos',
    description: 'Alarmas, GPS, focos, pantallas y accesorios para distintos modelos.',
    icon: Package,
  },
  {
    title: 'Servicios especializados',
    description: 'Programación de llaves, diagnóstico eléctrico e instalaciones.',
    icon: ShieldCheck,
  },
  {
    title: 'Distintos tipos de vehículos',
    description: 'Atendemos autos y camionetas según cada caso.',
    icon: CarFront,
  },
  {
    title: 'Atención ágil',
    description: 'Consultas y cotizaciones por WhatsApp de forma directa.',
    icon: Clock,
  },
];

export const WhyChooseUsFull = () => {
  return (
    <AnimatedSection className="section-light py-16 px-6 md:px-10 border-t border-border-light bg-[#eef0f3]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Valores" title="Lo que nos importa en cada servicio" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div className="card-light p-6 flex gap-4" key={reason.title}>
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <span className="block text-lg font-bold font-heading text-ink mb-1">{reason.title}</span>
                  <span className="text-sm text-muted font-body leading-relaxed">{reason.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};
