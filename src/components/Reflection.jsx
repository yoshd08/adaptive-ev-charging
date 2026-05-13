import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const learnings = [
  {
    num:     '01',
    title:   'Confidence, not information, reduces anxiety',
    body:    'My initial instinct was to surface more data — more range estimates, more pricing details, more station options. Every usability test pushed back. Users didn\'t want more; they wanted certainty. The system had to become confident so they didn\'t have to be.',
  },
  {
    num:     '02',
    title:   'Language is interaction design',
    body:    'The difference between "WARNING: LOW BATTERY" and "Supercharger in 12 miles" is not cosmetic. It\'s the difference between a system that panics with the user and one that guides them. Tone, grammar, and word choice were as important as any layout decision.',
  },
  {
    num:     '03',
    title:   'Design for the anxious state, not the calm one',
    body:    'Most of my early designs were created in a quiet room with full cognitive capacity. Real users encounter these screens when they\'re driving, running late, and already stressed. Every complexity I added was magnified under those conditions. Ruthless simplification is a form of empathy.',
  },
  {
    num:     '04',
    title:   'Systems thinking before visual design',
    body:    'I spent the first two weeks exclusively on logic — input signals, scoring models, fallback hierarchies. This upfront investment meant the visual design phase was fast and clear. Without a sound system, no interface could paper over the confusion.',
  },
]

const futureWork = [
  'Multi-stop charging plan optimization for long-haul trips',
  'Integration with home charging schedules and utility API pricing',
  'Vehicle-to-grid (V2G) awareness — when to discharge, not just charge',
  'Shared household EV coordination across multiple vehicles',
  'Personalized battery degradation modeling from observed patterns',
]

export default function Reflection() {
  return (
    <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        13 — Reflection
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What this project taught me about designing for trust
      </motion.h2>

      {/* Key learnings */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {learnings.map((l, i) => (
          <motion.div
            key={l.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-6"
          >
            <div className="font-display text-5xl font-bold text-surface-3 mb-4 select-none">{l.num}</div>
            <h3 className="font-display font-bold text-base text-text mb-2">{l.title}</h3>
            <p className="text-sm text-text-2 leading-relaxed">{l.body}</p>
          </motion.div>
        ))}
      </div>

      {/* What I'd do differently */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-16"
      >
        <div className="card p-6">
          <p className="font-mono text-xs text-warning uppercase tracking-wider mb-4">If I had more time</p>
          <p className="text-text-2 text-sm leading-relaxed">
            I would build a longitudinal study — following EV drivers over 4–8 weeks as they adopted
            the system, measuring whether anxiety scores continued to decline or plateaued. The prototype
            tests show a point-in-time improvement; what I can't yet measure is whether the system
            builds lasting confidence or just reduces acute stress.
          </p>
        </div>
        <div className="card p-6">
          <p className="font-mono text-xs text-accent uppercase tracking-wider mb-4">What I'd validate differently</p>
          <p className="text-text-2 text-sm leading-relaxed">
            The "single recommendation" principle was accepted on trust in later testing. I'd challenge
            it more aggressively — run an A/B against a two-option design with a larger sample. I'm
            confident in the direction, but good design is falsifiable, and this principle deserves
            rigorous stress-testing before production.
          </p>
        </div>
      </motion.div>

      {/* Future work */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-border rounded-2xl p-8"
      >
        <p className="font-mono text-xs text-accent uppercase tracking-wider mb-5">Future Directions</p>
        <ul className="space-y-3">
          {futureWork.map(fw => (
            <li key={fw} className="flex items-start gap-3 text-sm text-text-2">
              <ArrowUpRight size={14} className="text-accent flex-shrink-0 mt-0.5" />
              {fw}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 max-w-2xl"
      >
        <p className="text-text-2 text-lg leading-relaxed">
          The EV transition is a product design problem as much as an engineering one. Drivers
          don't abandon EVs because the cars aren't good enough — they hesitate because the
          experience isn't trustworthy enough. This project is one proposal for what that
          trustworthy experience can look like.
        </p>
      </motion.div>
    </section>
  )
}
