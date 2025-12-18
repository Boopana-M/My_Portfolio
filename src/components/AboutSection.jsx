import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import MagneticButton from './MagneticButton'
import CountUpAnimation from './CountUpAnimation'

function AboutSection({ contact }) {
  return (
    <motion.section 
      id="about" 
      className="rounded-3xl bg-white/90 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionTitle eyebrow="About" title="Get to know me" />
      
      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.div 
          className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl font-bold text-orange-600">
            <CountUpAnimation value={5} suffix="+" />
          </div>
          <div className="text-xs text-slate-600 mt-1">Projects</div>
        </motion.div>
        <motion.div 
          className="text-center p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl font-bold text-indigo-600">
            <CountUpAnimation value={8} suffix="+" />
          </div>
          <div className="text-xs text-slate-600 mt-1">Technologies</div>
        </motion.div>
        <motion.div 
          className="text-center p-4 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-3xl font-bold text-pink-600">
            <CountUpAnimation value={100} suffix="%" />
          </div>
          <div className="text-xs text-slate-600 mt-1">Dedication</div>
        </motion.div>
      </div>

      <div className="space-y-3 text-base text-slate-600">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I am a full-stack enthusiast who enjoys pairing clear UX with solid engineering. Currently exploring MERN, AI-backed features, and performance-friendly UI systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I love building quick demos, polishing production flows, and collaborating with teams who care about accessibility and speed.
          </motion.p>
          <div className="grid gap-3 sm:grid-cols-2">
            <motion.div 
              className="rounded-xl bg-slate-50 p-3 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="text-slate-500">Email</p>
              <p className="font-semibold text-slate-800">{contact.email}</p>
            </motion.div>
            <motion.div 
              className="rounded-xl bg-slate-50 p-3 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="text-slate-500">Location</p>
              <p className="font-semibold text-slate-800">Coimbatore, India</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <MagneticButton
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300 transition relative overflow-hidden group"
              onClick={() => window.location.href = `mailto:${contact.email}`}
            >
              <span className="relative z-10">Resume / Contact</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>
          </motion.div>
        </div>
    </motion.section>
  )
}

export default AboutSection
