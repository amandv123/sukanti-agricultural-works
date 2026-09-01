// Centralized, verified business information.
// Edit this single file to update details across the whole site.
// Anything in [BRACKETS] is a placeholder — replace once confirmed.

export const business = {
  businessName: 'SUKANTI AGRICULTURAL WORKS',
  tagline: 'Reliable Agricultural Service for Better Farming',
  badge: 'Reliable Agricultural Service',
  areaServed: 'Udala, Odisha',

  phone: '[PHONE NUMBER]',
  whatsapp: '[WHATSAPP NUMBER]',
  workingHours: '[WORKING HOURS]',

  address: {
    line1: 'Village – Harisole – Banko Sahi',
    line2: 'PO, Via B.C. PUR',
    line3: 'Hatisahi, Udala',
    line4: 'Odisha – 757087',
  },

  // Same link supplied for both the review CTA and the maps CTA.
  googleReviewUrl: 'https://g.page/r/CYBZH9Af_zYfEBI/review',
  googleMapsUrl: 'https://g.page/r/CYBZH9Af_zYfEBI/review',

  // Paste the exact Google Maps "Embed a map" iframe src here once available.
  googleMapsEmbedUrl: '',

  ownerName: 'Sukanti Tudu',
  ownerPhoto: '/src/assets/owner-hero-16x9.png',

  websiteUrl: 'https://sukantiagri.in',
} as const

export const getCallHref = () => `tel:${business.phone.replace(/[^\d+]/g, '')}`
export const getWhatsAppHref = () =>
  `https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`

// True once real contact numbers are filled in above — used to decide
// whether Call/WhatsApp links should render as live actions.
export const hasRealPhone = () => !business.phone.startsWith('[')
export const hasRealWhatsApp = () => !business.whatsapp.startsWith('[')
