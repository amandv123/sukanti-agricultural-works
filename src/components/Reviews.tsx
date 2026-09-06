import { Quote, ExternalLink } from 'lucide-react'
import { business } from '../data/business'

export default function Reviews() {
  return (
    <section className="py-10 sm:py-24 bg-brand-surface">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="section-label">What Our Customers Say</p>
        <h2 className="mt-2 font-display font-extrabold text-2xl text-brand-ink sm:mt-3 sm:text-4xl">
          Trusted by Farmers
        </h2>
        <div className="mt-5 rounded-xl border border-black/5 bg-white px-3.5 py-4 shadow-card sm:mt-8 sm:rounded-3xl sm:px-14 sm:py-14">
          <Quote size={24} className="mx-auto text-brand-fresh/50 sm:h-9 sm:w-9" />
          <p className="mt-2 text-xs leading-5 text-brand-ink/65 max-w-md mx-auto sm:mt-4 sm:text-base sm:leading-relaxed">
            Real reviews from real customers, shown directly from our
            Google Business Profile — no reviews are written or edited by us.
          </p>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-deep text-white px-4 py-2 text-xs font-semibold hover:bg-brand-deepDark transition-colors sm:mt-6 sm:px-6 sm:py-3 sm:text-base"
          >
            View Google Reviews <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
