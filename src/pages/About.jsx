import { Leaf, Heart, Gem, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../hooks/useInView'

const values = [
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'Every fabric is sourced from certified sustainable suppliers. We use organic cotton, recycled polyester, and plant-based dyes to minimize our environmental footprint.',
  },
  {
    icon: Heart,
    title: 'Ethical Production',
    description: 'We partner with workshops that guarantee fair wages, safe conditions, and dignified work. Every maker behind a Stelo piece is treated as a collaborator, not a cost center.',
  },
  {
    icon: Gem,
    title: 'Timeless Design',
    description: "We don't chase trends. Each collection is designed to complement what came before — building a wardrobe that evolves with you, not against you.",
  },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/collection_streetwear_1776822603980.png"
            alt="Behind the scenes at Stelo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/50 mb-4">About Stelo</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.02em] leading-[0.95]">
            Our<br />Story
          </h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary font-semibold mb-4">The Beginning</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] mb-8 leading-tight">
                  Born from a Simple Belief
                </h2>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p>
                    Stelo started in 2021, in a small studio apartment in Brooklyn, with a question that 
                    wouldn't go away: <em>Why can't everyday clothing feel extraordinary?</em>
                  </p>
                  <p>
                    Our founder, Alex Mercer, had spent a decade in the fashion industry watching two 
                    worlds refuse to meet — streetwear brands that prioritized edge over quality, and 
                    luxury houses that priced craft out of reach. Stelo was born to bridge that gap.
                  </p>
                  <p>
                    The name "Stelo" comes from the Esperanto word for "star" — a universal symbol that 
                    transcends borders, languages, and cultures. Like the North Star, we wanted to create 
                    a fixed point of quality in a fast-moving industry.
                  </p>
                  <p>
                    What began as a capsule of four essential pieces has grown into a full collection 
                    worn across 50+ countries. But our compass hasn't changed: make less, make it better, 
                    and make it matter.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src="/images/hero_model_1776822163943.png"
                  alt="Stelo founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary mb-6">Our Mission</p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight tracking-[-0.01em]">
              "To prove that fashion can be a force for good — 
              that premium quality, ethical production, and accessible 
              pricing aren't competing values, but complementary ones."
            </blockquote>
            <p className="text-white/30 mt-8 text-sm">— Alex Mercer, Founder & Creative Director</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em]">Our Pillars</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 150}>
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 mb-6">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-dim py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5,000+', label: 'Happy Customers' },
              { number: '50+', label: 'Countries' },
              { number: '100%', label: 'Sustainable' },
              { number: '4.9★', label: 'Customer Rating' },
            ].map(({ number, label }, i) => (
              <AnimatedSection key={label} delay={i * 100}>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary mb-2">{number}</p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-muted">{label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] mb-6">
              Ready to Experience<br />the Difference?
            </h2>
            <p className="text-muted mb-10 leading-relaxed">
              Join thousands of people who've made the switch to clothing 
              that's made with care, built to last, and designed to make you feel something.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
