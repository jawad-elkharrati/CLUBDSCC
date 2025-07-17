import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import Link from 'next/link'
import { FaUsers, FaRegCalendarAlt, FaArrowRight } from 'react-icons/fa'

export default function Page() {
  const stats = [
    { icon: FaUsers, count: 80, label: 'Membres actifs' },
    { icon: FaRegCalendarAlt, count: 4, label: 'Années' }
  ]
  return (
    <Layout title="Notre Équipe">
      {/* Hero */}
      <section className="relative w-full h-96 md:h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/2.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Notre équipe</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Des étudiants passionnés réunis autour de la data.</p>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="mx-auto grid sm:grid-cols-2 gap-8 max-w-5xl px-4">
          {stats.map((s, i) => (
            <Stat key={i} {...s} />
          ))}
        </div>
      </AnimatedSection>

      {/* Pilotage team */}
      <AnimatedSection className="py-20 bg-lightGray" direction="left">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Équipe Pilotage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pilotageTeam.map(m => (
              <div key={m.name} className="text-center">
                <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-2 relative overflow-hidden">
                  <img src={`/team/${m.img}`} alt={m.name} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 bg-dsccGreen text-white p-2 text-sm transition text-center">
                    {quotesByRole[m.role]}
                  </div>
                </div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Responsables team */}
      <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Équipe Responsables</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {responsableTeam.map(m => (
              <div key={m.name} className="text-center">
                <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-2 relative overflow-hidden">
                  <img src={`/team/${m.img}`} alt={m.name} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 bg-dsccGreen text-white p-2 text-sm transition text-center">
                    {quotesByRole[m.role]}
                  </div>
                </div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Join call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Envie de rejoindre l'équipe&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">Nous recrutons chaque année de nouveaux membres motivés.</p>
        <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
          <span>Postuler</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
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

const quotesByRole = {
  'Président': 'Diriger pour innover.',
  'Vice-Présidente': "Toujours à l'écoute.",
  'Secrétaire': 'Organiser pour avancer.',
  'Trésorière': 'Gérer pour prospérer.',
  'Responsable RH': 'Valoriser notre équipe.',
  'Responsable Design': "L'esthétique avant tout.",
  'Responsable Maison de Science': 'Cultiver la connaissance.',
  'Responsable Média': 'Partager notre passion.',
  'Responsable Montage': 'Donner vie aux images.',
  'Responsable Logistique': 'Tout est dans les détails.',
  'Responsable Compétition': 'Toujours prêt pour le défi.',
  'Responsable Journée': 'Chaque année une empreinte.',
  'Responsable Sponsoring': 'Trouver nos alliés.',
  'Responsable Rédaction': 'Écrire pour informer.',
  'Responsable Formation': 'Apprendre pour grandir.'
}

const pilotageTeam = [
  { name: 'Jawad Elkharrati', role: 'Président', img: 'jawad.JPG' },
  { name: 'Aya El Farssia', role: 'Vice-Présidente', img: 'aya.jpeg' },
  { name: 'Hanae Cherif', role: 'Secrétaire', img: 'hanae.jpg' },
  { name: 'Oumaima Sahli', role: 'Trésorière', img: 'oumaima.jpeg' },
  { name: 'Iyad Beddidi', role: 'Responsable RH', img: 'iyad.jpeg' },
]

const responsableTeam = [
  { name: 'El Wazani Mohamed', role: 'Responsable Design', img: 'jawad.JPG' },
  { name: 'Houciene Benhaddou', role: 'Responsable Maison de Science', img: 'houcein.jpg' },
  { name: 'Safae Azizi', role: 'Responsable Média', img: 'safae.jpeg' },
  { name: 'Jinane Ait Elabd', role: 'Responsable Montage', img: 'jinane.png' },
  { name: 'Mostafa Alaoui', role: 'Responsable Logistique', img: 'mustafa.jpg' },
  { name: 'Amine Chakri', role: 'Responsable Compétition', img: 'amine.jpg' },
  { name: 'EL MOUSSAOUI Oussama', role: 'Responsable Journée', img: 'oussama.jpg' },
  { name: 'Badreddine Chihab', role: 'Responsable Sponsoring', img: 'badr.jpeg' },
  { name: 'Wafae Zalouk', role: 'Responsable Rédaction', img: 'wafae.jpg' },
  { name: 'Zakaria Taibi', role: 'Responsable Formation', img: 'zakaria.jpg' },
]
