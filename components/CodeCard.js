import { useState } from 'react'
import { FaCopy } from 'react-icons/fa'

export default function CodeCard({ children }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative bg-lightGray dark:bg-darkText/20 rounded-md p-4 font-mono text-sm overflow-x-auto">
      <pre className="whitespace-pre">{children}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-gray-500 hover:text-dsccOrange"
        aria-label="Copier le code"
      >
        {copied ? 'Copié !' : <FaCopy />}
      </button>
    </div>
  )
}
