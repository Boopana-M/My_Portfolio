import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full border-4 border-slate-200 bg-white shadow-lg z-40 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-12 h-12 -rotate-90 absolute">
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-xs font-bold text-slate-700">↑</span>
      </motion.div>
    </>
  )
}

export default ScrollProgressBar
