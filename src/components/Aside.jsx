import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isSoundEnabled, setSoundEnabled, playSound } from '../utils/sound'

const Aside = () => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled())

  useEffect(() => {
    setSoundEnabled(soundOn)
  }, [soundOn])

  return (
    <>
      <aside className="aside">
        <div className="aside-logo">
          <a href="#inicio" className="logo">
            <img
              src="./src/assets/imgs/logo-inicio.webp"
              alt="TechVerse logo"
            />
          </a>
        </div>
        <nav className="main-nav" aria-label="Navegación principal">
          <ul>
            <li>
              <Link to="/" onClick={() => playSound('src/assets/sounds/click.mp3')}>Inicio</Link>
            </li>
            <li>
              <a href="#proyecto" onClick={() => playSound('src/assets/sounds/click.mp3')}>Nuestro proyecto</a>
            </li>
            <li>
              <Link to="/lean" onClick={() => playSound('src/assets/sounds/click.mp3')}>Lean</Link>
            </li>
            <li>
              <a href="#miembros" onClick={() => playSound('src/assets/sounds/click.mp3')}>Miembros</a>
            </li>
            <li>
              <Link to="/bitacora" onClick={() => playSound('src/assets/sounds/click.mp3')}>Bitacora</Link>
            </li>
          </ul>
        </nav>

        <footer className="aside-footer">
          <p>2025 - Grupo X -</p>
          <button
            type="button"
            className="sound-toggle"
            aria-pressed={soundOn}
            onClick={() => {
              const next = !soundOn
              setSoundOn(next)
              playSound('src/assets/sounds/toggle.mp3')
            }}
          >
            Sonido: {soundOn ? 'ON' : 'OFF'}
          </button>
          <a className="github" href="">
            Repositorio
          </a>
        </footer>
      </aside>
    </>
  )
}

export default Aside
