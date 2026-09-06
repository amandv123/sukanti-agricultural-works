import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { machinery } from '../data/machinery'

export default function Machinery() {
  return (
    <section id="machinery" className="py-12 sm:py-24 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Our Machinery</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-brand-ink leading-tight">
            Modern Machinery
            <br /> for Better Results
          </h2>
          <p className="mt-3 sm:mt-4 text-brand-ink/65 leading-relaxed max-w-sm">
            We work with a range of agricultural machinery to help get farm
            work done efficiently.
          </p>
          <a
            href="#machinery"
            className="mt-5 sm:mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-deep text-white px-5 py-2.5 sm:px-6 sm:py-3 font-semibold hover:bg-brand-deepDark transition-colors"
          >
            View Machinery <ChevronRight size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          {machinery.map(({ icon: Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-black/5 shadow-card"
            >
              <div className="relative h-16 sm:aspect-square sm:h-auto bg-gradient-to-br from-brand-surface to-[#E4EBD8] flex items-center justify-center overflow-hidden">
                <Icon
                  size={28}
                  strokeWidth={1.3}
                  className="text-brand-deep/70 transition-transform duration-300 group-hover:scale-110 sm:hidden"
                />
                <Icon
                  size={40}
                  strokeWidth={1.3}
                  className="text-brand-deep/70 transition-transform duration-300 group-hover:scale-110 hidden sm:block"
                />
                <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-[8px] sm:text-[10px] font-medium text-brand-ink/35">
                  [photo]
                </span>
              </div>
              <p className="px-2 py-2 text-[11px] leading-4 font-semibold text-brand-ink sm:px-3 sm:py-3 sm:text-sm">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
