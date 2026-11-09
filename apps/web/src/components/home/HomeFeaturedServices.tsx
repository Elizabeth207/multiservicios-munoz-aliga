import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { getServiceIcon } from '../../lib/automotiveIcons';
import { IconBadge } from '../ui/IconBadge';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { PrimaryButton } from '../ui/PrimaryButton';

const featured = services.slice(0, 4);

export const HomeFeaturedServices = () => {
  return (
    <AnimatedSection className="section-dark py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          light={false}
          align="left"
          eyebrow="Servicios"
          title="Instalaciones y reparaciones destacadas"
          description="Trabajo técnico en electricidad, llaves y accesorios para tu vehículo."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((service, index) => {
            const isWide = index === 0;
            return (
              <article
                key={service.id}
                className={`group rounded-xl overflow-hidden border border-border bg-steel/40 flex flex-col
                  ${isWide ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-0' : ''}`}
              >
                {service.image && (
                  <ResponsiveImage
                    src={service.image}
                    alt={service.name}
                    aspectClass={isWide ? 'aspect-[16/10] md:aspect-auto md:min-h-full' : 'aspect-[16/10]'}
                    className="rounded-none"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <IconBadge icon={getServiceIcon(service.name, service.groupId)} size="md" className="mb-3 w-8 h-8" />
                  <h3 className="text-xl font-bold font-heading text-text mb-2">{service.name}</h3>
                  <div className="mt-auto pt-4">
                    <PrimaryButton
                      size="sm"
                      variant="whatsapp"
                      onClick={() =>
                        window.open(
                          buildWhatsAppLink(`Hola, quisiera cotizar: ${service.name}`),
                          '_blank',
                          'noopener,noreferrer'
                        )
                      }
                    >
                      Cotizar
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center md:text-left">
          <Link to="/servicios" className="text-accent font-semibold font-body hover:underline">
            Ver catálogo completo de servicios →
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};
