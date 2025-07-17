import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import Image from 'next/image'
import ImageSlider from '../components/ImageSlider'
import Carousel from '../components/Carousel'
import Link from 'next/link'
import {
  FaProjectDiagram,
  FaUsers,
  FaRegCalendarAlt,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaHistory,
  FaArrowRight,
  FaCheckCircle,
  FaObjectGroup
} from 'react-icons/fa'

export default function Page() {
  return (
    <Layout title="À propos">
      {/* Hero */}
      <section className="relative w-full h-96 md:h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url(/1.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">À propos du club</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Depuis 2020, nous réunissons les passionnés de données pour apprendre et innover ensemble.
          </p>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="mx-auto grid sm:grid-cols-4 gap-8 max-w-5xl px-4">
          <Stat icon={FaProjectDiagram} count={14} label="Projets" />
          <Stat icon={FaUsers} count={80} label="Membres" />
          <Stat icon={FaRegCalendarAlt} count={30} label="Événements" />
          <Stat icon={FaRocket} count={4} label="Années" />
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-20 bg-lightGray" direction="left">
        <div className="container mx-auto space-y-24 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image src="/1.jpg" alt="mission" width={600} height={400} className="rounded-lg shadow" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <FaBullseye /> Notre mission
              </h2>
              <p className="max-w-3xl mx-auto md:mx-0 text-lg">
                Promouvoir l'apprentissage de la science des données et favoriser
                une culture de partage au sein de l'ENSA. Nous croyons que la
                collaboration permet à chacun de développer son potentiel.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <Image src="/IMG-20250215-WA0007.jpg" alt="vision" width={600} height={400} className="rounded-lg shadow" />
            </div>
            <div className="text-center md:text-left md:order-1">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <FaRocket /> Notre vision
              </h2>
              <p className="max-w-3xl mx-auto md:mx-0 text-lg">
                Démocratiser les outils de la data science et inspirer une
                nouvelle génération d'innovateurs capable de résoudre les
                défis de demain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image src="/1.jpg" alt="mission" width={600} height={400} className="rounded-lg shadow" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <FaObjectGroup /> Nos valeurs
              </h2>
              <div className="grid">
                <Objective icon={FaLightbulb} className="flex" title="Innovation" />
                <Objective icon={FaRocket} title="Apprentissage" />
                <Objective icon={FaHandshake} title="Collaboration" />
              </div>
            </div>
          </div>

        </div>
      </AnimatedSection>

      {/* Trust */}
      <AnimatedSection className="py-20 bg-white" direction="right">
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


      {/* History */}
      <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <FaHistory /> Un peu d'histoire
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8 text-center">
            Créé en 2020 par quelques passionnés, le club a grandi au fil des
            projets et des événements pour devenir aujourd'hui une communauté
            active et soudée.
          </p>
          <ImageSlider
            images={[
              '/event/Screenshot 2025-07-06 212003.png',
              '/event/Screenshot 2025-07-06 212023.png',
              '/event/Screenshot 2025-07-06 212041.png',
              '/event/Screenshot 2025-07-06 212101.png',
              '/event/Screenshot 2025-07-06 212116.png',
              '/event/Screenshot 2025-07-06 212130.png',
              '/event/Screenshot 2025-07-06 212147.png'
            ]}
          />
          <ImageSlider
            images={[
              '/event/Screenshot 2025-07-06 212211.png',
              '/event/Screenshot 2025-07-06 212230.png',
              '/event/Screenshot 2025-07-06 212254.png',
              '/event/Screenshot 2025-07-06 212342.png',
              '/event/Screenshot 2025-07-06 212407.png',
              '/event/Screenshot 2025-07-06 212420.png',
              '/event/Screenshot 2025-07-06 212446.png'
            ]}
          />
          <Timeline />
        </div>
      </AnimatedSection>

      {/* Activities */}
      <AnimatedSection className="py-20 bg-white" direction="up">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Ce que nous faisons</h2>
          <ul className="grid sm:grid-cols-2 gap-10 text-lg bg-white ">
            <li className="flex items-start gap-2  ">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Organisation d'ateliers techniques et de formations</span>
            </li>
            <li className="flex items-start gap-2  ">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Conférences avec des experts du domaine</span>
            </li>
            <li className="flex items-start gap-2 ">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Participation à des compétitions et datathons</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Accompagnement de projets étudiants innovants</span>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      {/* Why join */}
      <AnimatedSection className="py-20 bg-lightGray" direction="right">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi nous rejoindre&nbsp;?</h2>
          <ul className="mx-auto grid sm:grid-cols-2 gap-10 text-lg">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Développer vos compétences sur des projets concrets</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Échanger avec une communauté passionnée et bienveillante</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Bénéficier d'un réseau d'experts et d'entreprises partenaires</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-dsccOrange mt-1" />
              <span>Contribuer à des initiatives innovantes à fort impact</span>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      {/* Join call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Envie de nous rejoindre&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Rejoignez la communauté et participez à l'aventure data science avec
          nous&nbsp;!
        </p>
        <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
          <span>Rejoindre le club</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
}

function Objective({ icon: Icon, title }) {
  return (
    <div className="flex flex-row justify-start gap-4 items-center py-6 ">
      <div className="text-dsccOrange text-4xl">
        <Icon />
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  )
}

function IconTrust({ src }) {
  return (
    <div className="p-6 bg-white shadow rounded-2xl flex items-center justify-center">
      <Image src={src} alt="logo" width={80} height={80} className="w-20 h-20 object-contain" />
    </div>
  )
}

function Timeline() {
  const steps = [
    { year: '2020', text: 'Création du club par des passionnés', Icon: FaLightbulb },
    { year: '2021', text: 'Premiers ateliers et projets étudiants', Icon: FaProjectDiagram },
    { year: '2023', text: 'Organisation de DatathonX', Icon: FaRocket }
  ]
  return (
    <ol className="relative border-l-2 border-dsccGreen ml-4 my-10">
      {steps.map((s, i) => (
        <li key={i} className="mb-8 ml-6">
          <span className="absolute -left-5 flex items-center justify-center w-10 h-6 bg-dsccGreen rounded-full text-white text-xs">
            {s.year}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <s.Icon className="text-dsccOrange" />
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function Stat({ icon: Icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-dsccGreen/10 text-dsccGreen rounded-full">
        <Icon size={32} />
      </div>
      <span className="text-4xl font-extrabold text-dsccGreen">
        <Counter to={count} duration={1200} />
      </span>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  )
}
