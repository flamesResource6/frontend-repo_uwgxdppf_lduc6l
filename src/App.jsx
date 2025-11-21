import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Trophy, Play, Sun, Moon, Star, Wifi, BellRing } from 'lucide-react'
import BrandLogo from './components/BrandLogo'
import { WireCard, GrayRow, PlaceholderChart, PhoneFrame } from './components/WireframeBlocks'
import './index.css'

const BRAND = {
  green: '#00FF57',
  cyan: '#00D4FF',
  dark: '#0A0F14',
  white: '#FFFFFF',
}

function useAutoTheme() {
  const [mode, setMode] = useState('dark')
  useEffect(() => {
    const hour = new Date().getHours()
    const isDay = hour >= 7 && hour < 19
    setMode(isDay ? 'day' : 'night')
  }, [])
  return mode
}

function GoalPulse({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,87,0.18),transparent_60%)]" />
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: [0.8, 1.08, 1], opacity: [0.6, 0.9, 0] }}
            transition={{ duration: 1.2 }}
            style={{ boxShadow: 'inset 0 0 120px rgba(0,212,255,0.25)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Mascot({ compact = false }) {
  return (
    <div className={`${compact ? 'scale-75' : ''} origin-top-right`}> 
      <div className="relative">
        <motion.div
          className="w-40 h-40 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#00FF57] opacity-20 blur-2xl absolute -top-6 -right-6" />
        <motion.div
          initial={{ y: -6 }}
          animate={{ y: [-6, 4, -6] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative z-10"
        >
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl flex items-center justify-center">
            <div className="w-20 h-20 rounded-xl bg-black/60 backdrop-blur flex items-center justify-center border border-[#00D4FF]/30">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#00FF57] animate-pulse" />
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-300 text-center">Virtual Analyst</p>
        </motion.div>
      </div>
    </div>
  )
}

function ScoreTicker() {
  const [i, setI] = useState(0)
  const items = [
    'BAR 2 - 1 RMA 57\' 🔥',
    'MCI 3 - 0 LIV 68\'',
    'PSG 1 - 1 OM 22\'',
  ]
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % items.length), 2500)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="overflow-hidden rounded-full bg-white/5 border border-white/10">
      <motion.div
        key={i}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        className="px-4 py-2 text-sm text-white/90 tracking-wide"
      >
        {items[i]}
      </motion.div>
    </div>
  )
}

function Wireframes() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <WireCard title="Homepage Hero">
        <div className="p-4 space-y-3">
          <GrayRow w="60%" />
          <GrayRow w="40%" />
          <div className="mt-4 h-24 bg-gray-200 rounded" />
        </div>
      </WireCard>

      <WireCard title="Live Match Center" h={220} />

      <WireCard title="League Standings" h={220} />

      <WireCard title="Player Analytics (Heatmap)" h={220} />

      <WireCard title="Prediction & Pricing" h={220} />

      <WireCard title="Login / Register" h={220} />

      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <PhoneFrame>
            <div className="space-y-3">
              <GrayRow w="50%" />
              <div className="h-28 bg-gray-200 rounded" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-gray-200 rounded" />
                <div className="h-16 bg-gray-200 rounded" />
                <div className="h-16 bg-gray-200 rounded" />
              </div>
            </div>
          </PhoneFrame>
          <PhoneFrame>
            <div className="space-y-3">
              <GrayRow w="70%" />
              <div className="h-40 bg-gray-200 rounded" />
            </div>
          </PhoneFrame>
          <PhoneFrame>
            <div className="space-y-3">
              <GrayRow w="30%" />
              <div className="h-24 bg-gray-200 rounded" />
              <div className="h-24 bg-gray-200 rounded" />
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const mode = useAutoTheme()
  const [goal, setGoal] = useState(false)

  useEffect(() => {
    let t
    if (goal) t = setTimeout(() => setGoal(false), 1200)
    return () => clearTimeout(t)
  }, [goal])

  const bg = useMemo(() => {
    if (mode === 'day') return 'from-[#e6fbff] via-[#eafff2] to-[#e6fbff]'
    return 'from-[#0A0F14] via-[#0b1118] to-[#0A0F14]'
  }, [mode])

  return (
    <div className={`min-h-screen relative bg-gradient-to-br ${bg}`}> 
      {/* Animated lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,87,0.12),transparent_60%)]" />
        {mode === 'night' && (
          <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.35, 0.2] }} transition={{ repeat: Infinity, duration: 6 }}>
            <div className="h-full w-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><g fill=\"%2300D4FF\" opacity=\"0.14\"><circle cx=\"8\" cy=\"8\" r=\"1\"/><circle cx=\"80\" cy=\"40\" r=\"1\"/><circle cx=\"120\" cy=\"120\" r=\"1\"/></g></svg>')]" />
          </motion.div>
        )}
      </div>

      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <BrandLogo />
          <div className="flex items-center gap-3">
            <ScoreTicker />
            <div className="hidden sm:flex items-center gap-1 text-white/80">
              {mode === 'day' ? <Sun size={18} /> : <Moon size={18} />}<span className="text-xs uppercase tracking-wider">{mode}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              The Ultimate Live Scores & Analytics Platform
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Follow matches with neon-speed visuals, holographic charts, and a virtual analyst presenter.
              Automatic day/night, team color adaptation, and goal reaction animations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => setGoal(true)} className="px-5 py-3 rounded-xl bg-[#00FF57] text-black font-semibold shadow-[0_0_20px_rgba(0,255,87,0.6)] hover:shadow-[0_0_30px_rgba(0,255,87,0.8)] transition-shadow inline-flex items-center gap-2">
                <Play size={18} /> Trigger Goal Reaction
              </button>
              <button className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold backdrop-blur inline-flex items-center gap-2">
                <Trophy size={18} /> View Wireframes
              </button>
            </div>
            <div className="mt-6 text-xs text-white/60 flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><Wifi size={14}/> Real-time concept</span>
              <span className="inline-flex items-center gap-1"><BellRing size={14}/> Visual sound reaction</span>
            </div>
          </div>
          {/* Mascot + Orb */}
          <div className="flex items-center justify-center relative">
            <Mascot />
          </div>
        </section>

        {/* Wireframes Grid (grayscale) */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-white/80" size={18} />
            <h2 className="text-xl font-semibold text-white/90">Grayscale Wireframes (Desktop + iPhone)</h2>
          </div>
          <Wireframes />
        </section>
      </main>

      {/* Goal visual sound effect overlay */}
      <GoalPulse show={goal} />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} SCORETURK • Live Football Worldwide</div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><Star size={14}/> Neon HUD Design</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
