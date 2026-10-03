import { siteConfig } from '../data/siteConfig';

export const buildWhatsAppLink = (message?: string): string => {
  const whatsappMessage = message || siteConfig.defaultWhatsappMessage;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
};
