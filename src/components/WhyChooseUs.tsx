import { motion } from 'framer-motion'
import { ShieldCheck, Users, IndianRupee, MapPin } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Reliable Service',
    desc: 'On-time and dependable service you can trust.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Skilled operators handling the machinery.',
  },
  {
    icon: IndianRupee,
    title: 'Fair & Transparent Pricing',
    desc: 'Straightforward pricing with no surprises.',
  },
  {
    icon: MapPin,
    title: 'Local Support',
    desc: 'Based locally and reachable when you need us.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wide uppercase">
          Why Farmers
        </p>
        <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">
          Choose Us?
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-3"
            >
              <Icon size={26} strokeWidth={1.5} className="text-brand-gold" />
              <p className="text-sm sm:text-base font-semibold">{title}</p>
              <p className="text-[0.8rem] sm:text-sm text-white/60 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
