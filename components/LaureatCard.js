import { FaLinkedin } from 'react-icons/fa'

export default function LaureatCard({ img, name, role, linkedin }) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="h-32 w-32 rounded-full overflow-hidden mb-2 bg-gray-200">
        <img src={img} alt={name} className="object-cover w-full h-full" />
      </div>
      <p className="font-semibold">{name}</p>
      {role && (
        <p className="text-sm text-gray-500 whitespace-pre-line">{role}</p>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dsccGreen hover:text-dsccOrange text-2xl mt-2"
        >
          <FaLinkedin />
        </a>
      )}
    </div>
  )
}
