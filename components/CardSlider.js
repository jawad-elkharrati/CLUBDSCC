import React from 'react'

export default function CardSlider({ children }) {
  const slides = React.Children.toArray(children)
  const duplicated = [...slides, ...slides]
  return (
    <div className="overflow-hidden w-full my-6">
      <div className="flex gap-6 slide-left w-max">
        {duplicated.map((child, i) => (
          <div key={i} className="flex-shrink-0">{child}</div>
        ))}
      </div>
    </div>
  )
}
