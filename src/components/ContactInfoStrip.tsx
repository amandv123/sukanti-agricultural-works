import { Phone, MapPin, Leaf } from 'lucide-react'
import { business, getCallHref, hasRealPhone } from '../data/business'

// Compact info strip shown just above the footer, matching the reference.
export default function ContactInfoStrip() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <a
            href={hasRealPhone() ? getCallHref() : undefined}
            aria-disabled={!hasRealPhone()}
            className="flex items-center gap-3 rounded-2xl bg-brand-deep text-white px-5 py-4 hover:bg-brand-deepDark transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <Phone size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold">Need Agricultural Service?</span>
              <span className="block text-xs text-white/70">
                {hasRealPhone() ? `Call us now — ${business.phone}` : 'Call us now for quick support'}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3 rounded-2xl bg-white border border-black/5 shadow-card px-5 py-4">
            <span className="w-10 h-10 rounded-full bg-brand-fresh/15 text-brand-deep flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-brand-ink">Our Location</span>
              <span className="block text-xs text-brand-ink/55">
                {business.address.line3}, {business.address.line4}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white border border-black/5 shadow-card px-5 py-4">
            <span className="w-10 h-10 rounded-full bg-brand-fresh/15 text-brand-deep flex items-center justify-center shrink-0">
              <Leaf size={18} />
            </span>
            <span className="block text-sm font-semibold text-brand-ink">
              Serving Farmers With Dedication
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
