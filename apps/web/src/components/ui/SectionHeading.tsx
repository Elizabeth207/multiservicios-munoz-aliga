interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  light = true,
}: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-ink' : 'text-text';
  const descColor = light ? 'text-muted' : 'text-text-secondary';

  return (
    <div className={`max-w-3xl mb-10 md:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-3 font-body text-accent">
          <span className="w-8 h-px bg-accent/60" aria-hidden />
          {eyebrow}
          {align === 'center' && <span className="w-8 h-px bg-accent/60" aria-hidden />}
        </p>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold font-heading tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base md:text-lg leading-relaxed font-body ${descColor}`}>{description}</p>
      )}
    </div>
  );
};
