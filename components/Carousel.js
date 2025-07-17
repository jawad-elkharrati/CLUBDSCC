import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Carousel({ children }) {
  const slides = React.Children.toArray(children)
  const [width, setWidth] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }
  }, [slides.length])

  return (
    <motion.div
      ref={containerRef}
      className="overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-6 w-max"
      >
        {slides.map((child, i) => (
          <div key={i} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
