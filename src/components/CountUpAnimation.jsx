import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

function CountUpAnimation({ value, duration = 2, suffix = '', prefix = '' }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, value, { duration })
    const unsubscribe = rounded.on('change', (latest) => setDisplayValue(latest))
    
    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [value, duration, count, rounded])

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  )
}

export default CountUpAnimation
