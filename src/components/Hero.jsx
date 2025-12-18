import { motion } from 'framer-motion'
import TypingEffect from './TypingEffect'

function Hero({ heroTraits, contact }) {

  return (
    <header id="home" className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <motion.div 
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-cyan-600 border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <motion.span 
            className="h-2 w-2 rounded-full bg-orange-500"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Crafting clear, usable experiences
        </motion.div>
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <p className="text-lg text-slate-700">Hi there,</p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            I&apos;m <motion.span 
              className="text-gradient-animate font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Boopana
            </motion.span> M
          </h1>
          <p className="text-xl font-semibold text-slate-700">
            I am into <span className="text-orange-500">
              <TypingEffect texts={heroTraits} typingSpeed={80} deletingSpeed={50} pauseDuration={1500} />
            </span>
          </p>
        </motion.div>
        <motion.p 
          className="max-w-2xl text-base text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Full-stack learner building web apps, AI-driven prototypes, and clean UI. Based in Coimbatore and open for internships or freelance collaborations.
        </motion.p>
        <motion.div 
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <motion.a
            href="#about"
            className="btn-shine rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/30 transition hover:shadow-cyan-500/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <motion.span 
              className="pill"
              whileHover={{ scale: 1.05 }}
            >
              Coimbatore, India
            </motion.span>
            <motion.span 
              className="pill"
              whileHover={{ scale: 1.05 }}
            >
              Open to work
            </motion.span>
          </div>
        </motion.div>
        <motion.div 
          className="flex flex-wrap gap-3 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="pill border-orange-200 text-orange-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href={contact.github} 
            target="_blank" 
            rel="noreferrer" 
            className="pill border-slate-300 text-slate-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a 
            href="tel:+918148016372" 
            className="pill border-indigo-200 text-indigo-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Call {contact.phone}
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Profile Card */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="relative rounded-3xl bg-gradient-to-br from-orange-100 via-pink-50 to-indigo-100 p-8 shadow-2xl"
          animate={{
            boxShadow: [
              "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              "0 25px 50px -12px rgb(249 115 22 / 0.25)",
              "0 20px 25px -5px rgb(0 0 0 / 0.1)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Floating particles around profile */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-orange-400"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-indigo-400"
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-pink-400"
            animate={{
              x: [0, 10, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />

          {/* Profile content */}
          <div className="relative z-10 space-y-6 text-center">
            <motion.div
              className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-indigo-500 p-1 shadow-xl"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-indigo-600">
                BM
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900">Full-Stack Developer</h3>
              <p className="text-sm text-slate-600 mt-2">Building the future, one line at a time</p>
            </motion.div>

            <motion.div
              className="flex justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {['⚡', '🚀', '💡', '🎨'].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

    </header>
  )
}

export default Hero
