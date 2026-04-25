import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : isHome
              ? 'bg-transparent'
              : 'bg-white'
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-10 tracking-[0.3em] text-xl font-black transition-colors duration-300"
              style={{ color: isScrolled || !isHome ? '#0A0A0A' : '#FFFFFF' }}
            >
              STELO
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`
                    text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300
                    relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-primary
                    after:transition-all after:duration-300
                    ${location.pathname === to
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
                    }
                  `}
                  style={{ color: isScrolled || !isHome ? '#0A0A0A' : '#FFFFFF' }}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-5">
              <button
                className="transition-all duration-300 hover:opacity-60"
                style={{ color: isScrolled || !isHome ? '#0A0A0A' : '#FFFFFF' }}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className="relative transition-all duration-300 hover:opacity-60"
                style={{ color: isScrolled || !isHome ? '#0A0A0A' : '#FFFFFF' }}
                aria-label="Shopping bag"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden transition-all duration-300"
                style={{ color: isScrolled || !isHome ? '#0A0A0A' : '#FFFFFF' }}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-white transition-all duration-500
          ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className={`
                text-3xl font-bold tracking-[0.15em] uppercase text-secondary
                transition-all duration-500 hover:text-primary
                ${isMobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
