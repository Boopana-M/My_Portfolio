import { motion } from 'framer-motion'
import AboutSection from './components/AboutSection'
import AnimatedBackground from './components/AnimatedBackground'
import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HighlightsSection from './components/HighlightsSection'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import ScrollProgressBar from './components/ScrollProgressBar'
import SkillsSection from './components/SkillsSection'
import {
  achievements,
  codingProfiles,
  contact,
  education,
  heroTraits,
  navLinks,
  projects,
  certifications,
  skills,
} from './data/content'

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Animated mesh background */}
        <div className="mesh-bg" />
        <AnimatedBackground />
        <ScrollProgressBar />
      
      {/* Floating orbs */}
      <motion.div 
        className="fixed top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="fixed bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <Navbar navLinks={navLinks} contactEmail={contact.email} />
      <Hero heroTraits={heroTraits} contact={contact} />
      <motion.main 
        className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-16 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AboutSection contact={contact} />
        <SkillsSection skills={skills} />
        <EducationSection education={education} />
        <ProjectsSection projects={projects} />
        <HighlightsSection
          achievements={achievements}
          codingProfiles={codingProfiles}
          certifications={certifications}
        />
        <ContactSection contact={contact} />
      </motion.main>
      <Footer />
      </div>
    </>
  )
}

export default App
