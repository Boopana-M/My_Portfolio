import { motion } from 'framer-motion'

function Navbar({ navLinks, contactEmail }) {
  return (
    <motion.nav 
      className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div 
            className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-center text-lg font-bold text-white shadow-lg shadow-orange-200"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            BM
          </motion.div>
          <p className="font-display text-lg font-semibold">Boopana M</p>
        </motion.div>
        <motion.div 
          className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.href} 
              href={link.href} 
              className="transition hover:text-orange-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.a
          href="#contact"
          className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:bg-orange-400 md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgb(249 115 22 / 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Hire me
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Navbar
