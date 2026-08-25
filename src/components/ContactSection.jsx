import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { sendContactEmail } from '../utils/email'

function ContactSection({ contact }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async () => {
    try {
      setStatus({ state: 'sending', msg: 'Sending…' })
      await sendContactEmail(form)
      setStatus({ state: 'sent', msg: 'Message sent successfully!' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      // Fallback: open mail client if service not configured
      const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Portfolio Contact from ' + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`)}`
      try {
        window.location.href = mailto
        setStatus({ state: 'error', msg: 'Opening your mail client (service not configured).' })
      } catch {
        setStatus({ state: 'error', msg: err.message || 'Failed to send. Check configuration.' })
      }
    }
  }

  return (
    <motion.section 
      id="contact" 
      className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionTitle eyebrow="Contact" title="Get in touch" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-700">
          <motion.p 
            className="text-base font-semibold text-slate-900"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let&apos;s collaborate
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m available for internships, freelance work, or project collabs. Drop a line and I&apos;ll reply quickly.
          </motion.p>
          <motion.div 
            className="rounded-xl bg-slate-50 p-4 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-slate-500">Email</p>
            <p className="font-semibold text-slate-900">{contact.email}</p>
          </motion.div>
          <motion.div 
            className="rounded-xl bg-slate-50 p-4 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-slate-500">Phone</p>
            <p className="font-semibold text-slate-900">{contact.phone}</p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-3 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="pill border border-orange-200 text-orange-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href={contact.github} 
              target="_blank" 
              rel="noreferrer" 
              className="pill border border-slate-300 text-slate-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </motion.div>
        </div>

        <motion.form 
          className="space-y-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.input 
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-inner placeholder:text-slate-400 focus:border-orange-400 focus:outline-none" 
            placeholder="Name"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input 
            name="email"
            value={form.email}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-inner placeholder:text-slate-400 focus:border-orange-400 focus:outline-none" 
            placeholder="Email"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input 
            name="phone"
            value={form.phone}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-inner placeholder:text-slate-400 focus:border-orange-400 focus:outline-none" 
            placeholder="Phone"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea 
            name="message"
            value={form.message}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-inner placeholder:text-slate-400 focus:border-orange-400 focus:outline-none" 
            rows="4" 
            placeholder="Message"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="button"
            onClick={onSubmit}
            disabled={status.state === 'sending'}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition disabled:opacity-60"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {status.state === 'sending' ? 'Sending…' : 'Submit'}
          </motion.button>
          {status.state !== 'idle' && (
            <p className={`text-sm ${status.state === 'sent' ? 'text-green-600' : status.state === 'error' ? 'text-red-600' : 'text-slate-600'}`}>{status.msg}</p>
          )}
        </motion.form>
      </div>
    </motion.section>
  )
}

export default ContactSection
