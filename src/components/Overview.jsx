import { motion } from 'framer-motion'

const stats = [
  { value: '47', label: 'User Interviews',   sub: '+ 12 contextual inquiries' },
  { value: '8',  label: 'Weeks Duration',    sub: 'Research to prototype' },
  { value: '3',  label: 'User Personas',     sub: 'Validated archetypes' },
  { value: '0→1',label: 'Product Scope',     sub: 'Concept to hi-fi' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Overview() {
  return (
    <section id="overview" className="px-6 md:px-16 py-24 border-b border-border max-w-7xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left: description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Project Overview</p>
          <h2 className="section-title text-3xl md:text-4xl mb-6">
            Rethinking how drivers interact with charging infrastructure
          </h2>
          <p className="text-text-2 leading-relaxed mb-4">
            This project explores the full charging lifecycle — from route planning to
            plug-in completion — identifying where EV drivers experience friction,
            anxiety, and decision paralysis.
          </p>
          <p className="text-text-2 leading-relaxed mb-8">
            The result is an adaptive system that surfaces the right information at the
            right moment: accounting for battery state, destination urgency, ambient
            weather, real-time station availability, and grid demand pricing.
          </p>

          <div className="flex flex-wrap gap-2">
            {['UX Research', 'Systems Design', 'Interaction Design', 'Prototyping', 'Usability Testing'].map(t => (
              <span key={t} className="font-mono text-xs text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map(s => (
            <motion.div key={s.label} variants={item} className="card p-6">
              <div
                className="font-display text-4xl font-bold mb-1"
                style={{ color: '#3BFFB0' }}
              >
                {s.value}
              </div>
              <div className="text-text font-medium text-sm mb-0.5">{s.label}</div>
              <div className="font-mono text-xs text-text-3">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
