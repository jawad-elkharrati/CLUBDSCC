import { motion } from 'framer-motion'
import Link from 'next/link'
import Counter from '../components/Counter'
import Layout from '../components/Layout'
import Image from 'next/image'
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
import Carousel from '../components/Carousel'
import { projects } from '../data/projects'
import { extractKeyword } from '../lib/extractKeyword'

export default function Home() {

  const eventCards = [
    { img: '/cards/data%20for%20impact.png', title: 'Data for Impact' },
    {
      img: '/cards/introduction%20%C3%A0%20python.png',
      title: 'Introduction à Python',
      link: '/python-lessons'
    },
    { img: '/cards/mentorship%20fridays.png', title: 'Mentorship Fridays' },
    { img: '/cards/voices%20talk.png', title: 'Voices Talk' }
  ]


  return (
    <Layout title="Accueil">
      
      {/* Hero */}
      <section className="relative w-full h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url(/1.jpg)' }}
        />
        
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
          <Carousel autoScroll duration={30}>
            {[
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
            ].map((src, i) => (
              <IconTrust key={i} src={src} />
            ))}
          </Carousel>
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
            {eventCards.map((c, i) => {
              const img = (
                <img
                  src={c.img}
                  alt={extractKeyword(c.title)}
                  className="w-full max-w-xs mx-auto rounded-lg shadow hover:shadow-lg transition"
                />
              )
              return c.link ? (
                <Link key={i} href={c.link} className="masonry-item">
                  {img}
                </Link>
              ) : (
                <div key={i} className="masonry-item">
                  {img}
                </div>
              )
            })}
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
            <TeamCard
              img="/team/jawad.JPG"
              name="Jawad Elkharrati"
              role="Président"
              link="https://www.linkedin.com/in/jawad-elkharrati/"
            />
            <TeamCard
              img="/team/aya.jpeg"
              name="Aya El Farssia"
              role="Vice‑présidente"
              link="https://ma.linkedin.com/in/aya-el-fassi-3a451b1b9"
            />
            <TeamCard
              img="/team/hanae.jpg"
              name="Hanae Cherif"
              role="Secrétaire"
              link="https://ma.linkedin.com/in/hanae-cherif-31b218344"
            />
            <TeamCard
              img="/team/oumaima.jpeg"
              name="Oumaima Sahli"
              role="Trésorière"
              link="https://ma.linkedin.com/in/sahli-oumaima-b8ab8831b"
            />
            <TeamCard img="/team/iyad.jpeg" name="Iyad Beddidi" role="Résponsable RH" />
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



function TeamCard({ img, name, role, link }) {
  const Card = (
    <motion.div
      className="bg-white dark:bg-darkText text-center shadow-lg rounded-2xl p-6 transition-shadow hover:shadow-xl w-56 h-64 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-dsccGreen">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <h5 className="font-semibold text-lg">{name}</h5>
      <p className="text-sm text-dsccOrange">{role}</p>
    </motion.div>
  )

  return link ? (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      whileHover={{ scale: 1.05 }}
    >
      {Card}
    </motion.a>
  ) : (
    Card
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
