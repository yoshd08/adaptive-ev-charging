import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Problem',   href: '#problem' },
  { label: 'Research',  href: '#personas' },
  { label: 'System',    href: '#system' },
  { label: 'Prototype', href: '#flows' },
  { label: 'Results',   href: '#metrics' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const { scrollYProgress }         = useScroll()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Zap size={12} className="text-accent" />
            </div>
            <span className="font-mono text-xs text-text-2 tracking-widest uppercase">AEV</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-text-3 hover:text-accent tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-text-2 hover:text-accent transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-2"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-mono text-xs text-text-3 hover:text-accent tracking-widest uppercase transition-colors border-b border-border last:border-0"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>
    </>
  )
}
