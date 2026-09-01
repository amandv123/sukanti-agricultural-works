// Proposed service categories only — edit freely, the grid renders from this list.
import type { LucideIcon } from 'lucide-react'
import { Tractor, Wheat, Wrench, Cog, Shovel } from 'lucide-react'

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
    icon: Wheat,
    name: 'Harvester Service',
    description: 'Harvesting support with agricultural harvester machines.',
  },
  {
    icon: Wrench,
    name: 'Agricultural Machinery',
    description: 'Access to farming implements and equipment for various needs.',
  },
  {
    icon: Shovel,
    name: 'Farming & Field Work',
    description: 'Field assistance including planting, spraying and weeding.',
  },
]
