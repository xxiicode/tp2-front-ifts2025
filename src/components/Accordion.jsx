// Accordion.js
import { useState } from 'react'
import '../css/bitacora.css'

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details className={isOpen ? 'open' : 'close'}>
      <summary  onClick={() => {setIsOpen(!isOpen)}}><span>{title}</span> <span style={{ userSelect: 'none' }}>{isOpen ? '-' : '+'}</span></summary>
      {children}
    </details>
  )

}
