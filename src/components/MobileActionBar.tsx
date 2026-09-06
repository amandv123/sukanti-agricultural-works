import { Phone, MessageCircle } from 'lucide-react'
import {
  getCallHref,
  getWhatsAppHref,
  hasRealPhone,
  hasRealWhatsApp,
} from '../data/business'

// Quick contact actions for mobile users.
export default function MobileActionBar() {
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-black/10 grid grid-cols-2"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Quick actions"
    >
      <a
        href={hasRealPhone() ? getCallHref() : undefined}
        aria-disabled={!hasRealPhone()}
        className={`flex flex-col items-center gap-0.5 py-2.5 ${
          hasRealPhone() ? 'text-brand-deep' : 'text-brand-ink/35'
        }`}
      >
        <Phone size={20} />
        <span className="text-[11px] font-medium">Call</span>
      </a>
      <a
        href={hasRealWhatsApp() ? getWhatsAppHref() : undefined}
        target={hasRealWhatsApp() ? '_blank' : undefined}
        rel="noopener noreferrer"
        aria-disabled={!hasRealWhatsApp()}
        className={`flex flex-col items-center gap-0.5 py-2.5 border-l border-black/10 ${
          hasRealWhatsApp() ? 'text-brand-fresh' : 'text-brand-ink/35'
        }`}
      >
        <MessageCircle size={20} />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
    </nav>
  )
}
