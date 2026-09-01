import Logo from './Logo'
import { services } from '../data/services'
import { business } from '../data/business'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Machinery', href: '#machinery' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed max-w-[22ch]">
            Reliable agricultural service for better farming.
          </p>
        </div>

        <div>
          <p className="text-white font-display font-bold text-sm mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-display font-bold text-sm mb-4">Our Services</p>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.name}>{s.name}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/35">
          © 2026 {business.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
