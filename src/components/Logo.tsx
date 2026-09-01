import { Tractor } from 'lucide-react'

// Temporary logo placeholder — replace with the final Sukanti Agricultural
// Works logo mark. Keeping this isolated in one component makes that a
// one-file swap later.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 shrink-0">
      <span
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 ${
          light ? 'border-brand-cream/50 text-brand-cream' : 'border-brand-deep text-brand-deep'
        }`}
      >
        <Tractor size={18} strokeWidth={2} />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display font-extrabold text-base sm:text-lg tracking-tight ${
            light ? 'text-brand-cream' : 'text-brand-ink'
          }`}
        >
          SUKANTI
        </span>
        <span
          className={`block text-[9px] sm:text-[10px] font-semibold tracking-widest ${
            light ? 'text-brand-cream/60' : 'text-brand-fresh'
          }`}
        >
          AGRICULTURAL WORKS
        </span>
      </span>
    </a>
  )
}
