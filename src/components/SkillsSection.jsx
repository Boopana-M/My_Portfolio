import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function SkillsSection({ skills }) {
  return (
    <motion.section 
      id="skills" 
      className="rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-6 text-white shadow-2xl shadow-indigo-200/50 ring-1 ring-indigo-200/40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionTitle eyebrow="Skills" title="Abilities" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <motion.div 
            key={group.title} 
            className="card-tilt rounded-2xl bg-white/10 p-4 shadow-md backdrop-blur"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <p className="text-sm font-semibold text-orange-200">{group.title}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {group.items.map((item, i) => (
                <motion.span 
                  key={item} 
                  className="rounded-full bg-white/15 px-3 py-1 text-white shadow-sm shadow-indigo-900/30"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default SkillsSection
