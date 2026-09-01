import { motion } from 'framer-motion'
import { BadgeCheck, MapPin, Users } from 'lucide-react'
import { business } from '../data/business'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
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
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-ink/65 sm:text-lg">
            We are committed to supporting farmers by providing agricultural
            services in and around {business.areaServed}. Our team works with
            tractor, thresher and other farm machinery to assist with
            day-to-day field needs.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 border-t border-brand-ink/10 pt-8 sm:grid-cols-3 sm:gap-6">
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
              className="flex gap-4 rounded-2xl bg-brand-surface p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-fresh/10 text-brand-deep">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-brand-ink sm:text-base">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-brand-ink/60">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
