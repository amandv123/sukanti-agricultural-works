import { Phone, MapPin, Leaf } from 'lucide-react'
import { business, getCallHref, hasRealPhone } from '../data/business'

// Compact info strip shown just above the footer, matching the reference.
export default function ContactInfoStrip() {
  return (
    <section className="py-7 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          <a
            href={hasRealPhone() ? getCallHref() : undefined}
            aria-disabled={!hasRealPhone()}
            className="flex items-center gap-2.5 rounded-xl bg-brand-deep text-white px-3.5 py-3 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4 hover:bg-brand-deepDark transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 sm:w-10 sm:h-10">
              <Phone size={16} />
            </span>
            <span>
              <span className="block text-xs font-semibold sm:text-sm">Need Agricultural Service?</span>
              <span className="block text-[10px] leading-4 text-white/70 sm:text-xs">
                {hasRealPhone() ? `Call us now — ${business.phone}` : 'Call us now for quick support'}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2.5 rounded-xl bg-white border border-black/5 shadow-card px-3.5 py-3 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
            <span className="w-8 h-8 rounded-full bg-brand-fresh/15 text-brand-deep flex items-center justify-center shrink-0 sm:w-10 sm:h-10">
              <MapPin size={16} />
            </span>
            <span>
              <span className="block text-xs font-semibold text-brand-ink sm:text-sm">Our Location</span>
              <span className="block text-[10px] leading-4 text-brand-ink/55 sm:text-xs">
                {business.address.line3}, {business.address.line4}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl bg-white border border-black/5 shadow-card px-3.5 py-3 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
            <span className="w-8 h-8 rounded-full bg-brand-fresh/15 text-brand-deep flex items-center justify-center shrink-0 sm:w-10 sm:h-10">
              <Leaf size={16} />
            </span>
            <span className="block text-xs font-semibold text-brand-ink sm:text-sm">
              Serving Farmers With Dedication
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
