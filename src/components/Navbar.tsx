import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { getCallHref } from '../data/business'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Machinery', href: '#machinery' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_16px_-4px_rgba(20,40,24,0.12)] border-b border-transparent' : 'border-b border-black/5'
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 h-16 sm:h-[76px]">
        <Logo />

        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-brand-ink/80">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative pb-1 hover:text-brand-deep transition-colors ${
                  i === 0
                    ? 'text-brand-deep after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-deep after:rounded-full'
                    : ''
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={getCallHref()}
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-brand-deep text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-deepDark transition-colors"
        >
          <Phone size={16} /> Get in Touch
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-brand-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-5 pb-5 pt-2">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-brand-ink border-b border-black/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={getCallHref()}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-deep text-white px-4 py-3 text-sm font-semibold"
          >
            <Phone size={16} /> Get in Touch
          </a>
        </div>
      )}
    </header>
  )
}
