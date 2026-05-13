import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, TrendingDown, Star, Clock } from 'lucide-react'

// ── Count-up hook ─────────────────────────────────────────────────────
function useCountUp(target, duration = 1600, enabled = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [enabled, target, duration])

  return count
}

// ── Single metric card ────────────────────────────────────────────────
function MetricCard({ metric, enabled }) {
  const value = useCountUp(metric.rawValue, 1800, enabled)
  const Icon  = metric.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card p-7 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${metric.color}12`, border: `1px solid ${metric.color}25` }}
        >
          <Icon size={15} style={{ color: metric.color }} />
        </div>
        <div
          className="font-mono text-xs px-2 py-0.5 rounded-full"
          style={{ color: metric.color, background: `${metric.color}12`, border: `1px solid ${metric.color}25` }}
        >
          {metric.change}
        </div>
      </div>

      <div>
        <div className="font-display font-bold text-4xl md:text-5xl text-text leading-none mb-1">
          {metric.prefix}{value}{metric.suffix}
        </div>
        <p className="font-display font-semibold text-sm text-text-2">{metric.label}</p>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-xs text-text-3 leading-relaxed">{metric.description}</p>
        <p className="font-mono text-xs text-text-3 mt-2">{metric.source}</p>
      </div>
    </motion.div>
  )
}

const metrics = [
  {
    rawValue:    62,
    suffix:      '%',
    prefix:      '',
    label:       'Reduction in Anxiety Score',
    change:      '↓ from 7.8 to 3.0',
    icon:        TrendingDown,
    color:       '#3BFFB0',
    description: 'Self-reported charging anxiety measured via NASA-TLX task load index before and after prototype introduction across 30 test participants.',
    source:      'Round 3 usability study, n=30',
  },
  {
    rawValue:    94,
    suffix:      '%',
    prefix:      '',
    label:       'Task Completion Rate',
    change:      '↑ from 62% in R1',
    icon:        TrendingUp,
    color:       '#60A5FA',
    description: 'Percentage of participants who completed all critical path tasks (plan route, identify charger, initiate session) without facilitator guidance.',
    source:      'Round 3 usability study, n=30',
  },
  {
    rawValue:    43,
    suffix:      '/5',
    prefix:      '',
    label:       'Satisfaction Score',
    change:      '↑ from 2.8 in R1',
    icon:        Star,
    color:       '#FBBF24',
    description: 'Average user satisfaction rating for the charging recommendation experience, measured on a 5-point scale after each prototype round.',
    source:      'Post-session survey, n=30',
  },
  {
    rawValue:    34,
    suffix:      '%',
    prefix:      '',
    label:       'Off-Peak Charging Adoption',
    change:      '+ grid benefit',
    icon:        TrendingUp,
    color:       '#A78BFA',
    description: 'Of participants shown the grid demand nudge opted to delay charging to off-peak hours when prompted with the cost savings and sustainability framing.',
    source:      'Round 3 behavioral observation',
  },
]

export default function Metrics() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="metrics" className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        12 — Metrics
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Outcomes that demonstrate the hypothesis
      </motion.h2>
      <motion.p
        className="text-text-2 mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Success was defined before design began: reduce anxiety, increase completion, earn trust.
        Each metric maps directly to a stated design goal.
      </motion.p>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(m => (
          <MetricCard key={m.label} metric={m} enabled={inView} />
        ))}
      </div>

      {/* Caveat */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-text-3 mt-8 max-w-2xl"
      >
        * Metrics reflect prototype testing in controlled conditions. Production metrics would require
        instrumented rollout with A/B testing at scale. These results validate the design direction
        and justify continued investment.
      </motion.p>
    </section>
  )
}
