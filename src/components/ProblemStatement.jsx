import { motion } from 'framer-motion'
import { AlertTriangle, Clock, CloudSnow, MapPin, DollarSign, BarChart2 } from 'lucide-react'

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Range Anxiety',
    body: 'Drivers over-charge out of fear, wasting time — or under-charge and face uncertainty mid-route.',
  },
  {
    icon: Clock,
    title: 'Route Urgency Blindspot',
    body: 'Navigation systems don\'t understand the difference between a casual drive and a critical deadline.',
  },
  {
    icon: CloudSnow,
    title: 'Weather Impact Ignored',
    body: 'Cold weather reduces range by up to 40%. No current system adapts recommendations to real-time conditions.',
  },
  {
    icon: MapPin,
    title: 'Station Availability Uncertainty',
    body: 'Drivers arrive at charging stations to find them full or broken, with no fallback plan in place.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Unaware Decisions',
    body: 'Peak pricing during high grid demand can triple charging costs. Users have no visibility into this.',
  },
  {
    icon: BarChart2,
    title: 'Grid Demand Opacity',
    body: 'Local grid stress affects charger performance and sustainability. Drivers have zero awareness of their impact.',
  },
]

export default function ProblemStatement() {
  return (
    <section id="problem" className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        01 — Problem Statement
      </motion.p>

      {/* Pull quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="border-l-2 border-accent pl-6 mb-16"
      >
        <p className="section-title text-3xl md:text-5xl max-w-4xl">
          "I always leave earlier than I need to — not because of traffic, but because I'm scared of running out of charge."
        </p>
        <cite className="block mt-4 font-mono text-xs text-text-3 not-italic">
          — Interview participant, 3-year EV owner, daily commuter
        </cite>
      </motion.blockquote>

      {/* Context paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-text-2 text-lg leading-relaxed max-w-3xl mb-16"
      >
        Despite remarkable advances in EV hardware, the <em>software experience around charging</em> remains
        fragmented and anxiety-inducing. Current systems surface static recommendations that ignore
        the dynamic reality of real-world driving. The result: chronic over-planning, decision paralysis,
        and eroding driver confidence.
      </motion.p>

      {/* Pain points grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      >
        {painPoints.map(pt => {
          const Icon = pt.icon
          return (
            <motion.div
              key={pt.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="card card-hover p-6"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Icon size={14} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 text-text">{pt.title}</h3>
              <p className="text-text-3 text-sm leading-relaxed">{pt.body}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
