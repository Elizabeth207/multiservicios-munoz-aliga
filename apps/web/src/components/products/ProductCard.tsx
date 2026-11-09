import type { Product } from '../../types/product';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { getProductIcon } from '../../lib/automotiveIcons';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { PrimaryButton } from '../ui/PrimaryButton';
import { IconBadge } from '../ui/IconBadge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    window.open(buildWhatsAppLink(`Hola, quisiera consultar por: ${product.name}`), '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="card-premium group flex flex-col overflow-hidden h-full">
      <div className="card-premium-inner flex flex-col h-full overflow-hidden">
      <div className="relative">
        <ResponsiveImage src={product.image} alt={product.name} aspectClass="aspect-[4/3]" />
        <span className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/95 shadow-sm flex items-center justify-center">
          <IconBadge icon={getProductIcon(product.name, product.categoryId)} />
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg font-heading text-ink leading-snug">{product.name}</h3>
        <p className="text-sm text-muted font-body mt-2 flex-1 leading-relaxed">{product.description}</p>
        <PrimaryButton
          variant="whatsapp"
          size="sm"
          className="w-full mt-4"
          onClick={handleWhatsAppClick}
        >
          Consultar por WhatsApp
        </PrimaryButton>
      </div>
      </div>
    </article>
  );
};
