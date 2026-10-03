import type { GalleryItem } from '../../data/gallery';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightbox = ({ item, onClose }: GalleryLightboxProps) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#f4f4f5] text-4xl font-bold hover:text-[#f59e0b] z-10 transition-colors"
          aria-label="Cerrar"
        >
          ×
        </button>
        <img
          src={item.imageSrc}
          alt={item.caption}
          className="max-w-full max-h-[85vh] object-contain bg-[#18181b] rounded"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#0f0f10] bg-opacity-95 text-[#f4f4f5] p-4 border-t border-[#3a3a3e]">
          <p className="text-lg">{item.caption}</p>
          <p className="text-sm capitalize text-[#f59e0b]">{item.category}</p>
        </div>
      </div>
    </div>
  );
};
