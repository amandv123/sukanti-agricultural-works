import { Phone, MapPin, Leaf } from 'lucide-react'
import { business, getCallHref, hasRealPhone } from '../data/business'

// Compact info strip shown just above the footer, matching the reference.
export default function ContactInfoStrip() {
  return (
    <section className="py-5 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <a
            href={hasRealPhone() ? getCallHref() : undefined}
            aria-disabled={!hasRealPhone()}
            className="flex items-center gap-2 rounded-lg bg-brand-deep px-2.5 py-2 text-white transition-colors hover:bg-brand-deepDark sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-10 sm:w-10">
              <Phone size={14} />
            </span>
            <span>
              <span className="block text-[10px] font-semibold leading-3.5 sm:text-sm">Need Agricultural Service?</span>
              <span className="block text-[9px] leading-3.5 text-white/70 sm:text-xs">
                {hasRealPhone() ? `Call us now — ${business.phone}` : 'Call us now for quick support'}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2 rounded-lg border border-black/5 bg-white px-2.5 py-2 shadow-card sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-fresh/15 text-brand-deep sm:h-10 sm:w-10">
              <MapPin size={14} />
            </span>
            <span>
              <span className="block text-[10px] font-semibold leading-3.5 text-brand-ink sm:text-sm">Our Location</span>
              <span className="block text-[9px] leading-3.5 text-brand-ink/55 sm:text-xs">
                {business.address.line3}, {business.address.line4}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-black/5 bg-white px-2.5 py-2 shadow-card sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-fresh/15 text-brand-deep sm:h-10 sm:w-10">
              <Leaf size={14} />
            </span>
            <span className="block text-[10px] font-semibold leading-3.5 text-brand-ink sm:text-sm">
              Serving Farmers With Dedication
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
