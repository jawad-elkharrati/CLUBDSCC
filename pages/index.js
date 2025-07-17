
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';
import Counter from '../components/Counter';
import Layout from '../components/Layout';
import Image from 'next/image';
import {
  FaRegCalendarAlt,
  FaUserPlus,
  FaLightbulb,
  FaHandshake,
  FaUserGraduate,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaProjectDiagram,
  FaUsers,
  FaArrowRight
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  // Slides displayed in the hero section
  const slides = ['/1.jpg', '/2.jpg'];
  const [index, setIndex] = useState(0);

  const eventCards = [
    {
      img: '/cards/data%20for%20impact.png',
      title: 'Data for Impact',
      tag: 'Atelier',
      desc: "Découvrir comment exploiter les données pour générer un impact positif."
    },
    {
      img: '/cards/introduction%20%C3%A0%20python.png',
      title: 'Introduction à Python',
      tag: 'Session',
      desc: "Une initiation pratique au langage Python pour bien débuter.",
      link: '/python-lessons'
    },
    {
      img: '/cards/mentorship%20fridays.png',
      title: 'Mentorship Fridays',
      tag: 'Meetup',
      desc: "Des rencontres hebdomadaires pour échanger avec des mentors."
    },
    {
      img: '/cards/voices%20talk.png',
      title: 'Voices Talk',
      tag: 'Talk',
      desc: "Des intervenants partagent leurs expériences et visions de la data."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout title="Accueil">
      
      {/* Hero */}
      <section className="relative w-full h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[index]}
            className="absolute inset-0 bg-cover bg-center opacity-80 "
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
            <Link href="/events" className="bg-dsccOrange hover:bg-white hover:text-dsccOrange text-white font-semibold px-6 py-3 rounded-full transition inline-flex items-center gap-2">
              <span>Nos Événements</span>
              <FaRegCalendarAlt />
            </Link>
            <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccGreen hover:text-white font-semibold px-6 py-3 rounded-full transition inline-flex items-center gap-2">
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
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">Ils nous font confiance</h2>
          <div className="overflow-hidden pb-2">
            <div className="flex flex-nowrap items-center gap-10 w-max sponsor-scroll">
              {Array.from({ length: 50 }, (_, i) => {
                const logos = [
                  '/sponsors/1631326041576.jfif',
                  '/sponsors/49-1120_company_import.jpg',
                  '/sponsors/Assabah-logo.jpg',
                  '/sponsors/COMMUNE-OUJDA-LOGO-01.png',
                  '/sponsors/Cerhso.jpg',
                  '/sponsors/ENSA Oujda.png',
                  '/sponsors/Screenshot 2025-07-06 204840.png',
                  '/sponsors/Societe-Generale-Emploi-Recrutement.png',
                  '/sponsors/images (1).jfif',
                  '/sponsors/images.png',
                  '/sponsors/unnamed.png'
                ]
                const src = logos[i % logos.length]
                return <IconTrust key={i} src={src} />
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>


      {/* About */}
      <AnimatedSection id="about" className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">À propos du club</h2>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Le Club Data Science a pour mission de fournir un environnement d’apprentissage,
            d’entraide et d’innovation dans le domaine de la science des données.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Objective icon={FaLightbulb} title="Innovation"/>
            <Objective icon={FaUserGraduate} title="Apprentissage"/>
            <Objective icon={FaHandshake} title="Collaboration"/>
          </div>
        </div>
      </AnimatedSection>

      
      {/* Events Preview */}
      <AnimatedSection id="events" className="py-20 bg-lightGray" direction="right">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Événements</h2>
          <div className="masonry grid drid-cols-1 sm:grid-cols-2 gap-6">
            {eventCards.map(evt => (
              <EventCard key={evt.title} {...evt} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="text-dsccGreen bg-white py-2 px-4 rounded-full hover:text-dsccOrange inline-flex items-center gap-1 hover:gap-3 hover:duration-75">
              <span>Voir tous les événements</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      
      {/* Projects Preview */}
      <AnimatedSection id="projects" className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets du Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((p, idx) => (
              <ProjectCard key={idx} {...p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects" className="text-dsccGreen bg-lightGray py-2 px-4 rounded-full hover:text-dsccOrange inline-flex items-center gap-1 hover:gap-3 hover:duration-75">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center max-w-5xl mx-auto">
            <TeamCard img="/team/jawad.jpg" name="Jawad Elkharrati" role="Président" />
            <TeamCard img="/team/aya.jpg" name="Aya El Farssia" role="Vice‑présidente" />
            <TeamCard img="/team/hamza.jpg" name="Hanae Cherif" role="Secrétaire" />
            <TeamCard img="/team/asmaa.jpg" name="Oumaima Sahli" role="Trésorière" />
            <TeamCard img="/team/Iyad.jpg" name="Iyad Beddidi" role="Résponsable RH" />
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="text-dsccGreen bg-white py-2 px-4 rounded-full hover:text-dsccOrange inline-flex items-center gap-1 hover:gap-3 hover:duration-75">
              <span>Découvrir toute l’équipe</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      
      {/* Contact */}
      <AnimatedSection id="contact" className=" bg-dsccGreen text-white" direction="up" delay={0.2}>
        <div className="container items-center grid gap-14 grid-flow-row mx-auto px-4 max-w-5xl lg:grid-cols-2 lg:grid-flow-col py-40">
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

          <div className="container mx-auto text-center h-[27rem] flex flex-col lg:gap-32">
            <h2 className="text-3xl font-bold mb-8">Réseaux sociaux</h2>
            <div className="flex justify-center flex-wrap gap-6">
              <SocialIcon
                href="https://www.instagram.com/clubdscc/"
                icon={FaInstagram}
              />
              <SocialIcon
                href="https://ma.linkedin.com/company/club-data-science-cloud-computing"
                icon={FaLinkedin}
              />
              <SocialIcon
                href="https://github.com/jawad-elkharrati/"
                icon={FaGithub}
              />
              <SocialIcon
                href="https://www.facebook.com/clubdscc/"
                icon={FaFacebook}
              />
            </div>
          </div>
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

function EventCard({ img, title, tag, desc, link }){
  const content = (
    <div
      className="masonry-item bg-white rounded-lg shadow hover:shadow-lg overflow-hidden hover:duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image src={img} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-1">
        <span className="text-xs uppercase tracking-wider text-dsccOrange">{tag}</span>
        <h4 className="text-lg font-semibold">{title}</h4>
        {desc && <p className="text-sm text-gray-600">{desc}</p>}
      </div>
    </div>
  )
  return link ? <Link href={link}>{content}</Link> : content
}


function TeamCard({ img, name, role }){
  return (
    <motion.div
      className="bg-white dark:bg-darkText text-center shadow-lg rounded-2xl p-6 transition-shadow hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image src={img} alt={name} fill className="rounded-full object-cover ring-4 ring-dsccGreen" />
      </div>
      <h5 className="font-semibold text-lg">{name}</h5>
      <p className="text-sm text-dsccOrange">{role}</p>
    </motion.div>
  )
}


function IconTrust({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white shadow rounded-2xl flex items-center justify-center"
    >
      <Image src={src} alt="logo" width={80} height={80} className="w-20 h-20 object-contain" />
    </motion.div>
  )
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl p-4 rounded-full bg-white text-dsccGreen 
      hover:bg-dsccOrange hover:text-white transition hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.3 }}
    >
      <Icon />
    </motion.a>
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
