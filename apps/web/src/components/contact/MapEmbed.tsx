export const MapEmbed = () => {
  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=-12.05229,-75.2161', '_blank');
  };

  const handleOpenInMaps = () => {
    window.open('https://maps.app.goo.gl/8AUnYrobB2BMhGUp9', '_blank');
  };

  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-sm">
      <div className="p-4 border-b border-border">
        <h2 className="text-2xl font-bold font-heading text-text">Ubicación</h2>
      </div>
      <div className="relative">
        <iframe
          src="https://www.google.com/maps?q=-12.05229,-75.2161&hl=es&z=16&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
          className="bg-background"
        />
      </div>
      <div className="p-4 space-y-2">
        <button
          onClick={handleGetDirections}
          className="w-full bg-primary text-background py-2 rounded hover:bg-primary/90 transition-colors font-semibold font-body shadow-lg shadow-primary/20"
        >
          Cómo llegar
        </button>
        <button
          onClick={handleOpenInMaps}
          className="w-full border border-border text-text-secondary py-2 rounded hover:bg-surface hover:text-text transition-colors font-medium font-body"
        >
          Abrir en Maps
        </button>
      </div>
    </div>
  );
};
