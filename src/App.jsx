import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Overview from './components/Overview'
import ProblemStatement from './components/ProblemStatement'
import WhyItMatters from './components/WhyItMatters'
import UserPersonas from './components/UserPersonas'
import JourneyMap from './components/JourneyMap'
import SystemLogic from './components/SystemLogic'
import KeyUXFlows from './components/KeyUXFlows'
import WireframeDescriptions from './components/WireframeDescriptions'
import FinalUIShowcase from './components/FinalUIShowcase'
import EdgeCases from './components/EdgeCases'
import UsabilityTesting from './components/UsabilityTesting'
import Iterations from './components/Iterations'
import Metrics from './components/Metrics'
import Reflection from './components/Reflection'

export default function App() {
  return (
    <div className="noise">
      <Navigation />
      <main>
        <Hero />
        <Overview />
        <ProblemStatement />
        <WhyItMatters />
        <UserPersonas />
        <JourneyMap />
        <SystemLogic />
        <KeyUXFlows />
        <WireframeDescriptions />
        <FinalUIShowcase />
        <EdgeCases />
        <UsabilityTesting />
        <Iterations />
        <Metrics />
        <Reflection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-text-3">
          Adaptive EV Charging Experience — UX Case Study
        </span>
        <span className="font-mono text-xs text-text-3">
          Designed for Tesla UX Internship Application · 2024
        </span>
      </footer>
    </div>
  )
}
