import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50 to-indigo-50"
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Logo */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-indigo-500 flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(249, 115, 22, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.5)',
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                  '0 0 20px rgba(249, 115, 22, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              BM
            </motion.div>

            {/* Orbiting particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: '-6px',
                  marginLeft: '-6px',
                  transformOrigin: `${40 + i * 15}px 0px`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.4,
                  },
                  scale: {
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  },
                }}
              />
            ))}
          </motion.div>

          {/* Loading Text */}
          <motion.h2
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading Portfolio
          </motion.h2>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-600"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.p
            className="mt-4 text-sm font-semibold text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.p>

          {/* Floating dots animation */}
          <div className="absolute bottom-20 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-indigo-400"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
