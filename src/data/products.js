// ─── Centralized Product Data ───────────────────────────────────────
// Single source of truth for all product information across the site.

const products = [
  {
    id: 1,
    name: 'Essential Tee',
    slug: 'essential-tee',
    price: 49,
    category: 'Tops',
    tag: 'Best Seller',
    rating: 4.8,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'White', hex: '#F5F5F5' },
      { name: 'Charcoal', hex: '#36454F' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Our signature essential tee, crafted from 100% organic cotton with a relaxed fit that drapes perfectly. Pre-shrunk, enzyme-washed for softness, and built to hold its shape wash after wash.',
    details: {
      material: '100% Organic Cotton, 220gsm',
      care: 'Machine wash cold. Tumble dry low. Do not bleach.',
      fit: 'Relaxed fit — we recommend ordering your usual size.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_tee_1776822434586.png',
      '/images/product_tee_1776822434586.png',
      '/images/product_tee_1776822434586.png',
    ],
  },
  {
    id: 2,
    name: 'Cargo Pants',
    slug: 'cargo-pants',
    price: 89,
    category: 'Bottoms',
    tag: 'New',
    rating: 4.7,
    colors: [
      { name: 'Olive', hex: '#556B2F' },
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Sand', hex: '#C2B280' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Utility-driven cargo pants with a modern tapered silhouette. Features six functional pockets, adjustable ankle cuffs, and a comfortable mid-rise waist with internal drawcord.',
    details: {
      material: '98% Organic Cotton, 2% Elastane Twill, 280gsm',
      care: 'Machine wash cold inside out. Hang dry recommended.',
      fit: 'Tapered fit — if between sizes, size up for a relaxed look.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_cargo_1776822456572.png',
      '/images/product_cargo_1776822456572.png',
      '/images/product_cargo_1776822456572.png',
    ],
  },
  {
    id: 3,
    name: 'Bomber Jacket',
    slug: 'bomber-jacket',
    price: 149,
    category: 'Outerwear',
    tag: 'Limited',
    rating: 4.9,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A modern take on the classic bomber. Constructed from recycled nylon with a satin lining, ribbed cuffs and hem, and a clean two-way zip. Lightweight enough for layering, warm enough for autumn nights.',
    details: {
      material: 'Shell: 100% Recycled Nylon. Lining: Recycled Satin Polyester.',
      care: 'Dry clean recommended. Spot clean with damp cloth.',
      fit: 'Regular fit — true to size.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_bomber_1776822515863.png',
      '/images/product_bomber_1776822515863.png',
      '/images/product_bomber_1776822515863.png',
    ],
  },
  {
    id: 4,
    name: 'Signature Hoodie',
    slug: 'signature-hoodie',
    price: 79,
    category: 'Tops',
    tag: 'Popular',
    rating: 4.9,
    colors: [
      { name: 'Orange', hex: '#E8630A' },
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Heather Grey', hex: '#9E9E9E' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The hoodie that started it all. Heavyweight 400gsm French terry with a double-layered hood, kangaroo pocket, and embossed Stelo logo. Oversized fit for maximum comfort.',
    details: {
      material: '100% Organic Cotton French Terry, 400gsm',
      care: 'Machine wash cold inside out. Tumble dry low. Do not iron print.',
      fit: 'Oversized fit — size down for a regular fit.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_hoodie_1776822545195.png',
      '/images/product_hoodie_1776822545195.png',
      '/images/product_hoodie_1776822545195.png',
    ],
  },
  {
    id: 5,
    name: 'Relaxed Tee',
    slug: 'relaxed-tee',
    price: 45,
    category: 'Tops',
    tag: null,
    rating: 4.6,
    colors: [
      { name: 'White', hex: '#F5F5F5' },
      { name: 'Cream', hex: '#FFFDD0' },
      { name: 'Sage', hex: '#B2BEB5' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A laid-back essential with dropped shoulders and a boxy silhouette. Made from ring-spun organic cotton for an ultra-soft hand feel that only gets better with age.',
    details: {
      material: '100% Ring-Spun Organic Cotton, 200gsm',
      care: 'Machine wash cold. Tumble dry low.',
      fit: 'Boxy, relaxed fit — true to size.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_tee_1776822434586.png',
      '/images/product_tee_1776822434586.png',
      '/images/product_tee_1776822434586.png',
    ],
  },
  {
    id: 6,
    name: 'Slim Joggers',
    slug: 'slim-joggers',
    price: 69,
    category: 'Bottoms',
    tag: null,
    rating: 4.5,
    colors: [
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Black', hex: '#0A0A0A' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Sleek joggers that transition from workout to weekend. Tapered leg, elasticated waist with drawcord, and zippered pockets to keep your essentials secure.',
    details: {
      material: '80% Organic Cotton, 20% Recycled Polyester, 320gsm',
      care: 'Machine wash cold. Do not tumble dry.',
      fit: 'Slim tapered fit — true to size.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_cargo_1776822456572.png',
      '/images/product_cargo_1776822456572.png',
      '/images/product_cargo_1776822456572.png',
    ],
  },
  {
    id: 7,
    name: 'Utility Overshirt',
    slug: 'utility-overshirt',
    price: 119,
    category: 'Outerwear',
    tag: 'New',
    rating: 4.7,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Olive', hex: '#556B2F' },
      { name: 'Tan', hex: '#D2B48C' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A heavyweight overshirt built for layering. Features a clean snap-button front, chest flap pockets, and a straight hem. Works as a light jacket or a structured shirt layer.',
    details: {
      material: '100% Organic Cotton Canvas, 340gsm',
      care: 'Machine wash cold. Hang dry. Iron on medium.',
      fit: 'Regular fit — true to size for layering.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_bomber_1776822515863.png',
      '/images/product_bomber_1776822515863.png',
      '/images/product_bomber_1776822515863.png',
    ],
  },
  {
    id: 8,
    name: 'Crewneck Sweater',
    slug: 'crewneck-sweater',
    price: 89,
    category: 'Tops',
    tag: null,
    rating: 4.8,
    colors: [
      { name: 'Cream', hex: '#FFFDD0' },
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A refined crewneck knitted from a soft organic cotton-wool blend. Ribbed cuffs and hem, relaxed body with a clean finish — the kind of sweater you reach for every day.',
    details: {
      material: '70% Organic Cotton, 30% Merino Wool, 280gsm',
      care: 'Hand wash cold or gentle machine cycle. Lay flat to dry.',
      fit: 'Relaxed fit — true to size.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_hoodie_1776822545195.png',
      '/images/product_hoodie_1776822545195.png',
      '/images/product_hoodie_1776822545195.png',
    ],
  },
  {
    id: 9,
    name: 'Structured Cap',
    slug: 'structured-cap',
    price: 35,
    category: 'Accessories',
    tag: null,
    rating: 4.4,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Sand', hex: '#C2B280' },
      { name: 'White', hex: '#F5F5F5' },
    ],
    sizes: ['One Size'],
    description: 'A clean, six-panel cap with an embroidered Stelo wordmark. Adjustable metal clasp closure and pre-curved brim for a classic fit.',
    details: {
      material: '100% Organic Cotton Twill',
      care: 'Spot clean only. Do not machine wash.',
      fit: 'Adjustable — one size fits most.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_tee_1776822434586.png',
      '/images/product_tee_1776822434586.png',
      '/images/product_tee_1776822434586.png',
    ],
  },
  {
    id: 10,
    name: 'Track Shorts',
    slug: 'track-shorts',
    price: 55,
    category: 'Bottoms',
    tag: 'New',
    rating: 4.6,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Stone', hex: '#8A8680' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight mesh-lined track shorts with a 6" inseam. Elastic waist, side pockets, and a hidden zip pocket at the back. Perfect for training or casual summer days.',
    details: {
      material: '100% Recycled Nylon, mesh lining',
      care: 'Machine wash cold. Tumble dry low.',
      fit: 'Regular fit — true to size.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_cargo_1776822456572.png',
      '/images/product_cargo_1776822456572.png',
      '/images/product_cargo_1776822456572.png',
    ],
  },
  {
    id: 11,
    name: 'Puffer Vest',
    slug: 'puffer-vest',
    price: 129,
    category: 'Outerwear',
    tag: null,
    rating: 4.7,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Olive', hex: '#556B2F' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A sleek, padded puffer vest filled with recycled insulation. Water-resistant shell, stand collar, and two-way zip. The ultimate layering piece for transitional weather.',
    details: {
      material: 'Shell: Recycled Nylon. Fill: Recycled Polyester Insulation.',
      care: 'Machine wash cold on gentle. Tumble dry low with tennis balls.',
      fit: 'Regular fit — true to size.',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_bomber_1776822515863.png',
      '/images/product_bomber_1776822515863.png',
      '/images/product_bomber_1776822515863.png',
    ],
  },
  {
    id: 12,
    name: 'Canvas Tote',
    slug: 'canvas-tote',
    price: 39,
    category: 'Accessories',
    tag: 'Popular',
    rating: 4.5,
    colors: [
      { name: 'Natural', hex: '#F5F0E1' },
      { name: 'Black', hex: '#0A0A0A' },
    ],
    sizes: ['One Size'],
    description: 'A heavy-duty canvas tote with reinforced handles and an interior zip pocket. Screen-printed Stelo logo. Spacious enough for a full day out.',
    details: {
      material: '16oz Organic Canvas Cotton',
      care: 'Spot clean or hand wash. Air dry.',
      fit: 'One size — 15" x 16" x 5"',
      shipping: 'Free shipping on orders over $100. Ships within 1-2 business days.',
    },
    images: [
      '/images/product_hoodie_1776822545195.png',
      '/images/product_hoodie_1776822545195.png',
      '/images/product_hoodie_1776822545195.png',
    ],
  },
]

// Collections data for home page
export const collections = [
  {
    title: 'Essentials',
    description: 'Timeless basics built to last',
    image: '/images/product_tee_1776822434586.png',
  },
  {
    title: 'Streetwear',
    description: 'Bold statements for the urban explorer',
    image: '/images/collection_streetwear_1776822603980.png',
  },
  {
    title: 'Premium',
    description: 'Luxury fabrics, uncompromising craft',
    image: '/images/product_bomber_1776822515863.png',
  },
]

// Helper: get a product by slug
export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null
}

// Helper: get related products (same category, excluding self)
export function getRelatedProducts(product, limit = 4) {
  const related = products
    .filter(p => p.id !== product.id && p.category === product.category)
  
  // If not enough in same category, fill with other products
  if (related.length < limit) {
    const others = products.filter(
      p => p.id !== product.id && p.category !== product.category
    )
    related.push(...others)
  }

  return related.slice(0, limit)
}

// Helper: get featured products for home page
export function getFeaturedProducts(limit = 4) {
  return products.filter(p => p.tag).slice(0, limit)
}

export default products
