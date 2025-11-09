import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Nostalgist } from 'nostalgist'
import games from '../data/nesgames.json'

export default function JugarNes() {
  const { id } = useParams()
  const game = games.find(g => g.id === Number(id))
  const nostalgistRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const coarse = window.matchMedia('(pointer: coarse)').matches
      const narrow = window.matchMedia('(max-width: 768px)').matches
      setIsMobile(coarse || narrow)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const launchGame = useCallback(async () => {
    try {
      if (isMobile || !game?.rom) return
      nostalgistRef.current?.exit?.()
      const romUrl = `${location.origin}/roms/${game.rom}`
      console.log("Intentando cargar ROM desde:", romUrl)
      nostalgistRef.current = await Nostalgist.nes(romUrl)
    } catch (error) {
      console.error('Error launching the game:', error)
    }
  }, [isMobile, game])

  // 🔹 Permitir salir del juego con la tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && nostalgistRef.current) {
        nostalgistRef.current.exit()
        nostalgistRef.current = null
        console.log("Juego cerrado con ESC")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      nostalgistRef.current?.exit?.()
      nostalgistRef.current = null
    }
  }, [])

  if (!game) return <p style={{ color: 'white', textAlign: 'center' }}>Juego no encontrado</p>

  return (
    <div className="container-mario">
      <h1>{game.titulo}</h1>
      <p className="info">
        Usa <kbd>Enter</kbd> para comenzar, <kbd>Z</kbd>/<kbd>X</kbd> para saltar/disparar, flechas para moverte y <kbd>ESC</kbd> para salir.
      </p>
      {isMobile ? (
        <div className="mobile-warning">
          <p>No disponible en dispositivos móviles.</p>
        </div>
      ) : game.rom ? (
        <button className="start-button" onClick={launchGame}>
          Jugar {game.titulo}
        </button>
      ) : (
        <p style={{ color: '#aaa' }}>ROM no disponible todavía</p>
      )}
      <footer className="credits"><small>Emulación con Nostalgist.js</small></footer>
    </div>
  )
}
