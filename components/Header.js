import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import DarkModeToggle from './DarkModeToggle'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-5 z-50 mx-4">
      <div className="container flex items-center justify-between px-6 relative 
      shadow-md backdrop-blur bg-white/70 dark:bg-darkText/70 
      max-w-5xl mx-auto rounded-full">
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer">
            <Image src="/logopng.png" alt="DSCC logo" width={65} height={65} className="bg-transparent" />
          </span>
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 md:gap-4 items-center text-sm dark:text-white md:static absolute top-full left-0 w-full md:w-auto bg-white dark:bg-darkText md:bg-transparent md:dark:bg-transparent shadow md:shadow-none p-4 md:p-0`}
        >
          <Link href="/about" className="hover:text-dsccGreen transition whitespace-nowrap">À propos</Link>
          <Link href="/events" className="hover:text-dsccGreen transition whitespace-nowrap">Événements</Link>
          <Link href="/projects" className="hover:text-dsccGreen transition whitespace-nowrap">Projets</Link>
          <Link href="/datathonx" className="hover:text-dsccGreen transition whitespace-nowrap">DatathonX</Link>
          <Link href="/team" className="hover:text-dsccGreen transition whitespace-nowrap">Équipe</Link>
          <Link href="/resources" className="hover:text-dsccGreen transition whitespace-nowrap">Ressources</Link>
          <Link href="/contact" className="flex items-center bg-dsccOrange text-white px-4 py-2 rounded-full hover:bg-dsccGreen transition whitespace-nowrap">
            <span>Contact</span>
            <FaEnvelope className="ml-1" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
