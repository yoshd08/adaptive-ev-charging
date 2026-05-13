import { motion } from 'framer-motion'
import { ArrowDown, Zap } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const badges = [
  { label: 'UX Case Study' },
  { label: '8 Weeks' },
  { label: 'Mobile-First' },
  { label: '0 → 1 Design' },
  { label: 'Tesla Internship' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Faint radial glow behind title */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,255,176,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Horizontal rule decorations */}
      <div className="absolute top-1/4 left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-border" />
      <div className="absolute top-1/4 right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-border" />

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-center gap-2 mb-8">
          <div className="w-5 h-5 rounded bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Zap size={10} className="text-accent" />
          </div>
          <span className="section-label">Product Design Case Study</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          {...fadeUp(0.2)}
          className="section-title text-5xl md:text-7xl lg:text-8xl mb-6"
          style={{ letterSpacing: '-0.03em' }}
        >
          Adaptive EV
          <br />
          <span className="text-accent">Charging</span> Experience
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-text-2 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Eliminating range anxiety through intelligent, context-aware guidance
          that adapts to battery state, route urgency, weather, and grid demand.
        </motion.p>

        {/* Badges */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {badges.map(b => (
            <span
              key={b.label}
              className="font-mono text-xs text-text-3 border border-border px-3 py-1.5 rounded-full"
            >
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* Scroll CTA */}
        <motion.a
          href="#overview"
          {...fadeUp(0.65)}
          className="inline-flex flex-col items-center gap-2 text-text-3 hover:text-accent transition-colors group"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>

      {/* Bottom grid line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
