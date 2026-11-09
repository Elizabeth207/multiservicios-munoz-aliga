import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { SpecialtyCard } from '../ui/SpecialtyCard';
import { categories } from '../../data/categories';
import { specialtyIcons } from '../../lib/automotiveIcons';

export const ServicesSummary = () => {
  return (
    <AnimatedSection className="section-light py-16 md:py-20 px-6 md:px-10 border-t border-border-light bg-gradient-to-b from-surface-light to-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Especialidades"
          title="Todo lo que tu vehículo necesita"
          description="Cinco áreas de trabajo con productos y servicios especializados."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = specialtyIcons[cat.id] ?? specialtyIcons.tecnologia;
            const href = cat.id === 'electricidad' ? '/servicios' : '/productos';
            return (
              <SpecialtyCard
                key={cat.id}
                name={cat.name}
                description={cat.description}
                icon={Icon}
                href={href}
              />
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};
