import type { GalleryItem } from '../../data/gallery';
import { ResponsiveImage } from '../ui/ResponsiveImage';

interface GalleryGridProps {
  items: GalleryItem[];
  onImageClick: (item: GalleryItem) => void;
  mosaic?: boolean;
}

export const GalleryGrid = ({ items, onImageClick, mosaic = false }: GalleryGridProps) => {
  if (!mosaic) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <GalleryTile key={item.id} item={item} onImageClick={onImageClick} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onImageClick(item)}
          className={`group text-left rounded-xl overflow-hidden focus-visible:ring-2 focus-visible:ring-accent
            ${index % 7 === 0 ? 'col-span-2 row-span-2' : ''}`}
        >
          <div className="relative h-full min-h-[inherit]">
            <ResponsiveImage
              src={item.imageSrc}
              alt={item.caption}
              aspectClass="h-full min-h-[140px] aspect-auto"
              className="h-full rounded-none"
            />
            <div className="absolute inset-0 bg-carbon/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity flex items-end p-3">
              <div>
                <p className="text-white text-sm font-medium font-body line-clamp-2">{item.caption}</p>
                <p className="text-white/80 text-xs capitalize mt-1">{item.category}</p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

const GalleryTile = ({
  item,
  onImageClick,
}: {
  item: GalleryItem;
  onImageClick: (item: GalleryItem) => void;
}) => (
  <button
    type="button"
    onClick={() => onImageClick(item)}
    className="card-light overflow-hidden text-left group focus-visible:ring-2 focus-visible:ring-accent p-0"
  >
    <ResponsiveImage src={item.imageSrc} alt={item.caption} aspectClass="aspect-[4/3]" />
    <div className="p-3">
      <p className="text-sm font-medium font-body text-ink">{item.caption}</p>
      <p className="text-xs text-muted capitalize mt-1">{item.category}</p>
    </div>
  </button>
);
