import { useMemo, useState } from 'react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ProductGrid } from '../components/products/ProductGrid';
import { PageSeo } from '../lib/seo';
import { PageHero } from '../components/ui/PageHero';
import { SearchInput } from '../components/ui/SearchInput';
import { CategoryFilter } from '../components/ui/CategoryFilter';
import { Package } from 'lucide-react';

const normalize = (s: string) =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

export const ProductsPage = () => {
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState('all');

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return products.filter((p) => {
      const matchCat = categoryId === 'all' || p.categoryId === categoryId;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        normalize(p.name).includes(q) ||
        normalize(p.description).includes(q)
      );
    });
  }, [query, categoryId]);

  const filterOptions = categories.map((c) => ({ id: c.id, label: c.name }));

  return (
    <>
      <PageSeo
        title="Productos para vehículos"
        description="Venta de productos automotrices en Huancayo: alarmas, GPS, focos LED, pantallas, accesorios y más."
        keywords="productos automotrices, alarmas, GPS, focos LED, pantallas, Huancayo"
      />
      <PageHero
        variant="compact"
        title="Nuestros productos"
        subtitle="Catálogo de seguridad, iluminación, llaves y tecnología para vehículos."
        imageSrc="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Productos automotrices"
      />

      <div className="section-light min-h-screen py-10 md:py-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto sticky top-[60px] z-40 bg-surface-light/95 backdrop-blur-sm py-4 -mx-2 px-2 mb-8 border-b border-border-light space-y-4">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Buscar productos por nombre o descripción…"
          />
          <CategoryFilter
            options={filterOptions}
            activeId={categoryId}
            onChange={setCategoryId}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 card-light max-w-lg mx-auto p-10">
            <Package className="w-12 h-12 text-muted mx-auto mb-4" aria-hidden />
            <p className="text-lg font-heading font-bold text-ink">Sin resultados</p>
            <p className="text-muted font-body mt-2">
              Prueba otra búsqueda o selecciona otra categoría.
            </p>
          </div>
        ) : categoryId === 'all' && !query ? (
          categories.map((category) => {
            const categoryProducts = filtered.filter((p) => p.categoryId === category.id);
            if (categoryProducts.length === 0) return null;
            return (
              <section key={category.id} className="mb-14">
                <h2 className="text-2xl font-bold font-heading text-ink mb-2">{category.name}</h2>
                <p className="text-muted font-body mb-6">{category.description}</p>
                <ProductGrid products={categoryProducts} />
              </section>
            );
          })
        ) : (
          <ProductGrid products={filtered} />
        )}
      </div>
    </>
  );
};
