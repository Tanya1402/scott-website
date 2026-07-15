interface Category {
  slug: string
  label: string
  shortLabel: string
  description: string
  heroImage: string
  videoPath?: string
  isPrestige?: boolean
}

const categories: Category[] = [
  {
    slug: 'sofas',
    label: 'Sofas & Sectionals',
    shortLabel: 'Sofas',
    description: 'Italian leather, bouclé, velvet — engineered for permanence.',
    heroImage: '/products/sofa/1.jpg',
  },
  {
    slug: 'premium-sofas',
    label: 'Premium Sofas',
    shortLabel: 'Premium',
    description: 'Our finest sofa compositions. Crafted without compromise.',
    heroImage: '/products/premium_sofa/palazzocorner.jpeg',
    videoPath: '/products/premium_sofa/premium-sofa-video.mp4',
  },
  {
    slug: 'beds',
    label: 'Beds & Headboards',
    shortLabel: 'Beds',
    description: 'Platform beds and wingback headboards for the master suite.',
    heroImage: '/products/beds/havenwing.jpg',
    videoPath: '/products/beds/bed-video.mp4',
  },
  {
    slug: 'exclusive',
    label: 'The Exclusive Edit',
    shortLabel: 'Exclusive',
    description: 'Signature Scott originals. Limited. Unrepeatable.',
    heroImage: '/products/exclusive/img86.jpg',
    isPrestige: true,
  },
  {
    slug: 'chaise',
    label: 'Chaise Lounges',
    shortLabel: 'Chaise',
    description: 'Sculptural chaise lounges for the considered interior.',
    heroImage: '/products/chaise/chaise-01.jpeg',
    videoPath: '/products/chaise/chaise-video.mp4',
  },
  {
    slug: 'tables',
    label: 'Tables & Dining',
    shortLabel: 'Tables',
    description: 'Precision-crafted dining and occasional tables.',
    heroImage: '/products/tables/35FNMB42CFK2_BZ250717.webp',
  },
]

export default categories
export type { Category }
