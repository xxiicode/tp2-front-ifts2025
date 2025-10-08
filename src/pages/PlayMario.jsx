import { useCallback, useEffect, useRef } from 'react'
import { Nostalgist } from 'nostalgist'
import '../css/jugarMario.css'

export default function JugarMario () {
  const nostalgistRef = useRef(null)

  const launchGame = useCallback(async () => {
    try {
      // si ya hay uno corriendo, cerralo primero
      nostalgistRef.current?.exit?.()

      const romUrl = location.origin + '/roms/smb.nes'
      nostalgistRef.current = await Nostalgist.nes(romUrl) // ← devuelve instancia
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error launching the game:', error)
    }
  }, [])

  // Al salir de la página/vista, apagar el emulador
  useEffect(() => {
    return () => {
      nostalgistRef.current?.exit?.() // apaga audio + core y quita el canvas
      nostalgistRef.current = null
    }
  }, [])

  return (
    <div className="container-mario">
      <h1>🎮 Super Mario Bros (NES)</h1>
      <p className="info">
        Usa <kbd>Enter</kbd> para comenzar, <kbd>Z</kbd>/<kbd>X</kbd> para saltar/disparar, y flechas para moverte.
      </p>
      <button className="start-button" onClick={launchGame}>Jugar Super Mario</button>
      <footer className="credits"><small>Emulación con Nostalgist.js</small></footer>
    </div>
  )
}
