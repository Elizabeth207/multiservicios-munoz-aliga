import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { PrimaryButton } from './PrimaryButton';

interface WhatsAppCTAProps {
  message?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const WhatsAppCTA = ({
  message,
  label = 'Cotizar por WhatsApp',
  size = 'md',
  className,
}: WhatsAppCTAProps) => {
  const handleClick = () => {
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <PrimaryButton variant="whatsapp" size={size} onClick={handleClick} className={className}>
      <MessageCircle className="w-5 h-5" aria-hidden />
      {label}
    </PrimaryButton>
  );
};
