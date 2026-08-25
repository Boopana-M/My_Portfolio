import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function ExperienceSection({ experience }) {
  return (
    <motion.section
      id="experience"
      className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionTitle eyebrow="Experience" title="Where I have contributed" />
      <div className="space-y-4 border-l border-slate-200 pl-4 sm:pl-6">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            className="relative rounded-2xl bg-slate-50 p-4 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ x: 8, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          >
            <span className="absolute -left-3 top-5 h-3 w-3 rounded-full bg-orange-500" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-slate-900">{item.role} · {item.company}</h3>
              <span className="text-xs font-semibold text-orange-600">{item.timeframe}</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default ExperienceSection
