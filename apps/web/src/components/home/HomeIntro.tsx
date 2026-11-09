import { Zap, KeyRound, MessageCircle } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { siteConfig } from '../../data/siteConfig';

const highlights = [
  {
    label: 'Diagnóstico y reparación',
    text: 'Arrancadores, alternadores e instalaciones eléctricas.',
    icon: Zap,
  },
  {
    label: 'Llaves y seguridad',
    text: 'Chips, controles, alarmas, GPS y cierre centralizado.',
    icon: KeyRound,
  },
  {
    label: 'Atención por WhatsApp',
    text: 'Cotizaciones y consultas sin esperas innecesarias.',
    icon: MessageCircle,
  },
] as const;

export const HomeIntro = () => {
  return (
    <AnimatedSection className="section-light section-accent-line pt-20 py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          align="left"
          eyebrow="Quiénes somos"
          title={siteConfig.businessName}
          description="Soluciones integrales para tu vehículo: productos, instalación, programación de llaves y reparación eléctrica con atención directa en Huancayo, El Tambo."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ label, text, icon: Icon }) => (
            <article key={label} className="card-premium">
              <div className="card-premium-inner p-6 flex gap-4 items-start">
                <span className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center ring-1 ring-accent/20">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold font-heading text-ink mb-2">{label}</h3>
                  <p className="text-sm text-muted font-body leading-relaxed">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
