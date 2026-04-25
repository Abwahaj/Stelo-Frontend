import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeCart() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [closeCart])

  return (
    <>
      <div className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeCart} />
      <div className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-secondary/5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <h2 className="text-[13px] font-bold tracking-[0.15em] uppercase">Your Cart</h2>
            {totalItems > 0 && <span className="bg-primary text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{totalItems}</span>}
          </div>
          <button onClick={closeCart} className="p-1 text-muted hover:text-secondary transition-colors" aria-label="Close cart"><X size={20} /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 bg-surface-dim rounded-full flex items-center justify-center mb-6"><ShoppingBag size={32} className="text-muted/20" /></div>
            <p className="text-lg font-bold mb-2">Your cart is empty</p>
            <p className="text-sm text-muted mb-8">Looks like you haven't added anything yet.</p>
            <button onClick={closeCart} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">Start Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                    <Link to={`/shop/${item.product.slug}`} onClick={closeCart} className="w-20 h-24 bg-surface-dim flex-shrink-0 overflow-hidden">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link to={`/shop/${item.product.slug}`} onClick={closeCart} className="text-sm font-semibold hover:text-primary transition-colors truncate">{item.product.name}</Link>
                        <button onClick={() => removeFromCart(index)} className="text-muted/40 hover:text-red-500 transition-colors flex-shrink-0" aria-label="Remove"><X size={14} /></button>
                      </div>
                      <p className="text-[11px] text-muted mt-0.5">{item.color} / {item.size}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-secondary/10">
                          <button onClick={() => updateQuantity(index, item.qty - 1)} className="px-2 py-1.5 text-muted hover:text-secondary transition-colors" aria-label="Decrease"><Minus size={12} /></button>
                          <span className="w-7 text-center text-[12px] font-bold">{item.qty}</span>
                          <button onClick={() => updateQuantity(index, item.qty + 1)} className="px-2 py-1.5 text-muted hover:text-secondary transition-colors" aria-label="Increase"><Plus size={12} /></button>
                        </div>
                        <p className="text-sm font-bold">${item.product.price * item.qty}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-secondary/5 px-6 py-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted font-medium">Subtotal</span>
                <span className="text-xl font-black">${totalPrice}</span>
              </div>
              <p className="text-[11px] text-muted/50 mb-5">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 flex items-center justify-center gap-3 mb-3">Checkout <ArrowRight size={14} /></button>
              <button onClick={closeCart} className="w-full text-center text-[11px] tracking-[0.15em] uppercase text-muted hover:text-secondary font-medium py-3 transition-colors">Continue Shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
