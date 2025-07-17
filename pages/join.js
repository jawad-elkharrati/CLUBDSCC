import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import { FaEnvelope } from 'react-icons/fa'

export default function Page(){
  return (
    <Layout title="Rejoindre">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url(/2.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Rejoindre le Club</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Rejoins la communauté DSCC et participe à nos projets passionnants autour de la data.
          </p>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white" direction="down">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-6">Tu souhaites explorer la data science avec nous ? Remplis le formulaire de contact et rejoins la communauté&nbsp;!</p>
          <a
            href="https://docs.google.com/forms/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dsccOrange text-white px-6 py-3 rounded inline-flex items-center gap-2"
          >
            <span>Contact</span>
            <FaEnvelope />
          </a>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
