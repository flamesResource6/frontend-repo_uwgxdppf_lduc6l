import { motion } from 'framer-motion'

// Grayscale wireframe primitives used across desktop + iPhone mock screens
export function WireCard({ title, h = 160 }) {
  return (
    <div className="rounded-xl border border-gray-300/70 bg-white shadow-sm">
      <div className="h-10 border-b border-gray-300/60 flex items-center px-4 text-gray-600 font-medium">{title}</div>
      <div className="p-4">
        <div className="h-[--h] bg-gray-100 rounded-md" style={{ ['--h']: `${h}px` }} />
      </div>
    </div>
  )
}

export function GrayRow({ w = '100%' }) {
  return <div className="h-3 bg-gray-200 rounded w-full" style={{ width: w }} />
}

export function PlaceholderChart() {
  return (
    <div className="h-40 bg-gradient-to-b from-gray-100 to-gray-200 rounded-md relative overflow-hidden">
      <motion.div className="absolute inset-0" initial={{ opacity: 0.6 }} animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ repeat: Infinity, duration: 2 }} />
      <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-300/80 rounded" />
    </div>
  )
}

export function PhoneFrame({ children }) {
  return (
    <div className="rounded-[28px] border-[8px] border-black/80 bg-white shadow-2xl w-[320px] mx-auto overflow-hidden">
      <div className="h-6 bg-black/80" />
      <div className="p-3 bg-gray-50">{children}</div>
    </div>
  )
}
