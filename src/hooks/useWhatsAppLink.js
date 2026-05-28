import appConfig from '@config/appConfig';

/**
 * useWhatsAppLink
 * Returns a wa.me deep-link for the given message.
 * Usage: const link = useWhatsAppLink("Hi! I'd like a demo.");
 */
export function useWhatsAppLink(message) {
  const digits = appConfig.contactInfo.whatsapp;
  const encoded = encodeURIComponent(message || '');
  return `https://wa.me/${digits}?text=${encoded}`;
}
