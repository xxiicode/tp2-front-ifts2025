import useSound from 'use-sound'
import React from 'react'

export const SoundWrapper = ({ sound, children }) => {
  const [play] = useSound(sound)

  // Clonamos el hijo (button, Link, etc) y le agregamos onClick
  return React.cloneElement(children, {
    onClick: (e) => {
      play()
      if (children.props.onClick) {
        children.props.onClick(e) // conserva su propio onClick
      }
    },
  })
}