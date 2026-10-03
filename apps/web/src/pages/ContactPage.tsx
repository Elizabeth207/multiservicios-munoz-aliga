import { useState } from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { MapEmbed } from '../components/contact/MapEmbed';
import { PageSeo } from '../lib/seo';

export const ContactPage = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <PageSeo
        title="Contacto"
        description="Contáctanos por WhatsApp o visita nuestro taller en Huancayo, El Tambo, Junín. Solicita cotizaciones, agenda servicios o resuelve tus dudas sobre productos automotrices."
        keywords="contacto, WhatsApp, taller automotriz, Huancayo, El Tambo, Junín"
      />
      
      {/* Banner de portada */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1920&auto=format&fit=crop"
            alt="Atención automotriz"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : null}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"
          style={{
            background: imageError 
              ? 'linear-gradient(135deg, #0d1b2e 0%, #3E8FD6 100%)'
              : undefined
          }}
        />
        <div className="relative z-10 flex items-center h-full px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>Contacto</h1>
        </div>
      </div>

      <div className="p-8 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ContactForm />
              <ContactInfo />
            </div>
            <div className="space-y-8">
              <MapEmbed />
              <div className="relative bg-gradient-to-br from-surface to-[#16416e] rounded-lg p-6 shadow-2xl shadow-black/35 border-t border-surface-light">
                <h2 className="text-2xl font-bold mb-4 font-heading text-text">Nuestro local</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="/assets/local.jpg.png" 
                    alt="Fachada del local"
                    className="w-full h-48 object-cover rounded bg-background transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      console.error('Image load error: local.jpg.png');
                      e.currentTarget.src = '/assets/images/placeholders/producto-generico.svg';
                    }}
                  />
                  <img 
                    src="/assets/local.png" 
                    alt="Interior del local"
                    className="w-full h-48 object-cover rounded bg-background transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      console.error('Image load error: local.png');
                      e.currentTarget.src = '/assets/images/placeholders/producto-generico.svg';
                    }}
                  />
                </div>
                <p className="text-text-secondary text-sm mt-4 font-body">Visítanos en nuestro taller en Huancayo, El Tambo, Junín</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
