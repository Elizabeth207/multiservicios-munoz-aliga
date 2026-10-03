import type { GalleryItem } from '../../data/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
  onImageClick: (item: GalleryItem) => void;
}

export const GalleryGrid = ({ items, onImageClick }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative bg-gradient-to-br from-surface to-[#16416e] rounded-lg overflow-hidden cursor-pointer shadow-2xl shadow-black/35 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-2 border-t border-surface-light group"
          onClick={() => onImageClick(item)}
        >
          <div className="relative">
            <img
              src={item.imageSrc}
              alt={item.caption}
              className="w-full h-48 object-cover bg-background group-hover:opacity-90 transition-opacity"
              onError={(e) => {
                console.error('Image load error:', item.imageSrc);
                e.currentTarget.src = '/assets/images/placeholders/producto-generico.svg';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-semibold font-heading">Ver más</span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm text-text font-body">{item.caption}</p>
            <p className="text-xs text-text-secondary mt-1 capitalize font-body">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
