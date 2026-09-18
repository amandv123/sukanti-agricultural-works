// Proposed service categories only — edit freely, the grid renders from this list.
import type { LucideIcon } from 'lucide-react'
import { Tractor, Cog, Disc3 } from 'lucide-react'

export type Service = {
  icon: LucideIcon
  name: string
  description: string
}

export const services: Service[] = [
  {
    icon: Tractor,
    name: 'Tractor Service',
    description: 'Cultivation, ploughing, land preparation and field operations.',
  },
  {
    icon: Cog,
    name: 'Thresher Service',
    description: 'Threshing support for paddy, wheat, pulses and other crops.',
  },
  {
    icon: Disc3,
    name: 'Rotavator & Cultivator Service',
    description: 'Soil preparation, land levelling and field cultivation.',
  },
]
