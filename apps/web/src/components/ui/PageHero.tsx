import { useState } from 'react';
import type { ReactNode } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { WhatsAppCTA } from './WhatsAppCTA';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'full' | 'compact' | 'split';
  children?: ReactNode;
  showDefaultCtas?: boolean;
}

const DEFAULT_HERO_IMAGE =
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop';

export const PageHero = ({
  title,
  subtitle,
  imageSrc = DEFAULT_HERO_IMAGE,
  imageAlt = 'Técnico automotriz en taller',
  variant = 'compact',
  children,
  showDefaultCtas = false,
}: PageHeroProps) => {
  const [imageError, setImageError] = useState(false);
  const showImage = !imageError && imageSrc;

  if (variant === 'split' || variant === 'full') {
    return (
      <section className="section-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[min(92vh,720px)]">
          <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-16 lg:py-20 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold font-heading text-text leading-tight tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg md:text-xl text-text-secondary font-body max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
            {showDefaultCtas && (
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppCTA size="lg" />
                <PrimaryButton to="/servicios" variant="ghost" size="lg">
                  Ver servicios
                </PrimaryButton>
              </div>
            )}
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            {showImage && (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => setImageError(true)}
                fetchPriority="high"
              />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-carbon/30 lg:to-carbon"
              aria-hidden
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section-dark relative overflow-hidden ${variant === 'compact' ? 'min-h-[220px] md:min-h-[280px]' : ''}`}>
      {showImage && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          onError={() => setImageError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/85 to-steel/70" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-text-secondary font-body max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
};
