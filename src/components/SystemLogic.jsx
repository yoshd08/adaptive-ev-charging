import { motion } from 'framer-motion'
import { Battery, Map, Cloud, Zap, Wifi, DollarSign, CheckCircle } from 'lucide-react'

const inputs = [
  { icon: Battery,    label: 'Battery State',        sub: 'SoC + degradation curve',  color: '#3BFFB0' },
  { icon: Map,        label: 'Route Distance',        sub: 'Destination + waypoints',  color: '#60A5FA' },
  { icon: Cloud,      label: 'Weather + HVAC',        sub: 'Temp, precip, A/C load',   color: '#A78BFA' },
  { icon: Wifi,       label: 'Station Availability',  sub: 'Real-time stall count',    color: '#FB923C' },
  { icon: DollarSign, label: 'Grid Demand Pricing',   sub: 'Peak/off-peak windows',    color: '#FBBF24' },
  { icon: Zap,        label: 'Urgency Context',       sub: 'Driver-set priority level', color: '#F472B6' },
]

const outputs = [
  { label: 'Charge Immediately',    color: '#FF5555', note: 'Critical state or imminent risk' },
  { label: 'Charge at Next Stop',   color: '#FFB347', note: 'Within defined range window' },
  { label: 'Optimal Routing',       color: '#3BFFB0', note: 'No action needed, monitor only' },
]

export default function SystemLogic() {
  return (
    <section id="system" className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        05 — System Logic
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Six signal inputs → one confident recommendation
      </motion.h2>
      <motion.p
        className="text-text-2 mb-14 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        The adaptive recommendation engine weighs real-time signals against each other to
        surface a single, prioritized action — never more than the driver needs.
      </motion.p>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">

        {/* Input signals */}
        <div className="grid grid-cols-2 gap-3">
          {inputs.map((inp, i) => {
            const Icon = inp.icon
            return (
              <motion.div
                key={inp.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card p-4"
              >
                <Icon size={14} style={{ color: inp.color }} className="mb-2" />
                <p className="text-xs font-medium text-text mb-0.5">{inp.label}</p>
                <p className="font-mono text-xs text-text-3">{inp.sub}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Engine block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-3 mx-4"
        >
          {/* Arrows in */}
          <div className="hidden md:flex flex-col gap-1 items-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-px h-4 bg-border" />
            ))}
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border" />
          </div>

          {/* Engine */}
          <div
            className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center"
            style={{ boxShadow: '0 0 32px rgba(59,255,176,0.08)' }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-3">
              <Zap size={18} className="text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-text mb-0.5">Recommendation</p>
            <p className="font-display font-bold text-sm text-accent">Engine</p>
            <p className="font-mono text-xs text-text-3 mt-2">Weighted scoring +<br />contextual override</p>
          </div>

          {/* Arrow out */}
          <div className="hidden md:flex flex-col gap-1 items-center">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-accent" />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-px h-4 bg-accent/30" />
            ))}
          </div>
        </motion.div>

        {/* Output states */}
        <div className="flex flex-col gap-3">
          {outputs.map((out, i) => (
            <motion.div
              key={out.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
              className="card p-5 flex items-center gap-4"
              style={{ borderColor: `${out.color}25` }}
            >
              <CheckCircle size={16} style={{ color: out.color, flexShrink: 0 }} />
              <div>
                <p className="font-display font-semibold text-sm text-text">{out.label}</p>
                <p className="font-mono text-xs text-text-3 mt-0.5">{out.note}</p>
              </div>
              <div
                className="ml-auto w-2 h-2 rounded-full animate-pulse-slow flex-shrink-0"
                style={{ background: out.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design principle note */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 p-5 bg-surface-2 border border-border rounded-xl max-w-2xl"
      >
        <p className="font-mono text-xs text-accent mb-2 uppercase tracking-wider">Design Principle</p>
        <p className="text-sm text-text-2 leading-relaxed">
          The engine always resolves to a <strong className="text-text">single recommended action</strong>.
          Presenting two or three options under uncertainty increases cognitive load.
          The system should be confident so the driver doesn't have to be.
        </p>
      </motion.div>
    </section>
  )
}
