import { motion } from 'framer-motion'
import ownerImage from '../assets/owner-hero-16x9.webp'

export default function Owner() {
  return (
    <section id="owner" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative isolate overflow-hidden rounded-[2rem] bg-brand-ink shadow-card"
        >
          <img
            src={ownerImage}
            alt="Karan Tudu and Sukanti Tudu beside a tractor"
            className="absolute inset-0 h-full w-full scale-[1.015] object-cover blur-[0.45px]"
            loading="lazy"
            decoding="async"
          />

          {/* Soft darkening keeps the text readable without hiding the real photo. */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/72 via-brand-ink/32 to-brand-ink/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/25 via-transparent to-transparent" />

          <div className="relative min-h-[440px] sm:min-h-[480px]">
            <div className="flex min-h-[440px] max-w-xl flex-col justify-center px-7 py-10 sm:min-h-[480px] sm:px-10 lg:px-12">
              <p className="section-label text-brand-gold">Meet the Owners</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                The People Behind
                <br />
                <span className="text-brand-gold">Sukanti Agricultural Works</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                Built with a commitment to dependable agricultural services and practical support for farmers.
              </p>
            </div>

            {/* Desktop: names sit beside the people in the photograph. */}
            <div className="absolute left-[40%] top-[42%] hidden -translate-y-1/2 items-center gap-3 lg:flex">
              <div className="h-px w-8 bg-brand-gold/80" />
              <div className="rounded-xl bg-brand-ink/45 px-3 py-2 backdrop-blur-md">
                <p className="text-base font-bold text-white">Karan Tudu</p>
                <p className="text-xs font-medium text-brand-gold">Co-owner</p>
              </div>
            </div>

            <div className="absolute left-[68%] top-[43%] hidden -translate-y-1/2 items-center gap-3 lg:flex">
              <div className="rounded-xl bg-brand-ink/45 px-3 py-2 text-right backdrop-blur-md">
                <p className="text-base font-bold text-white">Sukanti Tudu</p>
                <p className="text-xs font-medium text-brand-gold">Owner</p>
              </div>
              <div className="h-px w-8 bg-brand-gold/80" />
            </div>

            {/* Mobile: keep names readable without covering the people. */}
            <div className="absolute inset-x-0 bottom-0 flex gap-2 p-4 lg:hidden">
              <div className="flex-1 rounded-xl border border-white/15 bg-brand-ink/65 px-3 py-2 backdrop-blur-md">
                <p className="text-sm font-bold text-white">Karan Tudu</p>
                <p className="text-[11px] font-medium text-brand-gold">Co-owner</p>
              </div>
              <div className="flex-1 rounded-xl border border-white/15 bg-brand-ink/65 px-3 py-2 text-right backdrop-blur-md">
                <p className="text-sm font-bold text-white">Sukanti Tudu</p>
                <p className="text-[11px] font-medium text-brand-gold">Owner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
