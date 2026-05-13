import { motion } from 'framer-motion'

const stages = [
  {
    stage:    'Stage 1',
    title:    'Concept Sketches',
    sub:      'Paper → Digital Lo-Fi',
    duration: 'Week 1–2',
    desc:     'Initial exploration focused on information hierarchy. Key question: where in the navigation flow does charging information live? We tested three placement models — always-on overlay, context-triggered card, and dedicated charging mode.',
    decisions:[
      'Chose context-triggered model to reduce cognitive load',
      'Established single-action recommendation principle',
      'Defined proactive vs reactive trigger conditions',
    ],
    // ASCII-style wireframe representation
    screens: [
      {
        label: 'Nav Screen',
        lines: ['[MAP VIEW]', '─────────', '• Route: 148 mi', '• ETA: 2h 14m', '• Battery: 23%', '', '[CHARGE ALERT]', '⚠ Low battery'],
      },
      {
        label: 'Charging Detail',
        lines: ['[STATION]', '─────────', 'Supercharger', 'I-80 Exit 12', '', '3 stalls open', 'ETA: 2 min', '', '[NAVIGATE]'],
      },
    ],
  },
  {
    stage:    'Stage 2',
    title:    'Mid-Fidelity',
    sub:      'Figma Wireframes',
    duration: 'Week 3–5',
    desc:     'Added real data structures and tested with 8 participants. Discovered that the original inline alert was easy to dismiss accidentally. Introduced a persistent "charging ribbon" at the bottom of the navigation view for critical states.',
    decisions:[
      'Added grid demand pricing visibility',
      'Introduced urgency selector in route setup',
      'Designed weather impact disclosure pattern',
    ],
    screens: [
      {
        label: 'Route Setup',
        lines: ['Destination ▾', '─────────────', 'Add stop', '', 'Route Urgency', '[ Low ][ Normal ][ High ]', '', 'Weather: Clear ▾', '', '> Start Route'],
      },
      {
        label: 'Live Charging Card',
        lines: ['Charge at Next Stop', '──────────────────', '↑ 12 miles ahead', '', 'Supercharger Plaza', '8 open · $0.35/kWh', '', '[ Navigate There ]', '[ Dismiss ]'],
      },
    ],
  },
  {
    stage:    'Stage 3',
    title:    'High Fidelity',
    sub:      'Prototype + Polish',
    duration: 'Week 6–8',
    desc:     'Full visual design applied. Focused on motion design for state transitions (especially critical → optimal), micro-interactions for the battery circle, and dark mode optimization for in-car glanceability.',
    decisions:[
      'Haptic feedback spec added for critical state transitions',
      'Reduced charging card to maximum 3 data points',
      'Added "Why this recommendation?" expansion panel',
    ],
    screens: [
      {
        label: 'Critical State',
        lines: ['⚡ Charge Immediately', '─────────────────────', '● 14% battery', '● 3.2mi to empty', '● Snowing (−22%)', '', 'Supercharger 0.8mi', '3 open · 2 min away', '', '[ Navigate Now ]'],
      },
      {
        label: 'Optimal State',
        lines: ['✓ Optimal Range', '────────────────', '● 76% battery', '● 148mi range', '● Clear weather', '', 'Next stop: Airport', 'Charge on arrival', '', '[ Route Details ]'],
      },
    ],
  },
]

export default function WireframeDescriptions() {
  return (
    <section className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        07 — Wireframe Progression
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        From rough concept to precise interaction
      </motion.h2>

      <div className="space-y-6">
        {stages.map((s, i) => (
          <motion.div
            key={s.stage}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card p-6 md:p-8"
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-accent border border-accent/20 bg-accent/5 px-2 py-0.5 rounded">{s.stage}</span>
                  <span className="font-mono text-xs text-text-3">{s.duration}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-text mb-0.5">{s.title}</h3>
                <p className="font-mono text-xs text-text-3">{s.sub}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              {/* Description + decisions */}
              <div>
                <p className="text-text-2 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div>
                  <p className="font-mono text-xs text-text-3 uppercase tracking-wider mb-3">Key Decisions</p>
                  <ul className="space-y-2">
                    {s.decisions.map(d => (
                      <li key={d} className="flex items-start gap-2 text-sm text-text-2">
                        <span className="text-accent mt-1 flex-shrink-0">→</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Screen representations */}
              <div className="flex gap-4 flex-shrink-0">
                {s.screens.map(sc => (
                  <div key={sc.label} className="flex flex-col items-center gap-2">
                    <div className="w-36 bg-surface-3 border border-border rounded-2xl p-3 overflow-hidden" style={{ minHeight: 200 }}>
                      <div className="w-12 h-1 bg-border rounded mx-auto mb-3" />
                      <pre className="font-mono text-xs text-text-3 leading-relaxed whitespace-pre-wrap" style={{ fontSize: '0.55rem' }}>
                        {sc.lines.join('\n')}
                      </pre>
                    </div>
                    <span className="font-mono text-xs text-text-3">{sc.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
