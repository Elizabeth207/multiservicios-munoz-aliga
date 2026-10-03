import type { Product } from '../../types/product';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { Shield, Zap, Key, Lightbulb, Smartphone, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const categoryIcons: Record<string, LucideIcon> = {
  'seguridad': Shield,
  'electricidad': Zap,
  'llaves-cerrajeria': Key,
  'iluminacion': Lightbulb,
  'tecnologia': Smartphone,
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `Hola, quisiera consultar por: ${product.name}`;
    window.open(buildWhatsAppLink(message), '_blank');
  };

  const IconComponent = categoryIcons[product.categoryId] || Wrench;

  return (
    <div className="relative bg-gradient-to-br from-surface to-[#16416e] rounded-lg p-4 flex flex-col gap-2 shadow-2xl shadow-black/35 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-2 border-t border-surface-light">
      <div className="absolute top-3 right-3 bg-primary/20 p-2 rounded-full backdrop-blur-sm">
        <IconComponent className="w-5 h-5 text-primary" />
      </div>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded bg-background transition-transform duration-500 hover:scale-105"
      />
      <h3 className="font-semibold text-lg font-heading text-text">{product.name}</h3>
      <p className="text-sm text-text-secondary font-body">{product.description}</p>
      <button 
        onClick={handleWhatsAppClick}
        className="mt-auto bg-secondary text-text px-4 py-2 rounded hover:bg-primary transition-all duration-300 font-medium font-body shadow-lg shadow-black/30 hover:shadow-primary/50 hover:scale-105"
      >
        Consultar por WhatsApp
      </button>
    </div>
  );
};
