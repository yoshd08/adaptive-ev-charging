import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Battery, Navigation, CloudSnow, Sun, CloudRain, Zap, MapPin, Clock, AlertTriangle, CheckCircle } from 'lucide-react'

// ── Battery Circle SVG ────────────────────────────────────────────────
function BatteryCircle({ pct }) {
  const r          = 52
  const circumference = 2 * Math.PI * r
  const offset     = circumference - (pct / 100) * circumference
  const color      = pct < 20 ? '#FF5555' : pct < 40 ? '#FFB347' : '#3BFFB0'

  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className="mx-auto">
      {/* Track */}
      <circle cx="70" cy="70" r={r} fill="none" stroke="#1c1c1c" strokeWidth="8" />
      {/* Progress */}
      <motion.circle
        cx="70" cy="70" r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ type: 'spring', stiffness: 60, damping: 14 }}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
        style={{ filter: `drop-shadow(0 0 6px ${color}60)` }}
      />
      {/* Label */}
      <text x="70" y="65" textAnchor="middle" fill="#F2F2F2" fontSize="26" fontWeight="700" fontFamily="Syne, sans-serif">
        {pct}%
      </text>
      <text x="70" y="84" textAnchor="middle" fill="#5C5C5C" fontSize="10" fontFamily="IBM Plex Mono, monospace" letterSpacing="2">
        BATTERY
      </text>
    </svg>
  )
}

// ── Urgency selector pill ─────────────────────────────────────────────
function UrgencyPill({ label, active, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 py-2 rounded-lg font-mono text-xs transition-all duration-200 border"
      style={
        active
          ? { background: `${color}18`, borderColor: `${color}50`, color }
          : { background: 'transparent', borderColor: '#232323', color: '#5C5C5C' }
      }
    >
      {label}
    </button>
  )
}

// ── Station card ──────────────────────────────────────────────────────
function StationCard({ station, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay }}
      className="bg-surface-2 border border-border rounded-xl p-4 flex items-center gap-4"
    >
      <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
        <Zap size={14} className="text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-text truncate">{station.name}</p>
        <div className="flex items-center gap-3 mt-0.5">
          <span className="font-mono text-xs text-text-3 flex items-center gap-1">
            <MapPin size={9} /> {station.distance}
          </span>
          <span className="font-mono text-xs text-text-3 flex items-center gap-1">
            <Clock size={9} /> {station.eta}
          </span>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="font-mono text-xs text-accent">{station.slots} open</p>
        <p className="font-mono text-xs text-text-3">{station.rate}</p>
      </div>
    </motion.div>
  )
}

