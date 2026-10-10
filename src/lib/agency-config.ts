// Replace with your business number in international digits only, e.g. country code + number.
export const WHATSAPP_NUMBER = "";
export const whatsappUrl = /^\d{8,15}$/.test(WHATSAPP_NUMBER)
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : null;