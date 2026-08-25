import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function EducationSection({ education }) {
  return (
    <motion.section 
      id="education" 
      className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionTitle eyebrow="Education" title="Academic path" />
      <div className="space-y-4 border-l border-slate-200 pl-4 sm:pl-6">
        {education.map((item, index) => (
          <motion.div 
            key={item.degree} 
            className="card-tilt relative rounded-2xl bg-slate-50 p-4 shadow-sm shadow-slate-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ x: 8, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)", transition: { duration: 0.3 } }}
          >
            <motion.span 
              className="absolute -left-3 top-5 h-3 w-3 rounded-full bg-orange-500"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
            />
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{item.years}</span>
              <span className="font-semibold text-orange-600">{item.score}</span>
            </div>
            <p className="mt-2 font-semibold text-slate-900">{item.degree}</p>
            <p className="text-sm text-slate-600">{item.school}</p>
            {item.coursework && (
              <p className="mt-2 text-xs text-slate-500">Coursework: {item.coursework}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default EducationSection
