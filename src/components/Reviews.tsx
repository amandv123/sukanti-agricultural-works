import { Quote, ExternalLink } from 'lucide-react'
import { business } from '../data/business'

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-brand-surface">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="section-label">What Our Customers Say</p>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-brand-ink">
          Trusted by Farmers
        </h2>

        <div className="mt-8 bg-white rounded-3xl border border-black/5 shadow-card px-6 py-10 sm:px-14 sm:py-14">
          <Quote size={36} className="mx-auto text-brand-fresh/50" />
          <p className="mt-4 text-brand-ink/65 leading-relaxed max-w-md mx-auto">
            Real reviews from real customers, shown directly from our
            Google Business Profile — no reviews are written or edited by us.
          </p>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-deep text-white px-6 py-3 font-semibold hover:bg-brand-deepDark transition-colors"
          >
            View Google Reviews <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
