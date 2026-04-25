import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Star, Minus, Plus, ChevronDown, ShoppingBag, Check } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { AnimatedSection } from '../hooks/useInView'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = getProductBySlug(slug)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [openDetail, setOpenDetail] = useState(null)
  const [added, setAdded] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  // Reset selections when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(null)
      setSelectedColor(product.colors[0]?.name || null)
      setSelectedImage(0)
      setQuantity(1)
      setAdded(false)
    }
  }, [slug, product])

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-black text-secondary/10 mb-4">404</p>
          <p className="text-muted mb-6">Product not found</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary-dark transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product, 4)

  const handleAddToCart = () => {
    if (!selectedSize) {
      // Highlight size selector
      document.getElementById('size-selector')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    addToCart(product, selectedSize, selectedColor, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const detailSections = [
    { key: 'material', title: 'Materials', content: product.details.material },
    { key: 'care', title: 'Care Instructions', content: product.details.care },
    { key: 'fit', title: 'Fit Guide', content: product.details.fit },
    { key: 'shipping', title: 'Shipping & Returns', content: product.details.shipping },
  ]

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-muted">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-muted/30">/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span className="text-muted/30">/</span>
          <span className="text-secondary font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div
            className={`transition-all duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Image */}
            <div className="relative overflow-hidden bg-surface-dim aspect-[3/4] mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {product.tag && (
                <span className="absolute top-6 left-6 bg-primary text-white text-[9px] font-bold tracking-[0.15em] uppercase px-4 py-2">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative overflow-hidden aspect-square w-20 bg-surface-dim transition-all duration-300 ${
                    selectedImage === i
                      ? 'ring-2 ring-primary ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div
            className={`transition-all duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Category */}
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">{product.category}</p>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-black tracking-[-0.02em] mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-primary' : 'text-secondary/10'}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'currentColor'}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">{product.rating}</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-black mb-8">${product.price}</p>

            {/* Description */}
            <p className="text-muted leading-relaxed mb-8">{product.description}</p>

            {/* Color Selector */}
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-3 font-medium">
                Color — <span className="text-secondary">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full transition-all duration-300 ${
                      selectedColor === color.name
                        ? 'ring-2 ring-primary ring-offset-2 scale-110'
                        : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8" id="size-selector">
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-3 font-medium">
                Size {!selectedSize && <span className="text-primary ml-1">— Please select</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[56px] px-4 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-secondary text-white'
                        : 'bg-surface-dim text-secondary hover:bg-secondary/10'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-stretch gap-4 mb-10">
              {/* Quantity */}
              <div className="flex items-center border border-secondary/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-4 text-muted hover:text-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-4 text-muted hover:text-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 flex items-center justify-center gap-3 text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
                  added
                    ? 'bg-green-600'
                    : 'bg-primary hover:bg-primary-dark'
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Detail Accordions */}
            <div className="border-t border-secondary/5">
              {detailSections.map(({ key, title, content }) => (
                <div key={key} className="border-b border-secondary/5">
                  <button
                    onClick={() => setOpenDetail(openDetail === key ? null : key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[12px] font-semibold tracking-[0.1em] uppercase">{title}</span>
                    <ChevronDown
                      size={16}
                      className={`text-muted transition-transform duration-300 ${
                        openDetail === key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      openDetail === key ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-muted leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-surface-dim">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">Complete the Look</p>
                  <h2 className="text-2xl md:text-3xl font-black tracking-[-0.02em]">You May Also Like</h2>
                </div>
                <Link
                  to="/shop"
                  className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-semibold text-muted hover:text-primary transition-colors"
                >
                  View All <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((rp, i) => (
                <AnimatedSection key={rp.id} delay={i * 100}>
                  <Link to={`/shop/${rp.slug}`} className="group block">
                    <div className="relative overflow-hidden bg-surface-card mb-4 aspect-[3/4]">
                      <img
                        src={rp.images[0]}
                        alt={rp.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {rp.tag && (
                        <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5">
                          {rp.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{rp.name}</h3>
                    <p className="text-sm text-muted">${rp.price}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
