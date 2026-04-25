import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ChevronDown, Send } from 'lucide-react'
import { AnimatedSection } from '../hooks/useInView'

const faqs = [
  {
    q: 'What is your return policy?',
    a: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. Items must be unworn with original tags attached.",
  },
  {
    q: 'How long does shipping take?',
    a: 'Domestic orders typically arrive within 3-5 business days. International orders may take 7-14 business days depending on the destination. We offer expedited shipping at checkout.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. All duties and taxes are calculated at checkout.',
  },
  {
    q: 'How do I care for my Stelo pieces?',
    a: 'Each garment comes with specific care instructions on the label. Generally, we recommend cold water washing, air drying when possible, and avoiding harsh chemicals to preserve the longevity of your pieces.',
  },
  {
    q: 'Are your products truly sustainable?',
    a: 'Absolutely. We use 100% organic cotton, recycled polyester, and plant-based dyes. Our workshops are certified for fair labor practices, and we offset our carbon footprint through verified programs.',
  },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@stelo.com', href: 'mailto:hello@stelo.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Address', value: '142 Fashion Ave\nNew York, NY 10018' },
  { icon: Clock, label: 'Hours', value: 'Mon – Fri: 9am – 6pm EST\nSat: 10am – 4pm EST' },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-surface-dim py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-[-0.02em]">Contact Us</h1>
          <p className="text-muted mt-4 max-w-lg">
            We'd love to hear from you. Whether it's about your order, a collaboration, 
            or just to say hello — we're here.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div>
                <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
                
                {submitted && (
                  <div className="mb-8 bg-primary/10 p-4 border-l-3 border-primary">
                    <p className="text-sm font-semibold text-primary">Thank you! Your message has been sent.</p>
                    <p className="text-sm text-muted mt-1">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-secondary/10 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted/30"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-secondary/10 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted/30"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-secondary/10 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-muted appearance-none cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order Inquiry</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="collab">Collaboration</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-secondary/10 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted/30"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group bg-primary hover:bg-primary-dark text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3"
                  >
                    Send Message
                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2" delay={200}>
              <div className="lg:pl-8">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-1 font-medium">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm hover:text-primary transition-colors whitespace-pre-line">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm whitespace-pre-line">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-10 aspect-[4/3] bg-surface-dim flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-muted/20 mx-auto mb-2" />
                    <p className="text-[11px] text-muted/40 tracking-wider uppercase">
                      142 Fashion Ave, New York
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-surface-dim">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">Support</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em]">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold pr-8">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-muted flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      openFaq === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
