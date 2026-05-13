import { motion } from 'framer-motion'

const insights = [
  {
    stat:   '68%',
    label:  'of prospective EV buyers',
    detail: 'cite charging anxiety as their primary barrier to purchase — not price, not range.',
    source: 'J.D. Power EV Study, 2023',
  },
  {
    stat:   '40%',
    label:  'battery range reduction',
    detail: 'occurs in temperatures below 20°F. No mainstream charging UI accounts for this in real time.',
    source: 'AAA Electric Vehicle Range Study',
  },
  {
    stat:   '3×',
    label:  'peak vs off-peak pricing',
    detail: 'difference during high grid demand — but 91% of drivers in our study never checked pricing before plugging in.',
    source: 'Primary research, n=47',
  },
]

export default function WhyItMatters() {
  return (
    <section className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            02 — Why It Matters
          </motion.p>
          <motion.h2
            className="section-title text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The gap between hardware excellence and software experience
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-2 leading-relaxed"
        >
          EVs are now technically capable of replacing most ICE vehicles for most drivers.
          The remaining friction is perceptual and experiential — a design problem, not an
          engineering one. That's exactly where this project intervenes.
        </motion.p>
      </div>

      {/* Insight cards */}
      <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
        {insights.map((ins, i) => (
          <motion.div
            key={ins.stat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface p-8 flex flex-col gap-4"
          >
            <div className="font-display text-6xl font-bold text-accent leading-none">
              {ins.stat}
            </div>
            <div>
              <p className="text-text font-medium text-sm mb-1">{ins.label}</p>
              <p className="text-text-2 text-sm leading-relaxed">{ins.detail}</p>
            </div>
            <p className="font-mono text-xs text-text-3 mt-auto pt-4 border-t border-border">
              {ins.source}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
