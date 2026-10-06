import { useState } from 'react';
import { AboutSection } from '../components/about/AboutSection';
import { WhyChooseUsFull } from '../components/about/WhyChooseUsFull';
import { PageSeo } from '../lib/seo';

export const AboutPage = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <PageSeo
        title="Sobre nosotros"
        description="Conoce a Multiservicios Muños, tu taller automotriz de confianza en Huancayo, El Tambo. Ofrecemos atención personalizada y trabajo de calidad para tu vehículo."
        keywords="taller automotriz, Huancayo, El Tambo, Multiservicios Muños"
      />
      {/* Banner */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1920&auto=format&fit=crop"
            alt="Mecánico trabajando"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : null}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"
          style={{
            background: imageError 
              ? 'linear-gradient(135deg, #0a0a0f 0%, #a855f7 100%)'
              : undefined
          }}
        />
        <div className="relative z-10 flex items-center h-full px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>Sobre Nosotros</h1>
        </div>
      </div>
      
      <div className="bg-background min-h-screen">
        <AboutSection />
        <WhyChooseUsFull />
      </div>
    </>
  );
};
