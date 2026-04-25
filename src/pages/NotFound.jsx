import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[120px] md:text-[180px] font-black leading-none text-secondary/5 select-none">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-black tracking-[-0.02em] -mt-6 mb-4">
          Page Not Found
        </h1>
        <p className="text-muted leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group bg-secondary text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary flex items-center gap-3"
          >
            <Home size={14} />
            Back Home
          </Link>
          <Link
            to="/shop"
            className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-3"
          >
            Browse Shop
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
