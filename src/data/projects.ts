export type Project = {
  number: string
  title: string
  category: string
  description: string
  image: string
  url: string
  stack: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'GymPro',
    category: 'Fitness Membership Platform',
    description:
      'A premium fitness membership experience designed around clear conversion paths, trainer guidance, health progress tracking and a high-energy visual system.',
    image: '/assets/gympro.png',
    url: 'https://gympro-delta.vercel.app/',
    stack: ['React', 'Responsive UI', 'Membership UX', 'Dashboard-ready'],
    featured: true,
  },
  {
    number: '02',
    title: 'WarehouseOS',
    category: '3D Operations Experience',
    description:
      'An immersive 3D warehouse interface that turns operational data into a living digital twin, with fleet, inventory, sensor and shipment concepts presented as one system.',
    image: '/assets/warehouseos.png',
    url: 'https://warehouse-two-iota.vercel.app/',
    stack: ['React', 'Three.js', '3D UI', 'Next.js'],
    featured: true,
  },
]
