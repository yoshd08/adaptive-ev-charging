import { motion } from 'framer-motion'
import { User, Target, Frown, Lightbulb } from 'lucide-react'

const personas = [
  {
    initials:   'SE',
    name:       'Sarah E.',
    role:       'Daily Commuter',
    age:        34,
    occupation: 'Software Engineer',
    vehicle:    'Model 3 Long Range',
    tagline:    '"I just want to get to work and back without thinking about it."',
    goals: [
      'Predictable charging routine',
      'No morning surprises',
      'Cost efficiency over time',
    ],
    frustrations: [
      'App notifications mid-drive',
      'Inconsistent charging estimates',
      'Not knowing if station is busy',
    ],
    insight: 'Sarah optimizes for cognitive offload. She wants the system to handle charging logic automatically — with minimal intervention.',
    color: '#3BFFB0',
  },
  {
    initials:   'MR',
    name:       'Marcus R.',
    role:       'Road Tripper',
    age:        41,
    occupation: 'Regional Sales Executive',
    vehicle:    'Model Y Performance',
    tagline:    '"I drive 400+ miles a week. Every minute at a charger is a missed meeting."',
    goals: [
      'Fastest possible charge stops',
      'Route-integrated charging',
      'Real-time station availability',
    ],
    frustrations: [
      'Arriving at full stations',
      'Unclear time-to-charge estimates',
      'No urgency context in UI',
    ],
    insight: 'Marcus treats the car as a productivity tool. High urgency + long routes = zero tolerance for ambiguity in the charging experience.',
    color: '#FFB347',
  },
  {
    initials:   'PK',
    name:       'Priya K.',
    role:       'New EV Owner',
    age:        28,
    occupation: 'Graduate Researcher',
    vehicle:    'Model 3 Standard Range',
    tagline:    '"I love my car but I still feel like I don\'t fully understand charging."',
    goals: [
      'Build confidence in EV ownership',
      'Understand battery behavior',
      'Stay cost-conscious',
    ],
    frustrations: [
      'Intimidating charging jargon',
      'Uncertainty about weather impact',
      'No guidance on when to charge',
    ],
    insight: 'Priya represents the fastest-growing segment: first-year EV owners who need progressive disclosure — complexity revealed only when needed.',
    color: '#A78BFA',
  },
]

export default function UserPersonas() {
  return (
    <section id="personas" className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        03 — User Personas
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Three distinct archetypes, one shared frustration
      </motion.h2>
      <motion.p
        className="text-text-2 mb-12 max-w-xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Derived from 47 interviews and contextual inquiry sessions. Each persona
        captures a different relationship with charging anxiety.
      </motion.p>

      <div className="grid lg:grid-cols-3 gap-6">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="card p-6 flex flex-col gap-5"
            style={{ borderColor: `${p.color}18` }}
          >
            {/* Avatar + identity */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm"
                style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
              >
                {p.initials}
              </div>
              <div>
                <div className="font-display font-semibold text-text">{p.name}</div>
                <div className="font-mono text-xs" style={{ color: p.color }}>{p.role}</div>
              </div>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Age', val: p.age },
                { label: 'Vehicle', val: p.vehicle },
                { label: 'Role', val: p.occupation },
              ].map(m => (
                <div key={m.label} className="bg-surface-2 rounded-lg p-2">
                  <p className="font-mono text-xs text-text-3 mb-0.5">{m.label}</p>
                  <p className="text-xs text-text-2 font-medium">{m.val}</p>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <blockquote className="text-xs text-text-2 italic leading-relaxed border-l-2 pl-3" style={{ borderColor: p.color }}>
              {p.tagline}
            </blockquote>

            {/* Goals */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Target size={11} style={{ color: p.color }} />
                <span className="font-mono text-xs text-text-3 uppercase tracking-wider">Goals</span>
              </div>
              <ul className="space-y-1">
                {p.goals.map(g => (
                  <li key={g} className="text-xs text-text-2 flex gap-2">
                    <span style={{ color: p.color }}>·</span> {g}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frustrations */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Frown size={11} className="text-danger" />
                <span className="font-mono text-xs text-text-3 uppercase tracking-wider">Frustrations</span>
              </div>
              <ul className="space-y-1">
                {p.frustrations.map(f => (
                  <li key={f} className="text-xs text-text-2 flex gap-2">
                    <span className="text-danger">·</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Design insight */}
            <div className="rounded-lg p-3 mt-auto" style={{ background: `${p.color}08`, border: `1px solid ${p.color}18` }}>
              <div className="flex items-center gap-1.5 mb-1.5">
                <Lightbulb size={10} style={{ color: p.color }} />
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: p.color }}>Design Insight</span>
              </div>
              <p className="text-xs text-text-2 leading-relaxed">{p.insight}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
