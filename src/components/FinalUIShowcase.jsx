import { motion } from 'framer-motion'
import { Zap, MapPin, ChevronRight, Battery, Wifi, Clock, CheckCircle, Navigation } from 'lucide-react'

// ── Individual phone screen mockups ──────────────────────────────────

function PhoneFrame({ children, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="phone-mock w-52 overflow-hidden" style={{ minHeight: 420 }}>
        {/* Status bar */}
        <div className="bg-surface-2 flex items-center justify-between px-4 pt-3 pb-2">
          <span className="font-mono text-xs text-text-3">9:41</span>
          <div className="flex items-center gap-1.5">
            <Wifi size={10} className="text-text-3" />
            <Battery size={10} className="text-text-3" />
          </div>
        </div>
        {children}
      </div>
      <span className="font-mono text-xs text-text-3">{label}</span>
    </div>
  )
}

function RouteScreen() {
  return (
    <PhoneFrame label="Route + Charging Overlay">
      {/* Map placeholder */}
      <div className="relative bg-surface-3 h-44 overflow-hidden border-b border-border">
        {/* Grid lines to simulate map */}
        {[...Array(5)].map((_, i) => (
          <div key={`h${i}`} className="absolute w-full h-px bg-border/40" style={{ top: `${20 * i}%` }} />
        ))}
        {[...Array(5)].map((_, i) => (
          <div key={`v${i}`} className="absolute h-full w-px bg-border/40" style={{ left: `${20 * i}%` }} />
        ))}
        {/* Route line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 208 176" xmlns="http://www.w3.org/2000/svg">
          <polyline points="30,140 80,100 120,80 170,40" fill="none" stroke="#3BFFB0" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="30"  cy="140" r="4" fill="#3BFFB0" />
          <circle cx="170" cy="40"  r="4" fill="#3BFFB0" opacity="0.5" />
          {/* Charging marker */}
          <circle cx="100" cy="88" r="8" fill="#FFB347" opacity="0.9" />
          <text x="100" y="92" textAnchor="middle" fill="#060606" fontSize="9" fontWeight="bold">⚡</text>
        </svg>
      </div>
      {/* Charging card */}
      <div className="p-3 space-y-2">
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Zap size={12} className="text-warning" />
            <span className="font-mono text-xs text-warning">Charge at Next Stop</span>
          </div>
          <p className="font-display font-semibold text-sm text-text">Supercharger · Plaza</p>
          <p className="font-mono text-xs text-text-3">12 mi ahead · 8 open stalls</p>
        </div>
        {/* Route info */}
        <div className="flex justify-between text-xs px-1">
          <span className="text-text-3">Destination</span>
          <span className="text-text-2 font-medium">SFO Airport</span>
        </div>
        <div className="flex justify-between text-xs px-1">
          <span className="text-text-3">Battery</span>
          <span className="text-warning font-mono">23%</span>
        </div>
        <div className="flex justify-between text-xs px-1">
          <span className="text-text-3">ETA</span>
          <span className="text-text-2 font-mono">2h 14m</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

function StationScreen() {
  return (
    <PhoneFrame label="Station Detail">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div>
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
            <Zap size={16} className="text-accent" />
          </div>
          <p className="font-display font-bold text-base text-text">Supercharger</p>
          <p className="font-mono text-xs text-text-3 flex items-center gap-1">
            <MapPin size={9} /> I-80 Rest Area, Exit 12
          </p>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: '3', sub: 'Open' },
            { val: '2m', sub: 'ETA' },
            { val: 'V3', sub: 'Type' },
          ].map(s => (
            <div key={s.sub} className="bg-surface-2 rounded-xl p-2 text-center border border-border">
              <p className="font-display font-bold text-sm text-accent">{s.val}</p>
              <p className="font-mono text-xs text-text-3">{s.sub}</p>
            </div>
          ))}
        </div>
        {/* Pricing */}
        <div className="bg-surface-2 border border-border rounded-xl p-3">
          <p className="font-mono text-xs text-text-3 mb-2">Pricing</p>
          <div className="flex justify-between text-xs">
            <span className="text-text-2">Current rate</span>
            <span className="text-accent font-mono">$0.35/kWh</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-text-2">Est. 80% cost</span>
            <span className="text-text-2 font-mono">~$8.40</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-text-3">Grid demand</span>
            <span className="text-warning font-mono">Elevated</span>
          </div>
        </div>
        {/* CTA */}
        <button className="w-full bg-accent text-bg font-display font-bold text-sm rounded-xl py-3 flex items-center justify-center gap-2">
          Navigate Here <ChevronRight size={14} />
        </button>
      </div>
    </PhoneFrame>
  )
}

function ChargingScreen() {
  return (
    <PhoneFrame label="Active Charging Session">
      <div className="p-4 space-y-4">
        {/* Status */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          <span className="font-mono text-xs text-accent">Charging · 150 kW</span>
        </div>
        {/* Battery arc (simplified) */}
        <div className="flex items-center justify-center py-2">
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#1c1c1c" strokeWidth="8" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#3BFFB0" strokeWidth="8"
                strokeDasharray="314" strokeDashoffset="188" strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 6px rgba(59,255,176,0.5))' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display font-bold text-xl text-text">40%</span>
              <span className="font-mono text-xs text-text-3">charging</span>
            </div>
          </div>
        </div>
        {/* Progress info */}
        <div className="space-y-2">
          {[
            { label: 'Time remaining', val: '18 min', color: '#F2F2F2' },
            { label: 'Added range',    val: '+62 mi',  color: '#3BFFB0' },
            { label: 'Target (80%)',   val: '180 mi',  color: '#A8A8A8' },
            { label: 'Cost so far',    val: '$2.10',   color: '#A8A8A8' },
          ].map(r => (
            <div key={r.label} className="flex justify-between text-xs border-b border-border pb-1.5">
              <span className="text-text-3">{r.label}</span>
              <span className="font-mono" style={{ color: r.color }}>{r.val}</span>
            </div>
          ))}
        </div>
        {/* Next segment */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-3">
          <div className="flex items-center gap-2">
            <Navigation size={11} className="text-accent" />
            <span className="font-mono text-xs text-accent">Next Segment</span>
          </div>
          <p className="text-xs text-text-2 mt-1">Continue to SFO · 42 mi · Arrive at 74%</p>
        </div>
      </div>
    </PhoneFrame>
  )
}

export default function FinalUIShowcase() {
  return (
    <section className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        08 — Final UI
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Three screens. One coherent experience.
      </motion.h2>
      <motion.p
        className="text-text-2 mb-16 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Every screen serves a specific phase of the charging journey, with progressive disclosure
        — surfacing complexity only when the context demands it.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
          <RouteScreen />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
          <StationScreen />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}>
          <ChargingScreen />
        </motion.div>
      </div>

      {/* Design notes */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-3 gap-4"
      >
        {[
          { title: 'Ambient awareness', body: 'Charging state is always visible at a glance — color, icon, and number reinforce each other for peripheral visibility.' },
          { title: 'Progressive disclosure', body: 'Detail is revealed in layers. The overview card shows one decision; tapping reveals full context.' },
          { title: 'Confident defaults', body: 'The system pre-selects the optimal station. Users can override, but the default is always right.' },
        ].map(n => (
          <div key={n.title} className="card p-5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mb-3" />
            <p className="font-display font-semibold text-sm text-text mb-1.5">{n.title}</p>
            <p className="text-xs text-text-3 leading-relaxed">{n.body}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
