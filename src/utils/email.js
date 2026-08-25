import emailjs from '@emailjs/browser'

export async function sendContactEmail({ name, email, phone, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service not configured. Missing env vars.')
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    phone,
    message,
  }

  return emailjs.send(serviceId, templateId, templateParams, { publicKey })
}
