import { motion } from 'framer-motion'

const steps = [
  {
    phase:   'Plan',
    action:  'Driver checks range before departure',
    emotion: 2,
    note:    'Uncertainty about whether current charge is enough',
    status:  'neutral',
  },
  {
    phase:   'Depart',
    action:  'Route begins, battery actively monitored',
    emotion: 3,
    note:    'Mild confidence — route seems feasible',
    status:  'ok',
  },
  {
    phase:   'Monitor',
    action:  'Battery drops faster than expected (weather/HVAC)',
    emotion: 1,
    note:    'Range estimate begins changing — concern rises',
    status:  'warning',
  },
  {
    phase:   'Anxiety Spike',
    action:  'Driver manually searches for chargers while driving',
    emotion: 0,
    note:    'Peak stress moment — distracted driving risk',
    status:  'critical',
  },
  {
    phase:   'Find Charger',
    action:  'Station identified, route updated',
    emotion: 2,
    note:    'Relief but uncertainty about availability',
    status:  'neutral',
  },
  {
    phase:   'Wait',
    action:  'Arrives at station — 2 stalls occupied, 1 free',
    emotion: 3,
    note:    'Positive: spot available. Negative: wait time unknown.',
    status:  'ok',
  },
  {
    phase:   'Resume',
    action:  'Charged to 80%, continues journey',
    emotion: 4,
    note:    'Relief and satisfaction — but time lost',
    status:  'good',
  },
]

const emotionLabel = (v) => {
  if (v === 0) return { label: 'High Stress', color: '#FF5555' }
  if (v === 1) return { label: 'Anxious',     color: '#FF8C42' }
  if (v === 2) return { label: 'Uncertain',   color: '#FFB347' }
  if (v === 3) return { label: 'Cautious',    color: '#A3E635' }
  return               { label: 'Confident',  color: '#3BFFB0' }
}

const statusColor = {
  critical: '#FF5555',
  warning:  '#FFB347',
  neutral:  '#5C5C5C',
  ok:       '#A3E635',
  good:     '#3BFFB0',
}

export default function JourneyMap() {
  return (
    <section className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        04 — Journey Map
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The emotional arc of a charging journey
      </motion.h2>
      <motion.p
        className="text-text-2 mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Mapping the experience from initial planning to resuming the journey — with particular attention to stress peaks.
      </motion.p>

      {/* Horizontal scroll journey */}
      <div className="scroll-x pb-4">
        <div className="flex gap-0 min-w-max">
          {steps.map((step, i) => {
            const emo = emotionLabel(step.emotion)
            const dotColor = statusColor[step.status]
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center relative"
                style={{ width: 180 }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-[22px] left-1/2 w-full h-px"
                    style={{ background: `${dotColor}40` }}
                  />
                )}

                {/* Emotion dot */}
                <div
                  className="w-11 h-11 rounded-full border-2 flex items-center justify-center z-10 mb-3"
                  style={{
                    borderColor: dotColor,
                    background:  `${dotColor}15`,
                    boxShadow:   `0 0 12px ${dotColor}30`,
                  }}
                >
                  {/* Emotion level bars */}
                  <div className="flex gap-px items-end h-4">
                    {[...Array(5)].map((_, b) => (
                      <div
                        key={b}
                        className="w-1 rounded-sm"
                        style={{
                          height: `${(b + 1) * 20}%`,
                          background: b <= step.emotion ? dotColor : '#2e2e2e',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Phase label */}
                <div className="font-display font-semibold text-xs text-text mb-1 text-center">
                  {step.phase}
                </div>

                {/* Emotion label */}
                <div className="font-mono text-xs mb-2" style={{ color: emo.color }}>
                  {emo.label}
                </div>

                {/* Content card */}
                <div className="card p-3 w-40">
                  <p className="text-xs text-text-2 leading-relaxed mb-1.5">{step.action}</p>
                  <p className="font-mono text-xs text-text-3 leading-snug">{step.note}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Key observation */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 p-5 border border-warning/30 bg-warning/5 rounded-xl flex gap-4 max-w-3xl"
      >
        <div className="w-1 rounded-full bg-warning flex-shrink-0" />
        <div>
          <p className="font-mono text-xs text-warning mb-1 uppercase tracking-wider">Key Observation</p>
          <p className="text-sm text-text-2 leading-relaxed">
            The "Anxiety Spike" at step 4 is the critical intervention point. Drivers are making
            navigation decisions under cognitive load. A proactive system that surfaces charging
            recommendations <em>before</em> this moment can eliminate the most dangerous UX failure state.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
