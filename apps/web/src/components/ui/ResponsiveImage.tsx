const PLACEHOLDER = '/assets/images/placeholders/producto-generico.svg';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const ResponsiveImage = ({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[4/3]',
  loading = 'lazy',
  priority = false,
}: ResponsiveImageProps) => {
  return (
    <div className={`overflow-hidden rounded-lg bg-[#eef0f3] ${aspectClass}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={`w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.03] ${className}`}
        onError={(e) => {
          e.currentTarget.src = PLACEHOLDER;
          e.currentTarget.classList.add('object-contain', 'p-6');
        }}
      />
    </div>
  );
};
