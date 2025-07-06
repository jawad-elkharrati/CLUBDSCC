
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';
import Counter from '../components/Counter';
import Layout from '../components/Layout';
import Image from 'next/image';
import { FaRegCalendarAlt, FaUserPlus, FaRocket, FaLightbulb, FaHandshake, FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaFacebook, FaProjectDiagram, FaUsers, FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection'

export default function Home() {
  // Slides displayed in the hero section
  const slides = ['/1.jpg', '/2.jpg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout title="Accueil">
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index]}
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${slides[index]})` }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.8, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-dsccGreen/70" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">L’innovation par la donnée</h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-8">
            Le Club Data Science de l’ENSA s’engage à promouvoir l’apprentissage,
            l’innovation et la collaboration autour de la science des données.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/events" className="bg-dsccOrange hover:bg-white hover:text-dsccOrange text-white font-semibold px-6 py-3 rounded-md transition inline-flex items-center gap-2">
              <span>Nos Événements</span>
              <FaRegCalendarAlt />
            </Link>
            <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccGreen hover:text-white font-semibold px-6 py-3 rounded-md transition inline-flex items-center gap-2">
              <span>Rejoindre le Club</span>
              <FaUserPlus />
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Stats */}
      <AnimatedSection
        id="stats"
        className="relative -mt-20 mb-16 px-4 z-20"
        direction="up"
      >
        <div className="mx-auto grid sm:grid-cols-2 gap-8 max-w-5xl bg-white shadow-2xl rounded-2xl px-8 py-12">
          <Stat icon={FaProjectDiagram} count={14} label="Projets réalisés" />
          <Stat icon={FaUsers} count={80} label="Membres actifs" />
        </div>
      </AnimatedSection>

      {/* Trust */}
      <AnimatedSection id="trust" className="py-20 bg-gray-50" direction="right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ils nous font confiance</h2>
          <div className="overflow-hidden">
            <div className="flex flex-nowrap items-center gap-10 w-max slide-left">
              {Array.from({ length: 50 }, (_, i) => {
                const logos = [FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaFacebook]
                const Icon = logos[i % logos.length]
                return <IconTrust key={i} icon={Icon} />
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>


      {/* About */}
      <AnimatedSection id="about" className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">À propos du club</h2>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Le Club Data Science a pour mission de fournir un environnement d’apprentissage,
            d’entraide et d’innovation dans le domaine de la science des données.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Objective icon={FaLightbulb} title="Innovation"/>
            <Objective icon={FaRocket} title="Apprentissage"/>
            <Objective icon={FaHandshake} title="Collaboration"/>
          </div>
        </div>
      </AnimatedSection>

      {/* Events Preview */}
      <AnimatedSection id="events" className="py-20 bg-lightGray" direction="right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Événements</h2>
          <div className="masonry">
            <EventCard img="/event1.jpg" title="Atelier Machine Learning" tag="Atelier" />
            <EventCard img="/event2.jpg" title="Introduction à Python" tag="Session" />
            <EventCard img="/event3.jpg" title="Live IA" tag="Live" />
            <EventCard img="/event4.jpg" title="Initiation DataViz" tag="Atelier" />
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="text-dsccGreen underline hover:text-dsccOrange inline-flex items-center gap-1">
              <span>Voir tous les événements</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Preview */}
      <AnimatedSection id="projects" className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets du Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard icon="/icons/reco.png" title="Système de Recommandation" />
            <ProjectCard icon="/icons/nlp.png" title="Analyse des Sentiments" />
            <ProjectCard icon="/icons/forecast.png" title="Prédiction de Ventes" />
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="text-dsccGreen underline hover:text-dsccOrange inline-flex items-center gap-1">
              <span>Voir tous les projets</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Preview */}
      <AnimatedSection id="team" className="py-20 bg-lightGray" direction="right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Équipe actuelle</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <TeamCard img="/team/jawad.jpg" name="Jawad Elkharrati" role="Président" />
            <TeamCard img="/team/asmaa.jpg" name="Asmaa Ben Ali" role="Vice‑présidente" />
            <TeamCard img="/team/hamza.jpg" name="Hamza Ouali" role="Secrétaire" />
            <TeamCard img="/team/aya.jpg" name="Aya Karim" role="Trésorière" />
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="text-dsccGreen underline hover:text-dsccOrange inline-flex items-center gap-1">
              <span>Découvrir toute l’équipe</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact" className="py-20 bg-dsccGreen text-white" direction="up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="mb-8">Une question ? Un projet ? Envoyez‑nous un message !</p>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto grid grid-cols-1 gap-4">
            <input type="text" name="name" placeholder="Nom" className="p-3 rounded-md text-darkText" required />
            <input type="email" name="email" placeholder="Email" className="p-3 rounded-md text-darkText" required />
            <textarea name="message" placeholder="Message" rows="4" className="p-3 rounded-md text-darkText" required />
            <button className="bg-dsccOrange hover:bg-white hover:text-dsccOrange font-semibold py-3 rounded-md transition">Envoyer</button>
          </form>
        </div>
      </AnimatedSection>
    </Layout>
  )
}

function Objective({ icon: Icon, title }){
  return (
    <div className="flex flex-col items-center">
      <div className="text-dsccOrange text-5xl mb-4"><Icon /></div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

function EventCard({ img, title, tag }){
  return (
    <motion.div
      className="masonry-item bg-white rounded-lg shadow overflow-hidden"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image src={img} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs uppercase tracking-wider text-dsccOrange">{tag}</span>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
    </motion.div>
  )
}

function ProjectCard({ icon, title }){
  return (
    <motion.div
      className="bg-lightGray rounded-xl p-6 text-center shadow"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image src={icon} alt={title} width={64} height={64} className="mx-auto mb-4" />
      <h4 className="font-semibold">{title}</h4>
    </motion.div>
  )
}

function TeamCard({ img, name, role }){
  return (
    <motion.div
      className="text-center shadow-md rounded-xl p-4"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image src={img} alt={name} width={120} height={120} className="rounded-full mx-auto mb-3 object-cover" />
      <h5 className="font-semibold">{name}</h5>
      <p className="text-sm text-dsccOrange">{role}</p>
    </motion.div>
  )
}


function IconTrust({ icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white shadow rounded-2xl flex items-center justify-center"
    >
      <Icon size={64} className="text-dsccGreen" />
    </motion.div>
  )
}

function Stat({ icon: Icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-dsccGreen/10 text-dsccGreen rounded-full">
        <Icon size={32} />
      </div>
      <span className="text-4xl font-extrabold text-dsccGreen"><Counter to={count} duration={1200} /></span>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  )
}
