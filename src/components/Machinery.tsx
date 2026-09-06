import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { machinery } from '../data/machinery'

export default function Machinery() {
  return (
    <section id="machinery" className="py-10 sm:py-24 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-7 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Our Machinery</p>
          <h2 className="mt-2 font-display font-extrabold text-2xl text-brand-ink leading-tight sm:mt-3 sm:text-4xl">
            Modern Machinery
            <br /> for Better Results
          </h2>
          <p className="mt-2 text-sm leading-5 text-brand-ink/65 max-w-sm sm:mt-4 sm:text-base sm:leading-relaxed">
            We work with a range of agricultural machinery to help get farm
            work done efficiently.
          </p>
          <a
            href="#machinery"
            className="mt-4 inline-flex items-center gap-1 rounded-full bg-brand-deep text-white px-4 py-2 text-sm font-semibold hover:bg-brand-deepDark transition-colors sm:mt-6 sm:px-6 sm:py-3 sm:text-base"
          >
            View Machinery <ChevronRight size={17} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
          {machinery.map(({ icon: Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-lg border border-black/5 bg-white shadow-card sm:rounded-2xl"
            >
              <div className="relative flex h-14 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-surface to-[#E4EBD8] sm:aspect-square sm:h-auto">
                <Icon size={24} strokeWidth={1.3} className="text-brand-deep/70 transition-transform duration-300 group-hover:scale-110 sm:hidden" />
                <Icon size={40} strokeWidth={1.3} className="hidden text-brand-deep/70 transition-transform duration-300 group-hover:scale-110 sm:block" />
                <span className="absolute right-1 top-1 text-[7px] font-medium text-brand-ink/35 sm:right-2 sm:top-2 sm:text-[10px]">
                  [photo]
                </span>
              </div>
              <p className="px-1.5 py-1.5 text-[10px] font-semibold leading-3.5 text-brand-ink sm:px-3 sm:py-3 sm:text-sm">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
