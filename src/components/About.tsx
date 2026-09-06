import { motion } from 'framer-motion'
import { BadgeCheck, MapPin, Users } from 'lucide-react'
import { business } from '../data/business'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="section-label">About Us</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl leading-tight text-brand-ink sm:text-4xl">
            About <span className="text-brand-fresh">SUKANTI</span>
            <br />
            Agricultural Works
          </h2>
          <p className="mt-4 sm:mt-5 max-w-2xl text-base leading-7 text-brand-ink/65 sm:text-lg">
            We are committed to supporting farmers by providing agricultural
            services in and around {business.areaServed}. Our team works with
            tractor, thresher and other farm machinery to assist with
            day-to-day field needs.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid gap-2.5 sm:grid-cols-3 sm:gap-6 border-t border-brand-ink/10 pt-6 sm:pt-8">
          {[
            { icon: Users, title: 'Dedicated To Farmers', text: 'Practical support for everyday field work.' },
            { icon: BadgeCheck, title: 'Quality Service', text: 'Careful work with dependable machinery.' },
            { icon: MapPin, title: 'Local Support', text: `Serving farmers around ${business.areaServed}.` },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-3 rounded-xl bg-brand-surface p-3.5 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-fresh/10 text-brand-deep sm:h-11 sm:w-11">
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-brand-ink sm:text-base">{title}</h3>
                <p className="mt-0.5 text-xs leading-5 text-brand-ink/60 sm:mt-1 sm:text-sm sm:leading-6">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
