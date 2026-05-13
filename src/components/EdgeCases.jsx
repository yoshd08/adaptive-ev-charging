import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, WifiOff, Thermometer, AlertOctagon, CloudLightning, Battery } from 'lucide-react'

const cases = [
  {
    icon:    WifiOff,
    title:   'No Stations in Range',
    trigger: 'Battery < 15%, nearest station > remaining range',
    severity:'Critical',
    color:   '#FF5555',
    response:'System enters Emergency Range Mode: activates maximum efficiency settings (reduced HVAC, capped speed), contacts roadside assistance pre-emptively, and provides a real-time "reduced speed range" estimate. Driver receives a single calm, actionable message.',
    design:  'The UX challenge: avoid panic. Language is deliberately calm and solution-focused. "Extending range — reducing speed to 55 mph" rather than "WARNING: LOW BATTERY."',
  },
  {
    icon:    Thermometer,
    title:   'Extreme Cold Weather',
    trigger: 'Temperature < 20°F, battery pre-conditioning not active',
    severity:'High',
    color:   '#60A5FA',
    response:'System automatically triggers battery pre-conditioning 30 minutes before departure and adjusts range estimates by the empirically calibrated temperature penalty curve. Charging recommendations are updated to account for reduced efficiency.',
    design:  'Users should never need to manually adjust for weather. The system knows. The insight that emerged: pre-conditioning framing matters — "warming battery for optimal range" tests far better than technical jargon.',
  },
  {
    icon:    AlertOctagon,
    title:   'Station Unavailable on Arrival',
    trigger: 'All stalls occupied or out-of-service on arrival',
    severity:'High',
    color:   '#FFB347',
    response:'Fallback station was pre-identified during route planning. System immediately offers a single-tap reroute with estimated time penalty. If fallback is also occupied, system escalates to the Emergency Range Mode flow.',
    design:  'This is the most emotionally charged edge case. The solution is pre-emption: the system always has a Plan B ready, communicated as "Also considering Supercharger on Oak Ave" during normal routing.',
  },
  {
    icon:    CloudLightning,
    title:   'Grid Demand Spike',
    trigger: 'Local grid stress event detected, charger speed throttled',
    severity:'Medium',
    color:   '#FBBF24',
    response:'System transparently communicates the reduced charging speed and revised time estimate. If available, suggests delaying charging by 45–60 minutes for both cost savings and grid responsibility. Shows estimated savings.',
    design:  'First-of-kind transparency pattern. "Grid is busy — charging 30% slower. Starting in 45 min saves $3.20 and helps the grid." Framing as civic contribution increased opt-in by 34% in testing.',
  },
  {
    icon:    Battery,
    title:   'Battery Degradation Over Time',
    trigger: 'Estimated range diverges consistently from actual range',
    severity:'Low',
    color:   '#A78BFA',
    response:'System silently recalibrates its range model based on observed actual efficiency over time. After 3 weeks of consistent divergence, surfaces a "your battery has changed" notification with updated range expectations — not an alarm, an update.',
    design:  'Crucial for maintaining trust. If the system\'s estimates are wrong, users stop trusting it entirely. Transparent recalibration maintains the reliability signal that the system\'s value depends on.',
  },
]

function EdgeCard({ c, isOpen, onToggle }) {
  const Icon = c.icon
  return (
    <div className="card overflow-hidden" style={{ borderColor: isOpen ? `${c.color}25` : '' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface-2/50 transition-colors"
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${c.color}10`, border: `1px solid ${c.color}25` }}
        >
          <Icon size={14} style={{ color: c.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display font-semibold text-sm text-text">{c.title}</span>
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-full"
              style={{ color: c.color, background: `${c.color}12`, border: `1px solid ${c.color}25` }}
            >
              {c.severity}
            </span>
          </div>
          <p className="font-mono text-xs text-text-3 mt-0.5 truncate">Trigger: {c.trigger}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={16} className="text-text-3" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{  height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-border">
              <div className="grid md:grid-cols-2 gap-5 mt-4">
                <div>
                  <p className="font-mono text-xs text-text-3 uppercase tracking-wider mb-2">System Response</p>
                  <p className="text-sm text-text-2 leading-relaxed">{c.response}</p>
                </div>
                <div className="bg-surface-2 rounded-xl p-4 border border-border">
                  <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: c.color }}>
                    Design Consideration
                  </p>
                  <p className="text-sm text-text-2 leading-relaxed">{c.design}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function EdgeCases() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        09 — Edge Cases
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Designing for the moments that matter most
      </motion.h2>
      <motion.p
        className="text-text-2 mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Edge cases aren't edge cases when they happen to your users. Each scenario below was surfaced
        during research and required deliberate design decisions. Click to expand each case.
      </motion.p>

      <motion.div
        className="space-y-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      >
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          >
            <EdgeCard
              c={c}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
