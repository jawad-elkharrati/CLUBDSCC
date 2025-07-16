import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ProjectCard({ name, link, desc, ownerName, ownerLinkedIn }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col justify-between bg-white hover:duration-300">
      <div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm mb-6">{desc}</p>
      </div>
      <div className="flex items-center justify-between text-sm mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dsccGreen hover:text-dsccOrange flex items-center gap-1"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        {ownerLinkedIn && ownerName && (
          <a
            href={ownerLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dsccGreen hover:text-dsccOrange flex items-center gap-1"
          >
            <FaLinkedin />
            <span>{ownerName}</span>
          </a>
        )}
      </div>
    </div>
  )
}
