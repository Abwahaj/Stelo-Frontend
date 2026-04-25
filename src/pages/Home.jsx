import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'
import { getFeaturedProducts, collections } from '../data/products'
import { AnimatedSection } from '../hooks/useInView'

const products = getFeaturedProducts(4)

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  useEffect(() => { setHeroLoaded(true) }, [])

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero_model_1776822163943.png"
            alt="Stelo fashion hero"
            className={`w-full h-full object-cover object-top transition-transform duration-[2s] ease-out ${
              heroLoaded ? 'scale-100' : 'scale-110'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <p
            className={`text-[11px] tracking-[0.4em] uppercase font-medium mb-6 text-white/70 transition-all duration-1000 ${
              heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Spring / Summer 2026
          </p>
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.02em] leading-[0.9] mb-8 transition-all duration-1000 ${
              heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            DEFINE<br />YOUR STYLE
          </h1>
          <p
            className={`text-base md:text-lg text-white/60 max-w-md mx-auto mb-10 leading-relaxed transition-all duration-1000 ${
              heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            Premium streetwear crafted with intention. Every stitch, every choice — designed for those who lead.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
              heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <Link
              to="/shop"
              className="group bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3"
            >
              Shop Now
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="text-white/60 hover:text-white text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 border-b border-white/20 hover:border-white/60 pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
            <div className="w-full h-3 bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <div className="bg-secondary py-3 overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[10px] tracking-[0.3em] uppercase text-white/40 mx-8 flex items-center gap-3">
              <Star size={8} className="text-primary" fill="currentColor" />
              Free Shipping on Orders $100+
              <Star size={8} className="text-primary" fill="currentColor" />
              Premium Quality
              <Star size={8} className="text-primary" fill="currentColor" />
              Sustainable Materials
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">Curated for You</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em]">Collections</h2>
              </div>
              <Link
                to="/shop"
                className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-semibold text-muted hover:text-primary transition-colors"
              >
                View All
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collections.map((col, i) => (
              <AnimatedSection key={col.title} delay={i * 150}>
                <Link to="/shop" className="group relative block overflow-hidden aspect-[3/4]">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-1">{col.title}</h3>
                    <p className="text-sm text-white/60">{col.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-[11px] tracking-[0.15em] uppercase font-semibold opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section className="py-24 lg:py-32 bg-surface-dim">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">Just Dropped</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em]">New Arrivals</h2>
              </div>
              <Link
                to="/shop"
                className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-semibold text-muted hover:text-primary transition-colors"
              >
                Shop All
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 100}>
                <Link to={`/shop/${product.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-surface-card mb-4 aspect-[3/4]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.tag && (
                      <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5">
                        {product.tag}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-secondary text-white text-[11px] font-semibold tracking-[0.15em] uppercase py-3 text-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      View Product
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted">${product.price}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src="/images/collection_streetwear_1776822603980.png"
                  alt="Stelo craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="lg:pl-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary font-semibold mb-4">Our Craft</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] mb-8 leading-tight">
                  Where Precision<br />Meets Passion
                </h2>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p>
                    Born from the belief that everyday clothing should be anything but ordinary, 
                    Stelo was founded with a singular vision: to bridge the gap between streetwear's 
                    raw energy and the meticulous craft of luxury fashion.
                  </p>
                  <p>
                    Every piece in our collection is a labor of intention — from sourcing sustainable 
                    materials to partnering with ethical workshops across the globe. We don't follow 
                    trends; we invest in timelessness.
                  </p>
                  <p>
                    The result? Clothing that feels as considered on the inside as it looks on the 
                    outside. No shortcuts. No compromises. Just honest design for people who 
                    appreciate the difference.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 mt-10 bg-secondary text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary transition-colors duration-300"
                >
                  Read Our Story
                  <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5,000+', label: 'Happy Customers' },
              { number: '50+', label: 'Countries Shipped' },
              { number: '100%', label: 'Sustainable Materials' },
              { number: '24/7', label: 'Customer Support' },
            ].map(({ number, label }, i) => (
              <AnimatedSection key={label} delay={i * 100}>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary mb-2">{number}</p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">Newsletter</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] mb-4">Join the Movement</h2>
            <p className="text-muted mb-10 leading-relaxed">
              Be the first to know about new drops, exclusive offers, and the stories behind our craft.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b-2 border-secondary/10 px-1 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-muted/50 mt-5">
              No spam, ever. Unsubscribe anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
