export type MainCategory = 'indoor' | 'outdoor' | 'exclusive'

export interface CategoryFilter {
  key: string
  label: string
}

export interface SubCategory {
  slug: string
  label: string
  description: string
  heroImage: string
  filters?: CategoryFilter[]
}

export interface MainCategoryDef {
  slug: MainCategory
  label: string
  description: string
  heroImage: string
  subCategories?: SubCategory[]
}

const categories: MainCategoryDef[] = [
  {
    slug: 'indoor',
    label: 'Indoor',
    description: 'Sofas, chairs, tables, beds, chaise and accessories for extraordinary interiors.',
    heroImage: '/products/indoor/sofas/premium_sofa/palazzocorner.jpeg',
    subCategories: [
      {
        slug: 'sofas',
        label: 'Sofas',
        description: 'Standard, premium, ottoman and recliner compositions.',
        heroImage: '/products/indoor/sofas/premium_sofa/palazzocorner.jpeg',
        filters: [
          { key: 'all', label: 'All' },
          { key: 'standard', label: 'Standard' },
          { key: 'premium', label: 'Premium' },
          { key: 'ottoman', label: 'Ottoman' },
          { key: 'recliner', label: 'Recliner' },
        ],
      },
      {
        slug: 'chairs',
        label: 'Chairs',
        description: 'Dining, office, side, massage chairs and ottomans.',
        heroImage: '/products/indoor/chairs/diningchair/img6.jpg',
        filters: [
          { key: 'all', label: 'All' },
          { key: 'dining', label: 'Dining Chairs' },
          { key: 'office', label: 'Office Chairs' },
          { key: 'side-massage', label: 'Side & Massage' },
          { key: 'ottoman', label: 'Ottoman' },
        ],
      },
      {
        slug: 'tables',
        label: 'Tables',
        description: 'Dining, centre, end, side and office tables.',
        heroImage: '/products/indoor/tables/centreendtable/img272.jpg',
        
        filters: [
          { key: 'all', label: 'All' },
          { key: 'dining', label: 'Dining Tables' },
          { key: 'centre-end', label: 'Centre & End' },
          { key: 'side', label: 'Side Tables' },
          { key: 'office', label: 'Office Tables' },
        ],
      },
      {
        slug: 'beds',
        label: 'Beds',
        description: 'Platform beds and wingback headboards for the master suite.',
        heroImage: '/products/indoor/beds/34.jpg',
      },
      {
        slug: 'chaise',
        label: 'Chaise Lounges',
        description: 'Sculptural chaise lounges for the considered interior.',
        heroImage: '/products/indoor/chaise/chaise-01.jpeg',
      },
      {
        slug: 'accessories',
        label: 'Accessories',
        description: 'Considered accessories to complete every room.',
        heroImage: '/products/indoor/accessories/img6.jpg',
      },
    ],
  },
  {
    slug: 'outdoor',
    label: 'Outdoor',
    description: 'Lounge furniture and dining chairs for open living.',
    heroImage: '/products/outdoor/lounge/img15.jpg',
    subCategories: [
      {
        slug: 'lounge',
        label: 'Outdoor Lounge',
        description: 'Lounge and relaxation furniture for outdoor living.',
        heroImage: '/products/outdoor/lounge/img15.jpg',
      },
      {
        slug: 'dining-chairs',
        label: 'Outdoor Dining Chairs',
        description: 'Dining chairs designed for outdoor use.',
        heroImage: '/products/outdoor/dining/img6.jpg',
      },
    ],
  },
  {
    slug: 'exclusive',
    label: 'Exclusive Edit',
    description: 'Signature Scott originals. Limited. Unrepeatable.',
    heroImage: '/products/exclusive/img86.jpg',
  },
]

export default categories
