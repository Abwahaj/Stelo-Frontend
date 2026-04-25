import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black tracking-[0.3em] mb-6">STELO</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting premium streetwear that blends minimalist design with 
              ethical production. Every piece tells a story of quality and purpose.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Essentials', 'Streetwear', 'Outerwear', 'Accessories'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-white/60 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Sustainability', to: '/about' },
                { label: 'Careers', to: '/contact' },
                { label: 'Contact', to: '/contact' },
                { label: 'Press', to: '/about' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-white/60 hover:text-primary transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Stay Updated
            </h3>
            <p className="text-sm text-white/50 mb-5 leading-relaxed">
              Join our community for exclusive drops, early access, and behind-the-scenes content.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border-0 border-b border-white/10 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="ml-3 text-primary hover:text-primary-light transition-colors" aria-label="Subscribe">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-white/30 tracking-wider">
            © 2026 STELO. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Facebook, label: 'Facebook' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-white/30 hover:text-primary transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-white/30 hover:text-white/60 transition-colors tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
