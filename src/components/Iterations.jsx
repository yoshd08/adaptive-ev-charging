import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const iterations = [
  {
    title:   'Charging Alert Placement',
    problem: 'The alert appeared as a full-screen modal, interrupting navigation mid-drive. Users found it startling and unsafe.',
    before: {
      label: 'V1: Modal Interrupt',
      lines: ['[FULL SCREEN ALERT]', '═══════════════════', '', '⚠ LOW BATTERY', 'You have 22% left.', 'Do you want to', 'find a charger?', '', '[ Yes ]  [ No ]  [ Later ]'],
      note:  '3 choices = paralysis. Appears while driving.',
    },
    after: {
      label: 'V3: Persistent Ribbon',
      lines: ['[MAP VIEW continues]', '────────────────────', '  route / navigation  ', '  data visible here   ', '                    ', '╔══════════════════╗', '║⚡ Charge in 12mi ║', '║ Supercharger › 8  ║', '╚══════════════════╝'],
      note:  '1 action. Non-blocking. Always dismissible.',
    },
  },
  {
    title:   'Station Selection UX',
    problem: 'Showing a list of 6–8 nearby stations overwhelmed users. They spent more time deciding than they would have spent driving.',
    before: {
      label: 'V1: Full List',
      lines: ['Nearby Stations (8)', '──────────────────', '1. Supercharger A', '2. ChargePoint B', '3. EVgo C', '4. Supercharger D', '5. Blink E', '6. ChargePoint F', '7. ...more'],
      note:  'Choice paralysis. Users opened maps app instead.',
    },
    after: {
      label: 'V3: Best Match + Alternative',
      lines: ['Best Match', '──────────────────', 'Supercharger Plaza', '12 mi · 8 open', '$0.35/kWh', '', 'Tap to navigate', '', '[+ See 7 more]'],
      note:  'System chooses. User can override. Trust builds.',
    },
  },
  {
    title:   'Grid Demand Communication',
    problem: 'Initial design showed a live graph of grid demand with pricing tiers. 8/10 users said "I don\'t know what to do with this."',
    before: {
      label: 'V1: Demand Graph',
      lines: ['Grid Demand (live)', '──────────────────', '   ▄▄██▄▄         ', '  ████████▄       ', ' ██████████▄▄     ', '──────────────────', 'Peak: 4pm–8pm', '$0.42/kWh now'],
      note:  'Informative but not actionable. Caused confusion.',
    },
    after: {
      label: 'V3: Actionable Nudge',
      lines: ['💡 Save $3.20', '──────────────────', 'Grid is busy now.', '', 'Charging at 8:15pm', 'uses off-peak rates', 'and helps the grid.', '', '[ Charge Now ] [ Wait ]'],
      note:  'Decision framed around benefit. 34% chose to wait.',
    },
  },
]

export default function Iterations() {
  return (
    <section className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        11 — Iterations
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Every major change driven by observation
      </motion.h2>
      <motion.p
        className="text-text-2 mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Design maturity shows in the ability to kill ideas you're attached to. These three iterations
        each required dismantling a decision I thought was correct.
      </motion.p>

      <div className="space-y-8">
        {iterations.map((iter, i) => (
          <motion.div
            key={iter.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-4">
              <span className="font-mono text-xs text-text-3 mr-3">Iteration {i + 1}</span>
              <span className="font-display font-semibold text-text">{iter.title}</span>
            </div>
            <p className="text-sm text-text-2 leading-relaxed mb-5 max-w-2xl">
              <strong className="text-text">Problem: </strong>{iter.problem}
            </p>

            <div className="grid md:grid-cols-[1fr_40px_1fr] gap-4 items-center">
              {/* Before */}
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-danger" />
                  <span className="font-mono text-xs text-danger">{iter.before.label}</span>
                </div>
                <pre className="font-mono text-xs text-text-3 leading-relaxed whitespace-pre-wrap mb-3 bg-surface-2 rounded-lg p-3" style={{ fontSize: '0.6rem' }}>
                  {iter.before.lines.join('\n')}
                </pre>
                <p className="font-mono text-xs text-text-3 italic">{iter.before.note}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <ArrowRight size={18} className="text-accent" />
              </div>

              {/* After */}
              <div className="card p-5" style={{ borderColor: 'rgba(59,255,176,0.2)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-accent">{iter.after.label}</span>
                </div>
                <pre className="font-mono text-xs text-text-3 leading-relaxed whitespace-pre-wrap mb-3 bg-surface-2 rounded-lg p-3" style={{ fontSize: '0.6rem' }}>
                  {iter.after.lines.join('\n')}
                </pre>
                <p className="font-mono text-xs text-text-2 italic">{iter.after.note}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
