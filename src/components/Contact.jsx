import { useState } from 'react'
import { Mail, Linkedin, Facebook, ArrowUpRight } from 'lucide-react'
import { FaViber, FaTelegramPlane } from 'react-icons/fa'
import './Contact.css'

const CONTACT_EMAIL = 'carmonas.bscs@gmail.com'
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`
const CONTACT_LINKS = [
  { icon: Mail, label: CONTACT_EMAIL, href: GMAIL_COMPOSE_URL },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
  { icon: FaTelegramPlane, label: 'Telegram', href: 'https://t.me/...' },
  { icon: FaViber, label: 'Viber', href: 'viber://add?number=639945950803' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/...' },
]


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    )
   
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`
    const win = window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    if (!win) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <div className="eyebrow contact__eyebrow">Contact</div>
          <h2 className="contact__title">
            Let's help your business run more smoothly.
          </h2>
          <p className="contact__sub">
            Tell me about your business and the support you're looking for. 
            I'll get back to you within one business day to discuss how I can help.
          </p>

          <div className="contact__links">
            {CONTACT_LINKS.map((l) => (
              <a
                className="contact__link"
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <l.icon size={17} />
                {l.label}
                <ArrowUpRight size={14} className="contact__link-arrow" />
              </a>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </label>

          <label className="field">
            <span>How can I help?</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your business, the tasks you need help with, and any specific requirements..."
            />
          </label>

          <button type="submit" className="btn btn-primary contact__submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}