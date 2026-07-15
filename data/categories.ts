interface Category {
  slug: string
  label: string
  shortLabel: string
  description: string
  heroImage: string
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
    heroImage: '/products/premium_sofa/img123.jpg',
  },
  {
    slug: 'beds',
    label: 'Beds & Headboards',
    shortLabel: 'Beds',
    description: 'Platform beds and wingback headboards for the master suite.',
    heroImage: '/products/beds/34.jpg',
  },
  {
    slug: 'exclusive',
    label: 'The Exclusive Edit',
    shortLabel: 'Exclusive',
    description: 'Signature Scott originals. Limited. Unrepeatable.',
    heroImage: '/products/exclusive/img39.jpg',
    isPrestige: true,
  },
  {
    slug: 'chaise',
    label: 'Chaise Lounges',
    shortLabel: 'Chaise',
    description: 'Sculptural chaise lounges for the considered interior.',
    heroImage: '/products/chaise/chaise-01.jpeg',
  },
]

export default categories
export type { Category }
