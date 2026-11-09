import { products } from '../../data/products';
import { ProductGrid } from '../products/ProductGrid';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { PrimaryButton } from '../ui/PrimaryButton';

export const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <AnimatedSection className="section-light py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          align="left"
          eyebrow="Catálogo"
          title="Productos destacados"
          description="Alarmas, GPS, focos, pantallas y más. Consulta disponibilidad por WhatsApp."
        />
        <div className="flex justify-start -mt-6 mb-8">
          <PrimaryButton to="/productos" variant="ghost">
            Ver todos los productos
          </PrimaryButton>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>
    </AnimatedSection>
  );
};
