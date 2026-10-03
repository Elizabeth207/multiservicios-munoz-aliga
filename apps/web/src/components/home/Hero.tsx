import { useState } from 'react';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { siteConfig } from '../../data/siteConfig';
import { Car } from 'lucide-react';

export const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(buildWhatsAppLink(), '_blank');
  };

  return (
    <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {!imageError ? (
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop"
          alt="Taller automotriz"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
          onError={() => setImageError(true)}
        />
      ) : null}
      
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background/95 via-primary/30 to-secondary/20"
        style={{
          background: imageError 
            ? 'linear-gradient(135deg, #0a0a0f 0%, #a855f7 50%, #22d3ee 100%)'
            : undefined
        }}
      />
      
      {/* Decorative icon */}
      <div className="absolute top-10 right-10 opacity-10">
        <Car className="w-48 h-48 text-primary" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight font-heading text-text" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>
          {siteConfig.businessName}
        </h1>
        <p className="text-xl mb-8 text-text-secondary font-body" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
          Soluciones integrales para tu vehículo.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleWhatsAppClick}
            className="bg-whatsapp text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold font-body shadow-lg shadow-whatsapp/30"
          >
            Cotizar por WhatsApp
          </button>
          <Link
            to="/servicios"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-background transition-colors font-semibold font-body shadow-lg shadow-primary/20"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
          >
            Ver nuestros servicios
          </Link>
        </div>
      </div>
    </div>
  );
};
