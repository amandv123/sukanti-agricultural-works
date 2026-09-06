import { Quote, ExternalLink } from 'lucide-react'
import { business } from '../data/business'

export default function Reviews() {
  return (
    <section className="py-12 sm:py-24 bg-brand-surface">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="section-label">What Our Customers Say</p>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-brand-ink">
          Trusted by Farmers
        </h2>

        <div className="mt-6 sm:mt-8 bg-white rounded-2xl sm:rounded-3xl border border-black/5 shadow-card px-4 py-6 sm:px-14 sm:py-14">
          <Quote size={28} className="mx-auto text-brand-fresh/50 sm:h-9 sm:w-9" />
          <p className="mt-3 text-sm text-brand-ink/65 leading-6 max-w-md mx-auto sm:mt-4 sm:text-base sm:leading-relaxed">
            Real reviews from real customers, shown directly from our
            Google Business Profile — no reviews are written or edited by us.
          </p>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-deep text-white px-5 py-2.5 font-semibold hover:bg-brand-deepDark transition-colors sm:mt-6 sm:px-6 sm:py-3"
          >
            View Google Reviews <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
