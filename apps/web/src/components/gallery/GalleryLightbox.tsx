import { useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import type { GalleryItem } from '../../data/gallery';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  items?: GalleryItem[];
  onSelect?: (item: GalleryItem) => void;
}

export const GalleryLightbox = ({ item, onClose, items = [], onSelect }: GalleryLightboxProps) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;
  const hasNav = items.length > 1 && onSelect;

  const goNext = useCallback(() => {
    if (!item || !onSelect || currentIndex < 0) return;
    onSelect(items[(currentIndex + 1) % items.length]);
  }, [item, items, currentIndex, onSelect]);

  const goPrev = useCallback(() => {
    if (!item || !onSelect || currentIndex < 0) return;
    onSelect(items[(currentIndex - 1 + items.length) % items.length]);
  }, [item, items, currentIndex, onSelect]);

  useEffect(() => {
    if (!item) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [item, onClose, goNext, goPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[70] modal-backdrop-enter flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 shrink-0" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 text-text">
          <ZoomIn className="w-5 h-5 text-accent" aria-hidden />
          <span className="text-sm font-medium font-body text-text-secondary">
            {hasNav && currentIndex >= 0 ? `${currentIndex + 1} / ${items.length}` : 'Vista ampliada'}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-xl bg-steel/80 text-text hover:bg-accent motion-safe:transition-colors btn-press"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-12 pb-6 min-h-0" onClick={(e) => e.stopPropagation()}>
        {hasNav && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-surface-card/90 text-ink shadow-lg border border-border-light hover:border-accent btn-press z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-surface-card/90 text-ink shadow-lg border border-border-light hover:border-accent btn-press z-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="modal-panel-enter w-full max-w-5xl bg-surface-card rounded-2xl border border-border-light shadow-2xl overflow-hidden">
          <img
            src={item.imageSrc}
            alt={item.caption}
            className="w-full max-h-[min(70vh,640px)] object-contain bg-[#eef0f3]"
          />
          <div className="px-5 py-4 border-t border-border-light bg-surface-light">
            <p className="text-lg font-semibold font-heading text-ink">{item.caption}</p>
            <p className="text-sm text-accent capitalize font-body mt-1">{item.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
