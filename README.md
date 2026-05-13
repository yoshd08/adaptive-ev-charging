# Adaptive EV Charging Experience

**A UX Case Study** · Tesla UX Design Internship Portfolio

---

## Overview

This repository contains a fully responsive, interactive portfolio case study built to demonstrate systems thinking, UX research methodology, interaction design, and product strategy maturity in the context of electric vehicle charging.

The project explores a core behavioral problem: **EV range anxiety** — and proposes a solution through an adaptive, context-aware charging recommendation system that weighs battery state, route urgency, weather conditions, grid demand pricing, and real-time station availability.

---

## What's Inside

| Section | Description |
|---|---|
| Hero | Project introduction with role, timeline, and scope badges |
| Overview | Key project stats (47 interviews, 8 weeks, 3 personas) |
| Problem Statement | Six distinct pain points with research grounding |
| Why It Matters | Data-backed research insights with source citations |
| User Personas | Three validated archetypes: Sarah, Marcus, Priya |
| Journey Map | Emotional arc from planning to charging completion |
| System Logic | Visual diagram of the 6-input recommendation engine |
| Key UX Flows | **Interactive prototype** — live recommendation based on your inputs |
| Wireframe Descriptions | Lo-fi → Hi-fi design progression across three stages |
| Final UI Showcase | Phone mockups for route, station, and active charging screens |
| Edge Cases | Expandable accordion covering 5 critical failure scenarios |
| Usability Testing | Three-round testing summary with findings and iterations |
| Iterations | Before/after comparison for three major design pivots |
| Metrics | Animated outcome metrics (anxiety reduction, completion rate, satisfaction) |
| Reflection | Key learnings and honest critique |

---

## Interactive Features

- **Live Charging Recommendation** — adjust battery %, route urgency, and weather to see the recommendation engine respond in real time
- **Battery Circle Visualization** — animated SVG progress ring with spring physics
- **Route Urgency Selector** — three-state toggle (Casual / Normal / Urgent)
- **Weather Conditions Picker** — with estimated range penalty per condition
- **Expandable Edge Case Cards** — accordion with Framer Motion transitions
- **Animated Count-Up Metrics** — triggered on scroll-into-view
- **Scroll Progress Bar** — fixed top indicator of reading progress

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | Component architecture |
| Vite | Dev server + build tooling |
| Tailwind CSS v3 | Utility-first styling with custom design tokens |
| Framer Motion | Scroll animations, transitions, spring physics |
| Lucide React | Icon library |
| Google Fonts | Syne (display), DM Sans (body), IBM Plex Mono (data) |

---

## Design System

**Color palette:**
- Background: `#060606`
- Surface: `#0e0e0e` / `#141414` / `#1c1c1c`
- Accent: `#3BFFB0` (electric seafoam — signal, energy, confirmation)
- Warning: `#FFB347`
- Danger: `#FF5555`
- Text: `#F2F2F2` / `#A8A8A8` / `#5C5C5C`

**Typography:**
- Display: `Syne` — geometric, automotive-adjacent authority
- Body: `DM Sans` — clean, readable, not generic
- Data/Mono: `IBM Plex Mono` — precision, technical trustworthiness

---

## Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/adaptive-ev-charging-portfolio.git
cd adaptive-ev-charging-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

**Build for production:**
```bash
npm run build
npm run preview
```

---

## File Structure

```
adaptive-ev-charging/
├── index.html                      # Entry point with font imports
├── package.json
├── vite.config.js
├── tailwind.config.js              # Custom tokens (colors, fonts)
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx                     # Root layout + section assembly
    ├── index.css                   # Global styles, CSS variables, utilities
    └── components/
        ├── Navigation.jsx          # Fixed nav + scroll progress bar
        ├── Hero.jsx                # Full-viewport intro
        ├── Overview.jsx            # Stats grid + project description
        ├── ProblemStatement.jsx    # Pain point cards + pull quote
        ├── WhyItMatters.jsx        # Research-backed insight cards
        ├── UserPersonas.jsx        # Three persona cards
        ├── JourneyMap.jsx          # Horizontal scroll emotional arc
        ├── SystemLogic.jsx         # Input/engine/output diagram
        ├── KeyUXFlows.jsx          # ← Main interactive prototype
        ├── WireframeDescriptions.jsx  # Lo-fi → Hi-fi progression
        ├── FinalUIShowcase.jsx     # Phone screen mockups
        ├── EdgeCases.jsx           # Expandable accordion
        ├── UsabilityTesting.jsx    # Testing rounds + findings
        ├── Iterations.jsx          # Before/after design pivots
        ├── Metrics.jsx             # Animated outcome metrics
        └── Reflection.jsx          # Learnings + future work
```

---

## Portfolio Positioning

This case study is designed to demonstrate:

1. **Systems thinking** — the recommendation engine is documented as a real scoring system, not a conceptual sketch
2. **Research grounding** — all design decisions trace back to user research findings
3. **Interaction design depth** — edge cases, state transitions, and failure modes are explicitly addressed
4. **Design maturity** — the reflection section demonstrates the ability to critique one's own work
5. **Engineering fluency** — clean React component structure, Framer Motion implementation, and attention to performance

---

## Future Improvements

- [ ] Add actual Figma embed or high-fidelity prototype link
- [ ] Expand journey map to include vehicle data (simulated)
- [ ] Add a "charging cost calculator" interactive tool
- [ ] Implement dark/light mode toggle
- [ ] Add route planning multi-stop visualization
- [ ] Translate the interactive prototype into an animatable storyboard

---

## Author

Designed and developed as a portfolio project for the Tesla UX Design Internship application.

Built with precision, care, and a genuine interest in what the future of EV software can be.

---

*"The EV transition is a product design problem as much as an engineering one."*

