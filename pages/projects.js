import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useState, useEffect } from 'react'
import { db } from '../lib/firebase'

export default function Page(){
  const [customProjects, setCustomProjects] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('customProjects')
    if (stored) setCustomProjects(JSON.parse(stored))
    const fetchProjects = async () => {
      try {
        const { getDocs, collection } = await import('firebase/firestore')
        const snap = await getDocs(collection(db, 'projects'))
        const firebaseProjects = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        setCustomProjects(prev => [...prev, ...firebaseProjects])
      } catch (err) {
        // ignore if firestore unavailable
      }
    }
    fetchProjects()
  }, [])

  const allProjects = [...projects, ...customProjects]

  return (
    <Layout title="Projets">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/2.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Nos projets</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Découvrez quelques réalisations menées par nos membres.
          </p>
        </div>
      </section>
      {/* Projects */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets du Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allProjects.map((p, idx) => (
              <ProjectCard key={idx} {...p} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Join call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Envie de contribuer&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Rejoignez le club et participez au développement de projets innovants.
        </p>
        <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded inline-flex items-center gap-2 transition">
          <span>Rejoindre le club</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
}

