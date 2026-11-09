interface FilterOption {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  allLabel?: string;
}

export const CategoryFilter = ({
  options,
  activeId,
  onChange,
  allLabel = 'Todos',
}: CategoryFilterProps) => {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filtrar por categoría"
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeId === 'all'}
        onClick={() => onChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium font-body motion-safe:transition-colors
          ${activeId === 'all'
            ? 'bg-accent text-white shadow-sm'
            : 'bg-surface-card border border-border-light text-muted hover:border-accent hover:text-ink'
          }`}
      >
        {allLabel}
      </button>
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="tab"
          aria-selected={activeId === opt.id}
          onClick={() => onChange(opt.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium font-body motion-safe:transition-colors
            ${activeId === opt.id
              ? 'bg-accent text-white shadow-sm'
              : 'bg-surface-card border border-border-light text-muted hover:border-accent hover:text-ink'
            }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};
