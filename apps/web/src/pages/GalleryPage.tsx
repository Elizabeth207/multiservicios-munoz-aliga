import { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import type { GalleryItem } from '../data/gallery';
import { PageSeo } from '../lib/seo';

export const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <PageSeo
        title="Galería de trabajos"
        description="Galería de trabajos realizados por Multiservicios Muños y Aliga en Huancayo. Mira nuestras instalaciones de alarmas, GPS, electricidad automotriz y más."
        keywords="galería trabajos, taller automotriz, instalaciones, Huancayo"
      />
      <div className="p-8 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 font-heading text-text">Galería de Trabajos</h1>
          <div className="bg-primary/20 border border-primary text-text-secondary px-4 py-3 rounded mb-8">
            <p className="font-semibold font-heading text-primary">Galería en construcción</p>
            <p className="text-sm font-body">Las fotografías reales del taller y trabajos se agregarán próximamente.</p>
          </div>
          <GalleryGrid items={galleryItems} onImageClick={setSelectedItem} />
          <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
      </div>
    </>
  );
};
