import { motion } from 'framer-motion'
import { Users, CheckCircle, XCircle, ArrowRight } from 'lucide-react'

const rounds = [
  {
    round:    'Round 1',
    n:        8,
    method:   'Think-aloud protocol, lo-fi prototype',
    week:     'Week 4',
    findings: [
      { type: 'issue',   text: 'Users couldn\'t distinguish "urgent" from "normal" recommendations — icons were too similar' },
      { type: 'issue',   text: '5/8 participants accidentally dismissed the charging alert by tapping the wrong area' },
      { type: 'insight', text: 'All users wanted to know WHY the system was recommending a charge' },
      { type: 'insight', text: 'Weather impact was unexpected — users found the range reduction compelling and useful' },
    ],
    changes:  'Redesigned alert with distinct color coding per urgency level. Added tap target padding. Added "Why?" expansion chevron.',
  },
  {
    round:    'Round 2',
    n:        10,
    method:   'Scenario-based testing, mid-fi Figma prototype',
    week:     'Week 6',
    findings: [
      { type: 'issue',   text: 'Grid demand pricing was perceived as "too complicated" by 4/10 users' },
      { type: 'issue',   text: 'The urgency selector in route setup was missed entirely by 6/10 users — wrong placement' },
      { type: 'insight', text: '"Charge on arrival" language was universally preferred over percentage targets' },
      { type: 'insight', text: 'Marcus (road tripper persona) wanted a multi-stop charging plan, not a single recommendation' },
    ],
    changes:  'Simplified grid demand to a single sentence. Moved urgency selector to departure screen. Added multi-stop planning mode for power users.',
  },
  {
    round:    'Round 3',
    n:        12,
    method:   'Unmoderated remote test, hi-fi prototype',
    week:     'Week 8',
    findings: [
      { type: 'insight', text: 'Task completion rate increased to 94% (up from 62% in Round 1)' },
      { type: 'insight', text: 'Average perceived confidence in charge decision: 4.3/5 (up from 2.8/5)' },
      { type: 'insight', text: 'All critical-path tasks completed without guidance' },
      { type: 'issue',   text: 'Minor: active charging screen information density rated "slightly too high" by 3/12 users' },
    ],
    changes:  'Reduced active charging screen to 4 data points max. Preserved detail behind expansion.',
  },
]

export default function UsabilityTesting() {
  return (
    <section className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        10 — Usability Testing
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Three rounds. Thirty participants. Clear signal.
      </motion.h2>
      <motion.p
        className="text-text-2 mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Each round targeted a specific fidelity level with a focused set of questions. The goal
        was not validation — it was identification of where the design was lying to us.
      </motion.p>

      <div className="space-y-6">
        {rounds.map((r, i) => (
          <motion.div
            key={r.round}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-6 md:p-8"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent border border-accent/20 bg-accent/5 px-2 py-0.5 rounded">
                {r.round}
              </span>
              <div className="flex items-center gap-1.5">
                <Users size={12} className="text-text-3" />
                <span className="font-mono text-xs text-text-3">n={r.n}</span>
              </div>
              <span className="font-mono text-xs text-text-3">{r.week}</span>
              <span className="font-mono text-xs text-text-2">{r.method}</span>
            </div>

            {/* Findings */}
            <div className="grid md:grid-cols-[1fr_auto] gap-6">
              <div>
                <p className="font-mono text-xs text-text-3 uppercase tracking-wider mb-3">Findings</p>
                <ul className="space-y-2.5">
                  {r.findings.map(f => (
                    <li key={f.text} className="flex items-start gap-2.5 text-sm">
                      {f.type === 'issue'
                        ? <XCircle size={14} className="text-danger flex-shrink-0 mt-0.5" />
                        : <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      }
                      <span className="text-text-2 leading-relaxed">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-64 bg-surface-2 border border-border rounded-xl p-4 flex-shrink-0">
                <div className="flex items-center gap-1.5 mb-2">
                  <ArrowRight size={11} className="text-accent" />
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">Changes Made</span>
                </div>
                <p className="text-xs text-text-2 leading-relaxed">{r.changes}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
