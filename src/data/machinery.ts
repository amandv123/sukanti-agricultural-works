// Machinery gallery categories — no specifications are listed until the
// owner confirms exact machine details (HP, brand, capacity, etc).
import type { LucideIcon } from 'lucide-react'
import { Tractor, Cog, Wheat, Disc3 } from 'lucide-react'

export type MachineryItem = {
  icon: LucideIcon
  name: string
}

export const machinery: MachineryItem[] = [
  { icon: Tractor, name: 'Tractor' },
  { icon: Cog, name: 'Thresher' },
  { icon: Wheat, name: 'Harvester' },
  { icon: Disc3, name: 'Rotavator' },
]
