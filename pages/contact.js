import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import { FaPaperPlane, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useState } from 'react'

export default function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMsg = { name, email, message: msg }
    const stored = localStorage.getItem('contactMessages')
    const messages = stored ? JSON.parse(stored) : []
    messages.push(newMsg)
    localStorage.setItem('contactMessages', JSON.stringify(messages))
    setName('')
    setEmail('')
    setMsg('')
    setSent(true)
  }

  return (
    <Layout title="Contact">
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/2.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Contact</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Nous sommes à votre écoute.</p>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {sent && <p className="text-green-600">Message envoyé !</p>}
            <input
              required
              placeholder="Nom"
              className="border p-2 w-full rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="border p-2 w-full rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              required
              placeholder="Message"
              className="border p-2 w-full rounded h-32"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button type="submit" className="bg-dsccOrange text-white px-4 py-2 rounded inline-flex items-center gap-2">
              <span>Envoyer</span>
              <FaPaperPlane />
            </button>
          </form>
          <div>
            <div className="w-full h-64 mb-4">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-6.852!3d33.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76bad1cd!2sENSA!5e0!3m2!1sfr!2sma!4v000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/place/ENSA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dsccGreen underline inline-flex items-center gap-1 mb-4"
            >
              Ouvrir la carte
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/clubdscc/"
                className="text-dsccGreen underline inline-flex items-center gap-1"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://ma.linkedin.com/company/club-data-science-cloud-computing"
                className="text-dsccGreen underline inline-flex items-center gap-1"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/jawad-elkharrati/"
                className="text-dsccGreen underline inline-flex items-center gap-1"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
