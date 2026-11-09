import { Link } from 'react-router-dom';
import { galleryItems } from '../../data/gallery';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';

const preview = galleryItems.slice(0, 8);

export const HomeGalleryPreview = () => {
  return (
    <AnimatedSection className="section-light py-16 md:py-20 px-6 md:px-10 bg-[#eef0f3]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portafolio"
          title="Trabajos realizados"
          description="Instalaciones y productos que ofrecemos. Visita la galería completa para ver más."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[160px]">
          {preview.map((item, i) => (
            <Link
              key={item.id}
              to="/galeria"
              className={`group relative overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-accent
                ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <ResponsiveImage
                src={item.imageSrc}
                alt={item.caption}
                aspectClass="aspect-auto h-full min-h-[120px]"
                className="h-full min-h-[inherit] rounded-none"
              />
              <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/50 motion-safe:transition-colors flex items-end p-3">
                <p className="text-white text-xs md:text-sm font-medium font-body opacity-0 group-hover:opacity-100 motion-safe:transition-opacity line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/galeria"
            className="inline-flex text-accent font-semibold font-body hover:underline"
          >
            Ver galería completa →
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};
