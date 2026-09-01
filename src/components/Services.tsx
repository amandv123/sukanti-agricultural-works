import { motion } from 'framer-motion'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <p className="section-label">What We Offer</p>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-brand-ink">
          Our Agricultural Services
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group text-left bg-white border border-black/5 rounded-2xl p-6 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-brand-fresh/15 text-brand-deep flex items-center justify-center transition-transform group-hover:scale-105">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-brand-ink">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-brand-ink/60 leading-relaxed">
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
