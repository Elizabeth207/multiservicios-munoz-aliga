import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Package,
  Wrench,
  Images,
  LayoutGrid,
  Users,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { Modal } from '../ui/Modal';

const mainTabs = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/productos', label: 'Productos', icon: Package },
  { to: '/servicios', label: 'Servicios', icon: Wrench },
] as const;

const moreLinks = [
  { to: '/galeria', label: 'Galería', icon: Images },
  { to: '/nosotros', label: 'Nosotros', icon: Users },
  { to: '/contacto', label: 'Contacto', icon: MessageCircle },
] as const;

export const MobileBottomNav = () => {
  const location = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  const openWhatsApp = () => {
    window.open(buildWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  const isMoreActive = moreLinks.some((l) => location.pathname === l.to);

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-border-light
          bg-surface-card/95 backdrop-blur-xl shadow-[0_-8px_32px_rgba(17,24,39,0.12)]
          pb-[env(safe-area-inset-bottom)]"
        aria-label="Navegación inferior"
      >
        <div className="grid grid-cols-5 items-end h-[4.25rem] px-1 max-w-lg mx-auto">
          {mainTabs.slice(0, 2).map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl motion-safe:transition-all
                  ${active ? 'text-accent scale-105' : 'text-muted hover:text-ink'}`}
              >
                <Icon className={`w-[22px] h-[22px] ${active ? 'stroke-[2.25]' : 'stroke-[1.75]'}`} aria-hidden />
                <span className="text-[10px] font-semibold font-body leading-none">{label}</span>
                {active && <span className="w-1 h-1 rounded-full bg-accent mt-0.5" aria-hidden />}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={openWhatsApp}
            className="flex flex-col items-center justify-center -mt-5 motion-safe:transition-transform active:scale-95"
            aria-label="WhatsApp"
          >
            <span className="w-14 h-14 rounded-2xl bg-whatsapp text-white flex items-center justify-center shadow-lg shadow-whatsapp/40 border-4 border-surface-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          </button>

          {(() => {
            const { to, label, icon: Icon } = mainTabs[2];
            const active = location.pathname === to;
            return (
              <Link
                to={to}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl motion-safe:transition-all
                  ${active ? 'text-accent scale-105' : 'text-muted hover:text-ink'}`}
              >
                <Icon className={`w-[22px] h-[22px] ${active ? 'stroke-[2.25]' : 'stroke-[1.75]'}`} aria-hidden />
                <span className="text-[10px] font-semibold font-body leading-none">{label}</span>
                {active && <span className="w-1 h-1 rounded-full bg-accent mt-0.5" aria-hidden />}
              </Link>
            );
          })()}

          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            className={`flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl motion-safe:transition-all
              ${isMoreActive ? 'text-accent scale-105' : 'text-muted hover:text-ink'}`}
            aria-label="Más secciones"
          >
            <LayoutGrid className={`w-[22px] h-[22px] ${isMoreActive ? 'stroke-[2.25]' : 'stroke-[1.75]'}`} aria-hidden />
            <span className="text-[10px] font-semibold font-body leading-none">Más</span>
            {isMoreActive && <span className="w-1 h-1 rounded-full bg-accent mt-0.5" aria-hidden />}
          </button>

        </div>
      </nav>

      <Modal open={moreOpen} onClose={() => setMoreOpen(false)} title="Explorar" size="md">
        <ul className="p-3 pb-5 space-y-2">
          {moreLinks.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMoreOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-xl border motion-safe:transition-all
                  ${location.pathname === to
                    ? 'border-accent/40 bg-accent/5 text-ink shadow-sm'
                    : 'border-border-light hover:border-accent/30 hover:bg-surface-light'
                  }`}
              >
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-steel/10 flex items-center justify-center ring-1 ring-border-light">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
                </span>
                <span className="font-semibold font-body text-ink text-base">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};
