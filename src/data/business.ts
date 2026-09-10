// Centralized, verified business information.
// Edit this single file to update details across the whole site.
// Anything in [BRACKETS] is a placeholder — replace once confirmed.

export const business = {
  businessName: 'SUKANTI AGRICULTURAL WORKS',
  tagline: 'Reliable Agricultural Service for Better Farming',
  badge: 'Reliable Agricultural Service',
  areaServed: 'Udala, Odisha',

  phone: '+91 7978495920',
  whatsapp: '+91 9861639702',

  address: {
    line1: 'Village – Harisole – Bankosahi',
    line2: 'PO- Hatisahi, Via- B.C.PUR, PS- Udala',
    line3: 'Odisha – 757087',
  },

  // Google Review link
  googleReviewUrl: 'https://g.page/r/CYBZH9Af_zYfEBI/review',

  // Google Maps navigation / Get Directions
  googleMapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=21.644241240505355,86.60554467234763&travelmode=driving&dir_action=navigate',

  // Google Maps Embed
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.78150301666332!2d86.60554467234763!3d21.644241240505355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c49404a96a6cf%3A0x1f36ff1fd01f5980!2sSUKANTI%20AGRICULTURAL%20WORKS!5e0!3m2!1sen!2sin!4v1788680251448!5m2!1sen!2sin',

  ownerName: 'Sukanti Tudu',
  ownerPhoto: '/src/assets/owner-hero-16x9.webp',

  websiteUrl: 'https://sukantiagri.in',
} as const

export const getCallHref = () =>
  `tel:${business.phone.replace(/[^\d+]/g, '')}`

export const getWhatsAppHref = () =>
  `https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`

// True once real contact numbers are filled in above — used to decide
// whether Call/WhatsApp links should render as live actions.
export const hasRealPhone = () => !business.phone.startsWith('[')
export const hasRealWhatsApp = () => !business.whatsapp.startsWith('[')
