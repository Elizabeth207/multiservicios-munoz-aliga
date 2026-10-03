import { useState } from 'react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ProductGrid } from '../components/products/ProductGrid';
import { PageSeo } from '../lib/seo';
import { Package } from 'lucide-react';

export const ProductsPage = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <PageSeo
        title="Productos para vehículos"
        description="Venta de productos automotrices en Huancayo: alarmas, GPS, focos LED, pantallas, accesorios y más para la seguridad y confort de tu vehículo."
        keywords="productos automotrices, alarmas, GPS, focos LED, pantallas, accesorios vehículos, Huancayo"
      />
      {/* Banner */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1920&auto=format&fit=crop"
            alt="Productos automotrices"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : null}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"
          style={{
            background: imageError 
              ? 'linear-gradient(135deg, #0a0a0f 0%, #a855f7 100%)'
              : undefined
          }}
        />
        <div className="absolute top-10 right-10 opacity-10">
          <Package className="w-48 h-48 text-primary" />
        </div>
        <div className="relative z-10 flex items-center h-full px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>Nuestros Productos</h1>
        </div>
      </div>
      
      <div className="p-8 bg-background min-h-screen">
        {categories.map((category, index) => {
          const categoryProducts = products.filter(
            (product) => product.categoryId === category.id
          );
          
          if (categoryProducts.length === 0) return null;
          
          return (
            <div key={category.id} className={`mb-12 ${index % 2 === 1 ? 'bg-gradient-to-b from-surface/20 to-background -mx-8 px-8 py-8' : ''}`}>
              <h2 className="text-2xl font-bold mb-2 font-heading text-primary">{category.name}</h2>
              <p className="text-text-secondary mb-4 font-body">{category.description}</p>
              <ProductGrid products={categoryProducts} />
            </div>
          );
        })}
      </div>
    </>
  );
};
