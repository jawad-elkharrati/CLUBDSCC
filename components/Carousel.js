import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Carousel({ children, interval = 5000 }) {
  const slides = React.Children.toArray(children)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(id)
  }, [slides.length, interval])

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex(i => (i + 1) % slides.length)

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-dsccGreen rounded-full p-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-dsccGreen rounded-full p-2"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  )
}
