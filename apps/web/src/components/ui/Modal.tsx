import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'md' | 'lg' | 'full';
  ariaLabel?: string;
}

export const Modal = ({ open, onClose, title, children, size = 'md', ariaLabel }: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const sizeClass =
    size === 'full'
      ? 'max-w-none w-full h-full max-h-none rounded-none'
      : size === 'lg'
        ? 'max-w-4xl'
        : 'max-w-lg';

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 modal-backdrop-enter"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel || title}
        className={`relative w-full ${sizeClass} bg-surface-card sm:rounded-2xl shadow-2xl border border-border-light
          modal-panel-enter max-h-[92vh] sm:max-h-[90vh] flex flex-col overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border-light shrink-0">
          {title ? <h2 className="text-lg font-bold font-heading text-ink">{title}</h2> : <span />}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-muted hover:bg-surface-light hover:text-ink motion-safe:transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};
