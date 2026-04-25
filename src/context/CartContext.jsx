import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((product, size, color, qty = 1) => {
    setItems(prev => {
      // Check if same product + size + color already in cart
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.size === size && item.color === color
      )
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          qty: updated[existingIndex].qty + qty,
        }
        return updated
      }
      return [...prev, { product, size, color, qty }]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((index) => {
    setItems(prev => prev.filter((_, i) => i !== index))
  }, [])

  const updateQuantity = useCallback((index, newQty) => {
    if (newQty < 1) return
    setItems(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], qty: newQty }
      return updated
    })
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.qty, 0), [items])
  const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.product.price * item.qty, 0), [items])

  const value = useMemo(() => ({
    items,
    isOpen,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  }), [items, isOpen, totalItems, totalPrice, addToCart, removeFromCart, updateQuantity, clearCart, openCart, closeCart])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
