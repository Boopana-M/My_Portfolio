import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const maxDistance = 100

    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance
      x.set(distanceX * strength * 0.3)
      y.set(distanceY * strength * 0.3)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton
