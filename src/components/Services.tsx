import { motion } from 'framer-motion'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <p className="section-label">What We Offer</p>
        <h2 className="mt-2 font-display font-extrabold text-2xl text-brand-ink sm:mt-3 sm:text-4xl">
          Our Agricultural Services
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group min-h-0 rounded-lg border border-black/5 bg-white p-2.5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover sm:rounded-2xl sm:p-6"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-fresh/15 text-brand-deep sm:h-12 sm:w-12">
                  <Icon size={17} strokeWidth={1.8} />
                </div>
                <h3 className="mt-1.5 font-display text-[11px] font-bold leading-4 text-brand-ink sm:mt-4 sm:text-lg">
                  {s.name}
                </h3>
                <p className="mt-0.5 text-[9px] leading-3.5 text-brand-ink/60 sm:mt-2 sm:text-sm sm:leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
