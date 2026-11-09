import { MapPin } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';

export const MapEmbed = () => {
  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=-12.05229,-75.2161', '_blank', 'noopener,noreferrer');
  };

  const handleOpenInMaps = () => {
    window.open('https://maps.app.goo.gl/8AUnYrobB2BMhGUp9', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card-light overflow-hidden p-0">
      <div className="p-6 border-b border-border-light flex items-center gap-2">
        <MapPin className="w-5 h-5 text-accent" aria-hidden />
        <h2 className="text-xl font-bold font-heading text-ink">Ubicación</h2>
      </div>
      <iframe
        src="https://www.google.com/maps?q=-12.05229,-75.2161&hl=es&z=16&output=embed"
        width="100%"
        height="280"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de ubicación"
        className="w-full bg-[#eef0f3]"
      />
      <div className="p-4 flex flex-col sm:flex-row gap-2">
        <PrimaryButton className="flex-1" onClick={handleGetDirections}>
          Cómo llegar
        </PrimaryButton>
        <PrimaryButton className="flex-1" variant="ghost" onClick={handleOpenInMaps}>
          Abrir en Maps
        </PrimaryButton>
      </div>
    </div>
  );
};