// ── Main component ────────────────────────────────────────────────────
export default function KeyUXFlows() {
  const [battery,  setBattery]  = useState(23)
  const [urgency,  setUrgency]  = useState('normal')
  const [weather,  setWeather]  = useState('clear')

  const weatherOptions = [
    { id: 'clear', label: 'Clear',  icon: Sun,       penaltyLabel: 'No penalty' },
    { id: 'rain',  label: 'Rain',   icon: CloudRain, penaltyLabel: '−8% range' },
    { id: 'snow',  label: 'Snow',   icon: CloudSnow, penaltyLabel: '−22% range' },
  ]

  const urgencyOptions = [
    { id: 'low',    label: 'Casual',   color: '#3BFFB0' },
    { id: 'normal', label: 'Normal',   color: '#FFB347' },
    { id: 'high',   label: 'Urgent',   color: '#FF5555' },
  ]

  // ── Recommendation engine ──────────────────────────────────────────
  const rec = useMemo(() => {
    const weatherScore = weather === 'snow' ? 2 : weather === 'rain' ? 1 : 0
    const urgencyScore = urgency === 'high' ? 2 : urgency === 'normal' ? 1 : 0
    const battScore    = battery < 15 ? 4 : battery < 25 ? 3 : battery < 40 ? 2 : battery < 60 ? 1 : 0
    const total        = weatherScore + urgencyScore + battScore

    if (total >= 6) return {
      level:   'critical',
      action:  'Charge Immediately',
      icon:    AlertTriangle,
      color:   '#FF5555',
      message: 'Battery critical with adverse conditions and/or high urgency detected. Rerouting now prevents a roadside stop.',
      stations:[
        { name: 'Supercharger · I-80 Rest Area',   distance: '0.8 mi', slots: 3,  eta: '2 min',  rate: '$0.42/kWh' },
        { name: 'ChargePoint · Walmart Elk Grove',  distance: '2.3 mi', slots: 7,  eta: '6 min',  rate: '$0.38/kWh' },
      ],
    }

    if (total >= 3) return {
      level:   'warning',
      action:  'Charge at Next Stop',
      icon:    Zap,
      color:   '#FFB347',
      message: 'Recommend charging within the next 15 miles to maintain comfortable arrival margin.',
      stations:[
        { name: 'Supercharger · Downtown Plaza',   distance: '12 mi', slots: 8,  eta: '18 min', rate: '$0.35/kWh' },
        { name: 'EVgo · Market Street Garage',      distance: '14 mi', slots: 5,  eta: '22 min', rate: '$0.40/kWh' },
      ],
    }

    return {
      level:   'optimal',
      action:  'Optimal Range',
      icon:    CheckCircle,
      color:   '#3BFFB0',
      message: 'You\'re on track. Charging at your destination or planned stop is sufficient. No detour needed.',
      stations:[
        { name: 'Supercharger · Airport Blvd',     distance: '38 mi', slots: 12, eta: '46 min', rate: '$0.32/kWh' },
      ],
    }
  }, [battery, urgency, weather])

  const RecIcon = rec.icon

  return (
    <section id="flows" className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        06 — Key UX Flows
      </motion.p>
      <motion.h2
        className="section-title text-3xl md:text-4xl mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Live prototype: adaptive charging recommendation
      </motion.h2>
      <motion.p
        className="text-text-2 mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Adjust the variables below to see how the recommendation engine responds in real time.
        This models the core logic of the adaptive system.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-6 items-start">

        {/* ── Controls panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card p-6 space-y-8"
        >
          <p className="font-mono text-xs text-text-3 uppercase tracking-widest">Input Variables</p>

          {/* Battery */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Battery size={14} className="text-text-2" />
                <span className="font-display font-medium text-sm text-text">Battery State</span>
              </div>
              <span
                className="font-mono text-sm font-medium"
                style={{ color: battery < 20 ? '#FF5555' : battery < 40 ? '#FFB347' : '#3BFFB0' }}
              >
                {battery}%
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={100}
              value={battery}
              onChange={e => setBattery(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-1.5">
              <span className="font-mono text-xs text-danger">5% — Critical</span>
              <span className="font-mono text-xs text-accent">100% — Full</span>
            </div>
          </div>

          {/* Urgency */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Navigation size={14} className="text-text-2" />
              <span className="font-display font-medium text-sm text-text">Route Urgency</span>
            </div>
            <div className="flex gap-2">
              {urgencyOptions.map(opt => (
                <UrgencyPill
                  key={opt.id}
                  label={opt.label}
                  active={urgency === opt.id}
                  onClick={() => setUrgency(opt.id)}
                  color={opt.color}
                />
              ))}
            </div>
          </div>

          {/* Weather */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sun size={14} className="text-text-2" />
              <span className="font-display font-medium text-sm text-text">Weather Conditions</span>
            </div>
            <div className="flex gap-2">
              {weatherOptions.map(opt => {
                const Icon  = opt.icon
                const active = weather === opt.id
                return (
                  <button
                    key={opt.id}
                    onClick={() => setWeather(opt.id)}
                    className="flex-1 py-2.5 px-2 rounded-xl border transition-all duration-200 flex flex-col items-center gap-1.5"
                    style={
                      active
                        ? { background: 'rgba(59,255,176,0.08)', borderColor: 'rgba(59,255,176,0.4)', color: '#F2F2F2' }
                        : { background: 'transparent', borderColor: '#232323', color: '#5C5C5C' }
                    }
                  >
                    <Icon size={16} />
                    <span className="font-mono text-xs">{opt.label}</span>
                    <span className="font-mono text-xs" style={{ color: active ? '#FFB347' : '#3a3a3a', fontSize: '0.6rem' }}>
                      {opt.penaltyLabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Battery visualization */}
          <div className="pt-4 border-t border-border">
            <BatteryCircle pct={battery} />
          </div>
        </motion.div>

        {/* ── Recommendation output ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={rec.level}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="card p-6"
              style={{ borderColor: `${rec.color}25`, background: `${rec.color}05` }}
            >
              {/* Recommendation header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${rec.color}18`, border: `1px solid ${rec.color}30` }}
                >
                  <RecIcon size={18} style={{ color: rec.color }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-3 uppercase tracking-wider mb-0.5">Recommendation</p>
                  <p className="font-display font-bold text-lg" style={{ color: rec.color }}>
                    {rec.action}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-sm text-text-2 leading-relaxed mb-5 pb-5 border-b border-border">
                {rec.message}
              </p>

              {/* Station options */}
              <div>
                <p className="font-mono text-xs text-text-3 uppercase tracking-wider mb-3">
                  Nearby Stations ({rec.stations.length})
                </p>
                <div className="space-y-3">
                  {rec.stations.map((s, i) => (
                    <StationCard key={s.name} station={s} delay={i * 0.08} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Grid demand notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="card p-4 flex gap-3 items-start"
          >
            <div className="w-6 h-6 rounded-lg bg-warning/10 border border-warning/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Zap size={11} className="text-warning" />
            </div>
            <div>
              <p className="font-mono text-xs text-warning mb-0.5">Grid Demand Notice</p>
              <p className="text-xs text-text-3 leading-relaxed">
                Current grid demand is <strong className="text-text-2">elevated (peak hours 4–8pm)</strong>.
                Charging before 4pm or after 8pm saves an estimated <strong className="text-accent">$2.40–$4.80</strong> per session.
              </p>
            </div>
          </motion.div>

          {/* Logic explanation */}
          <div className="card p-4">
            <p className="font-mono text-xs text-text-3 uppercase tracking-wider mb-3">Signal Weighting</p>
            <div className="space-y-2">
              {[
                { label: 'Battery state',      score: battery < 20 ? 'Critical' : battery < 40 ? 'Low' : 'Normal', color: battery < 20 ? '#FF5555' : battery < 40 ? '#FFB347' : '#3BFFB0' },
                { label: 'Route urgency',      score: urgency === 'high' ? 'High' : urgency === 'normal' ? 'Medium' : 'Low', color: urgency === 'high' ? '#FF5555' : urgency === 'normal' ? '#FFB347' : '#3BFFB0' },
                { label: 'Weather modifier',   score: weather === 'snow' ? '−22% range' : weather === 'rain' ? '−8% range' : 'None', color: weather === 'snow' ? '#FF5555' : weather === 'rain' ? '#FFB347' : '#3BFFB0' },
              ].map(s => (
                <div key={s.label} className="flex items-center justify-between text-xs">
                  <span className="text-text-3">{s.label}</span>
                  <span className="font-mono" style={{ color: s.color }}>{s.score}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
