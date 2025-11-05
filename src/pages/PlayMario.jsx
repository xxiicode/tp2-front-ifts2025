import { useCallback, useEffect, useRef, useState } from 'react'
import { Nostalgist } from 'nostalgist'
import '../css/jugarMario.css'

export default function JugarMario () {
  const nostalgistRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar mobile: coarse pointer o viewport angosto
  useEffect(() => {
    const checkMobile = () => {
      const coarse = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
      const narrow = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
      setIsMobile(coarse || narrow)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const launchGame = useCallback(async () => {
    try {
      if (isMobile) {
        // Evitar iniciar el emulador en mobile
        return
      }
      // si ya hay uno corriendo, cerralo primero
      nostalgistRef.current?.exit?.()

      const romUrl = location.origin + '/roms/smb.nes'
      nostalgistRef.current = await Nostalgist.nes(romUrl) // ← devuelve instancia
    } catch (error) {
      console.error('Error launching the game:', error)
    }
  }, [isMobile])

  // Al salir de la página/vista, apagar el emulador
  useEffect(() => {
    return () => {
      nostalgistRef.current?.exit?.() // apaga audio + core y quita el canvas
      nostalgistRef.current = null
    }
  }, [])

  return (
    <div className="container-mario">
      <h1>Super Mario Bros (NES)</h1>
      <p className="info">
        Usa <kbd>Enter</kbd> para comenzar, <kbd>Z</kbd>/<kbd>X</kbd> para saltar/disparar, y flechas para moverte.
      </p>
      {isMobile
        ? (
          <div className="mobile-warning">
            <p>
              No disponible en dispositivos móviles. Probalo en una computadora de escritorio.
            </p>
          </div>
        ) : (
          <button className="start-button" onClick={launchGame}>Jugar Super Mario</button>
        )}
      <footer className="credits"><small>Emulación con Nostalgist.js</small></footer>
    </div>
  )
}
