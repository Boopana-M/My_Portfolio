import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionTitle from './SectionTitle'

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e) => {
    if (!isHovered) return

    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      className="group h-full rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5 shadow-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(249, 115, 22, 0.1), transparent 40%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <motion.span 
            className="rounded-full bg-orange-100 px-3 py-1 text-orange-600 font-semibold"
            whileHover={{ scale: 1.1 }}
          >
            {project.tag}
          </motion.span>
          <span>{project.timeframe}</span>
        </div>
        <motion.h3 
          className="mt-3 font-display text-xl font-semibold text-slate-900"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.title}
        </motion.h3>
        <p className="mt-2 text-sm text-slate-600">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
          {project.stack.map((item, i) => (
            <motion.span 
              key={item} 
              className="rounded-full bg-white px-3 py-1 shadow-sm shadow-slate-200"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
              whileHover={{ scale: 1.15, backgroundColor: "rgb(254 243 199)" }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-indigo-400/20 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.article>
  )
}

function ProjectsSection({ projects }) {
  return (
    <motion.section 
      id="projects" 
      className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionTitle eyebrow="Projects" title="Things I built" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectsSection
