import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import LaureatCard from '../components/LaureatCard'
import Carousel from '../components/Carousel'

export default function Page() {
  const [drives, setDrives] = useState([])
  const [laureats, setLaureats] = useState([])
  const mid = Math.ceil(laureats.length / 2)
  const firstHalf = laureats.slice(0, mid)
  const secondHalf = laureats.slice(mid)

  useEffect(() => {
    fetch('/api/drives')
      .then((res) => res.json())
      .then((data) => setDrives(data))
      .catch(() => {})
    fetch('/api/laureats')
      .then((res) => res.json())
      .then((data) => setLaureats(data))
      .catch(() => {})
  }, [])
  return (
    <Layout title="Ressources">
      {/* Hero */}
      <section className="relative w-full h-96 md:h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/1.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Ressources</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Accédez directement à nos documents partagés sur Google Drive.</p>
        </div>
      </section>

      {/* Resources */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="bg-dsccGreen/5 p-8 rounded-lg left md:text-center h-full w-full">
              <h2 className="text-3xl font-bold mb-4 text-left md:text-center">Outils recommandés</h2>
              <ul className="pl-5 space-y-1 max-w-md mx-auto md:mx-0">
                <li>
                  <a href="https://www.python.org/downloads/" className="text-dsccGreen underline inline-flex items-center gap-2">
                    Python
                    <FaArrowRight/>
                  </a>
                </li>
                <li>
                  <a href="https://code.visualstudio.com/" className="text-dsccGreen underline inline-flex items-center gap-2">
                    Visual Studio Code
                    <FaArrowRight/>
                  </a>
                </li>
                <li>
                  <a href="https://jupyter.org/install" className="text-dsccGreen underline inline-flex items-center gap-2">
                    Jupyter Notebook
                    <FaArrowRight/>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-dsccGreen/5 p-8 rounded-lg left md:text-center">
              <h2 className="text-3xl font-bold mb-4 left md:text-center">Accès aux Drives du Club</h2>
              <p className="mb-6">Retrouvez toutes nos ressources partagées sur Google Drive.</p>
              <ul className="space-y-2">
                {drives.map((d, i) => (
                  <li key={i}>
                    <a href={d.link} className="text-dsccGreen underline inline-flex items-center gap-2">
                      <span>{d.title}</span>
                      <FaArrowRight />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Laureats */}
      <AnimatedSection id="laureats" className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos lauréats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Carousel>
              {firstHalf.map((l, i) => (
                <LaureatCard key={i} {...l} />
              ))}
            </Carousel>
            <Carousel>
              {secondHalf.map((l, i) => (
                <LaureatCard key={i} {...l} />
              ))}
            </Carousel>
          </div>
        </div>
      </AnimatedSection>

      {/* Call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Vous avez une ressource à partager&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">Contribuez à l'enrichissement de notre bibliothèque.</p>
        <Link href="/contact" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
          <span>Nous contacter</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
  }

