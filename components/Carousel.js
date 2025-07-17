import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Carousel({ children, autoScroll = false, duration = 30 }) {
  const slides = React.Children.toArray(children)
  const items = autoScroll ? [...slides, ...slides] : slides
  const [width, setWidth] = useState(0)
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    if (innerRef.current && containerRef.current) {
      const full = innerRef.current.scrollWidth
      const visible = containerRef.current.offsetWidth
      if (autoScroll) {
        setWidth(full / 2 - visible)
        controls.start({
          x: -full / 2,
          transition: { ease: 'linear', duration, repeat: Infinity }
        })
      } else {
        setWidth(full - visible)
      }
    }
  }, [items.length, autoScroll, duration, controls])

  return (
    <motion.div
      ref={containerRef}
      className="overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <motion.div
        ref={innerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0}
        className="flex gap-6 w-max"
        animate={autoScroll ? controls : undefined}
        onDragStart={() => controls.stop()}
        onDragEnd={() => {
          if (autoScroll && innerRef.current) {
            const full = innerRef.current.scrollWidth
            controls.start({
              x: -full / 2,
              transition: { ease: 'linear', duration, repeat: Infinity }
            })
          }
        }}
      >
        {items.map((child, i) => (
          <div key={i} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
