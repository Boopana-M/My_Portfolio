import { motion } from 'framer-motion'

function SectionTitle({ title, eyebrow }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <motion.span 
        className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2 
        className="font-display text-2xl font-semibold text-slate-900"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  )
}

export default SectionTitle
