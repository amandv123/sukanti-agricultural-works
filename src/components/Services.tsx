import { motion } from 'framer-motion'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <p className="section-label">What We Offer</p>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-brand-ink">
          Our Agricultural Services
        </h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group text-left bg-white border border-black/5 rounded-xl p-3.5 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 sm:rounded-2xl sm:p-6"
              >
                <div className="w-9 h-9 rounded-full bg-brand-fresh/15 text-brand-deep flex items-center justify-center transition-transform group-hover:scale-105 sm:w-12 sm:h-12">
                  <Icon size={18} strokeWidth={1.8} className="sm:hidden" />
                  <Icon size={22} strokeWidth={1.8} className="hidden sm:block" />
                </div>
                <h3 className="mt-2 font-display font-bold text-sm text-brand-ink sm:mt-4 sm:text-lg">
                  {s.name}
                </h3>
                <p className="mt-1 text-xs text-brand-ink/60 leading-5 sm:mt-2 sm:text-sm sm:leading-relaxed">
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
