import { products } from '../../data/products';
import { ProductGrid } from '../products/ProductGrid';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const FeaturedProducts = () => {
  const { ref, isVisible } = useScrollReveal();
  const featuredProducts = products.slice(0, 6);

  return (
    <div 
      ref={ref}
      className={`py-16 px-8 bg-background ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-text">Productos Destacados</h2>
        <ProductGrid products={featuredProducts} />
      </div>
    </div>
  );
};
