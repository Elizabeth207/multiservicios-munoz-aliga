import { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import type { GalleryItem } from '../data/gallery';
import { PageSeo } from '../lib/seo';

export const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <PageSeo
        title="Galería de trabajos"
        description="Galería de trabajos realizados por Multiservicios Muños en Huancayo. Mira nuestras instalaciones de alarmas, GPS, electricidad automotriz y más."
        keywords="galería trabajos, taller automotriz, instalaciones, Huancayo"
      />
      
      {/* Banner de portada */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop"
            alt="Herramientas automotrices"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : null}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"
          style={{
            background: imageError 
              ? 'linear-gradient(135deg, #0d1b2e 0%, #1E5A9C 100%)'
              : undefined
          }}
        />
        <div className="relative z-10 flex items-center h-full px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>Galería de Trabajos</h1>
        </div>
      </div>

      <div className="p-8 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-text-secondary mb-8 font-body leading-relaxed">
            Conoce de cerca el trabajo que hacemos: instalaciones, reparaciones y soluciones reales para tu vehículo.
          </p>
          <GalleryGrid items={galleryItems} onImageClick={setSelectedItem} />
          <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
      </div>
    </>
  );
};
