import { Navigation, MapPin } from 'lucide-react'
import { business } from '../data/business'

export default function Location() {
  return (
    <section id="location" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="section-label">Location</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-brand-ink">
            Find Us
          </h2>

          <div className="mt-6 flex gap-3">
            <MapPin size={22} className="text-brand-fresh shrink-0 mt-0.5" />
            <address className="not-italic text-brand-ink/75 leading-relaxed">
              <strong className="block font-display font-bold text-brand-ink mb-1">
                {business.businessName}
              </strong>
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.line3}
            </address>
          </div>

          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-deep text-white px-6 py-3 font-semibold hover:bg-brand-deepDark transition-colors"
          >
            <Navigation size={18} /> Get Directions
          </a>
        </div>

        <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-black/5 shadow-card bg-brand-surface flex items-center justify-center">
          {business.googleMapsEmbedUrl ? (
            <iframe
              title="Sukanti Agricultural Works location"
              src={business.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="text-center px-6">
              <MapPin size={36} className="mx-auto text-brand-deep/40" />
              <p className="mt-3 text-sm text-brand-ink/45">
                [ Paste the Google Maps embed URL into
                <br />
                src/data/business.ts → googleMapsEmbedUrl ]
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
