import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Buscar…',
  id = 'catalog-search',
}: SearchInputProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" aria-hidden />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border-light bg-surface-card
          text-ink placeholder:text-muted font-body text-sm
          focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none
          motion-safe:transition-colors"
        autoComplete="off"
      />
    </div>
  );
};
