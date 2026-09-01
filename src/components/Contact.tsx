import { Phone, MessageCircle, Navigation } from 'lucide-react'
import {
  business,
  getCallHref,
  getWhatsAppHref,
  hasRealPhone,
  hasRealWhatsApp,
} from '../data/business'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
          Need Agricultural Service?
        </h2>
        <p className="mt-3 text-white/70 max-w-md mx-auto">
          Get in touch with {business.businessName}.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href={hasRealPhone() ? getCallHref() : undefined}
            aria-disabled={!hasRealPhone()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold text-brand-ink px-6 py-3.5 font-semibold hover:brightness-95 transition"
          >
            <Phone size={18} /> Call Now
          </a>
          <a
            href={hasRealWhatsApp() ? getWhatsAppHref() : undefined}
            target={hasRealWhatsApp() ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-disabled={!hasRealWhatsApp()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-fresh text-white px-6 py-3.5 font-semibold hover:brightness-95 transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            <Navigation size={18} /> Get Directions
          </a>
        </div>

        {(!hasRealPhone() || !hasRealWhatsApp()) && (
          <p className="mt-5 text-xs text-white/45">
            Phone and WhatsApp numbers are placeholders until confirmed —
            update them in src/data/business.ts.
          </p>
        )}
      </div>
    </section>
  )
}
