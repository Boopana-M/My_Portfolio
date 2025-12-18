import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 px-4 py-6 text-slate-100 sm:px-6">
      <motion.div 
        className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.p 
          className="text-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Thank you for visiting my portfolio. Keep rising 🚀
        </motion.p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          <motion.span 
            className="pill border border-slate-700 text-slate-200"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.1, borderColor: "rgb(249 115 22)" }}
          >
            Boopana M
          </motion.span>
          <motion.a 
            href="#home" 
            className="pill border border-orange-300 text-orange-200"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
          </motion.a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
