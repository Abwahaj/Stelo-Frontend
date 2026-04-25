import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import products from '../data/products'

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const results = query.trim().length > 0
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 300)
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div className={`fixed inset-0 z-[80] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-white/95 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`relative z-10 h-full flex flex-col transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        {/* Header */}
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.3em] uppercase text-muted font-medium">Search</span>
          <button onClick={onClose} className="p-2 text-muted hover:text-secondary transition-colors" aria-label="Close search"><X size={22} /></button>
        </div>

        {/* Search Input */}
        <div className="max-w-3xl w-full mx-auto px-6 pt-8">
          <div className="flex items-center gap-4 border-b-2 border-secondary/10 pb-4">
            <Search size={22} className="text-muted/40" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent text-2xl md:text-3xl font-bold focus:outline-none placeholder:text-secondary/10 tracking-[-0.01em]"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-muted/40 hover:text-secondary transition-colors"><X size={18} /></button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto mt-8">
          <div className="max-w-3xl mx-auto px-6">
            {query.trim().length > 0 && (
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-6">
                {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </p>
            )}

            {results.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/shop/${product.slug}`}
                    onClick={onClose}
                    className="group block"
                  >
                    <div className="relative overflow-hidden bg-surface-dim aspect-[3/4] mb-3">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {product.tag && <span className="absolute top-3 left-3 bg-primary text-white text-[8px] font-bold tracking-[0.15em] uppercase px-2 py-1">{product.tag}</span>}
                    </div>
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted">${product.price}</p>
                  </Link>
                ))}
              </div>
            ) : query.trim().length > 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl font-black text-secondary/5 mb-4">No Results</p>
                <p className="text-muted">Try searching for "tee", "hoodie", or "jacket"</p>
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted/40 text-sm">Start typing to search our collection...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
