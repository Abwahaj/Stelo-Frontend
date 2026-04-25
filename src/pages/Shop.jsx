import { useState, useRef, useEffect } from 'react'
import { SlidersHorizontal, Grid3X3, LayoutGrid, X } from 'lucide-react'

const allProducts = [
  { id: 1, name: 'Essential Tee', price: 49, category: 'Tops', color: 'Black', image: '/images/product_tee_1776822434586.png', tag: 'Best Seller' },
  { id: 2, name: 'Cargo Pants', price: 89, category: 'Bottoms', color: 'Olive', image: '/images/product_cargo_1776822456572.png', tag: 'New' },
  { id: 3, name: 'Bomber Jacket', price: 149, category: 'Outerwear', color: 'Black', image: '/images/product_bomber_1776822515863.png', tag: 'Limited' },
  { id: 4, name: 'Signature Hoodie', price: 79, category: 'Tops', color: 'Orange', image: '/images/product_hoodie_1776822545195.png', tag: 'Popular' },
  { id: 5, name: 'Relaxed Tee', price: 45, category: 'Tops', color: 'White', image: '/images/product_tee_1776822434586.png' },
  { id: 6, name: 'Slim Joggers', price: 69, category: 'Bottoms', color: 'Charcoal', image: '/images/product_cargo_1776822456572.png' },
  { id: 7, name: 'Utility Overshirt', price: 119, category: 'Outerwear', color: 'Black', image: '/images/product_bomber_1776822515863.png', tag: 'New' },
  { id: 8, name: 'Crewneck Sweater', price: 89, category: 'Tops', color: 'Cream', image: '/images/product_hoodie_1776822545195.png' },
  { id: 9, name: 'Structured Cap', price: 35, category: 'Accessories', color: 'Black', image: '/images/product_tee_1776822434586.png' },
]

const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [showFilters, setShowFilters] = useState(false)
  const [gridCols, setGridCols] = useState(3)

  const filtered = allProducts
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price
      if (sortBy === 'Price: High to Low') return b.price - a.price
      return 0
    })

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-surface-dim py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">Browse</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-[-0.02em]">Shop All</h1>
          <p className="text-muted mt-4 max-w-lg">
            Explore our complete collection of premium streetwear essentials, 
            each piece designed with intention and built to last.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="border-b border-secondary/5 sticky top-20 bg-white/90 backdrop-blur-xl z-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    text-[11px] font-semibold tracking-[0.15em] uppercase px-5 py-2 transition-all duration-300 whitespace-nowrap
                    ${activeCategory === cat
                      ? 'bg-secondary text-white'
                      : 'text-muted hover:text-secondary'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="hidden md:flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-[11px] tracking-[0.1em] uppercase bg-transparent border-0 text-muted focus:outline-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>

              <div className="w-[1px] h-4 bg-secondary/10" />

              <div className="flex gap-1">
                <button
                  onClick={() => setGridCols(2)}
                  className={`p-1.5 transition-colors ${gridCols === 2 ? 'text-secondary' : 'text-muted/40'}`}
                  aria-label="Two columns"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-1.5 transition-colors ${gridCols === 3 ? 'text-secondary' : 'text-muted/40'}`}
                  aria-label="Three columns"
                >
                  <Grid3X3 size={16} />
                </button>
              </div>

              <span className="text-[11px] text-muted/40">{filtered.length} items</span>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-semibold"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`grid gap-4 lg:gap-6 ${
            gridCols === 2 ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'
          }`}>
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 80} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product, delay }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden bg-surface-dim mb-4 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5">
            {product.tag}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <button className="flex-1 bg-secondary text-white text-[10px] font-semibold tracking-[0.15em] uppercase py-3 hover:bg-primary transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold mb-0.5">{product.name}</h3>
          <p className="text-[11px] text-muted/60 uppercase tracking-wider">{product.category}</p>
        </div>
        <p className="text-sm font-bold">${product.price}</p>
      </div>
    </div>
  )
}
