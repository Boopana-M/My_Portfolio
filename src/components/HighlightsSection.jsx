import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function HighlightsSection({ achievements, codingProfiles, certifications }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div 
        className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionTitle eyebrow="Achievements" title="Highlights" />
        <ul className="space-y-3 text-sm text-slate-700">
          {achievements.map((item, index) => (
            <motion.li 
              key={item} 
              className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 8, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", transition: { duration: 0.2 } }}
            >
              <motion.span 
                className="mt-1 h-2 w-2 rounded-full bg-orange-500"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="space-y-6">
        <motion.div 
          className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <SectionTitle eyebrow="Coding" title="Profiles" />
          <div className="space-y-3">
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 shadow-sm hover:ring-1 hover:ring-orange-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div>
                  <p className="font-semibold text-slate-900">{profile.platform}</p>
                  <p className="text-xs text-slate-600">{profile.detail}</p>
                </div>
                <span className="text-xs font-semibold text-orange-500">{profile.handle}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <SectionTitle eyebrow="Certifications" title="Upskilling" />
          <ul className="space-y-2 text-sm text-slate-700">
            {certifications.map((item, index) => (
              <motion.li 
                key={item} 
                className="rounded-lg bg-slate-50 px-3 py-2 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ x: 8, backgroundColor: "rgb(248 250 252)", transition: { duration: 0.2 } }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default HighlightsSection
