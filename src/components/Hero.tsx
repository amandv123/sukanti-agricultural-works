import { motion } from 'framer-motion'
import { Leaf, ArrowRight } from 'lucide-react'
import { business } from '../data/business'
import tractorImage from '../assets/tractor-hero.webp'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-cream pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-deep/10 px-4 py-2 text-xs font-semibold text-brand-deep sm:text-sm">
            <Leaf size={14} /> {business.badge}
          </span>

          <h1 className="mt-5 max-w-xl font-display text-[2.35rem] font-bold leading-[1.08] tracking-[-0.035em] text-brand-ink sm:text-5xl lg:text-[3.2rem]">
            Reliable Agricultural
            <br />
            Service for <span className="text-brand-fresh">Better</span>
            <br />
            <span className="text-brand-fresh">Farming</span>
          </h1>

          <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-brand-ink/65 sm:text-base">
            We provide trusted tractor, thresher, harvester, and agricultural services with modern machinery and skilled operators.
          </p>

          <motion.a
            href="#services"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-deep px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-deep/15 transition-colors hover:bg-brand-fresh"
          >
            Our Services <ArrowRight size={17} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-surface shadow-card">
            <img
              src={tractorImage}
              alt="Tractor working in a field for Sukanti Agricultural Works"
              className="block aspect-[16/9] w-full object-cover"
              width={1536}
              height={864}
              loading="eager"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/10 via-transparent to-white/5" />
          </div>
          <div aria-hidden className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-brand-fresh/20 blur-2xl" />
          <div aria-hidden className="absolute -bottom-3 right-8 left-12 -z-10 h-8 rounded-full bg-brand-deep/15" />
        </motion.div>
      </div>
    </section>
  )
}
