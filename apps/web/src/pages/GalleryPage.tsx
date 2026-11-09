import { useMemo, useState } from 'react';
import { galleryItems, type GalleryCategory, type GalleryItem } from '../data/gallery';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { PageSeo } from '../lib/seo';
import { PageHero } from '../components/ui/PageHero';
import { CategoryFilter } from '../components/ui/CategoryFilter';

const categoryLabels: Record<GalleryCategory, string> = {
  taller: 'Taller',
  instalaciones: 'Instalaciones',
  productos: 'Productos',
  trabajos: 'Trabajos',
  llaves: 'Llaves',
  electricidad: 'Electricidad',
};

const filterOptions = (Object.keys(categoryLabels) as GalleryCategory[]).map((id) => ({
  id,
  label: categoryLabels[id],
}));

export const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [categoryId, setCategoryId] = useState('all');

  const filtered = useMemo(
    () =>
      categoryId === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === categoryId),
    [categoryId]
  );

  return (
    <>
      <PageSeo
        title="Galería de trabajos"
        description="Galería de instalaciones y trabajos de Multiservicios Muñoz y Aliga en Huancayo."
        keywords="galería, taller automotriz, instalaciones, Huancayo"
      />
      <PageHero
        variant="compact"
        title="Galería de trabajos"
        subtitle="Instalaciones, productos y trabajos realizados en el taller."
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Herramientas automotrices"
      />

      <div className="section-light min-h-screen py-10 md:py-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted font-body text-lg mb-6 max-w-2xl">
            Conoce de cerca el trabajo que realizamos. Las fotografías corresponden a productos e instalaciones del catálogo del negocio.
          </p>
          <div className="mb-8">
            <CategoryFilter options={filterOptions} activeId={categoryId} onChange={setCategoryId} />
          </div>
          {filtered.length === 0 ? (
            <p className="text-center text-muted py-12 font-body">No hay imágenes en esta categoría.</p>
          ) : (
            <GalleryGrid items={filtered} onImageClick={setSelectedItem} mosaic />
          )}
          <GalleryLightbox
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            items={filtered}
            onSelect={setSelectedItem}
          />
        </div>
      </div>
    </>
  );
};
