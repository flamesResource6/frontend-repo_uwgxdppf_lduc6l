import { motion } from 'framer-motion'

/*
  SCORETURK Brand Logo
  - Letter "O" rendered as a glowing 3D-like football using SVG gradients
  - Metallic reflections + neon edges + soft shadow
  - Provides both full-text and icon-only variants
*/
export default function BrandLogo({ variant = 'full', size = 56, className = '' }) {
  const Icon = (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      className="drop-shadow-[0_0_12px_rgba(0,255,87,0.35)]"
      aria-label="SCORETURK Orb Football"
    >
      <defs>
        <radialGradient id="ballRadial" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="35%" stopColor="#a3d9ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0A0F14" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="neonEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF57" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft shadow */}
      <ellipse cx="100" cy="162" rx="62" ry="14" fill="#000" opacity="0.25" />

      {/* 3D ball core */}
      <circle cx="100" cy="100" r="70" fill="url(#ballRadial)" stroke="url(#neonEdge)" strokeWidth="5" filter="url(#softGlow)"/>

      {/* Energy trails */}
      <motion.circle
        cx="100"
        cy="100"
        r="86"
        fill="none"
        stroke="url(#neonEdge)"
        strokeWidth="2"
        strokeDasharray="18 18"
        initial={{ rotate: 0, opacity: 0.7 }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
        opacity="0.55"
      />

      {/* Hex/pentagon panels hint */}
      <g opacity="0.25">
        <polygon points="100,55 118,77 100,95 82,77" fill="#0A0F14" stroke="#7dd3fc" strokeWidth="1.5" />
        <polygon points="82,77 64,99 82,121 100,95" fill="#0A0F14" stroke="#7dd3fc" strokeWidth="1.5" />
        <polygon points="118,77 136,99 118,121 100,95" fill="#0A0F14" stroke="#7dd3fc" strokeWidth="1.5" />
      </g>
    </motion.svg>
  )

  if (variant === 'icon') return <div className={className}>{Icon}</div>

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Icon}
      <div className="leading-tight">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FF57] to-[#00D4FF]">
            SCORETURK
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-400">Live Football Worldwide</p>
      </div>
    </div>
  )
}
