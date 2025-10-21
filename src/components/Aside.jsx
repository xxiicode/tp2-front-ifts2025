import { Link } from 'react-router-dom'
import { SoundWrapper } from './SoundWrapper'
import coinSfx from '../assets/sounds/smb_coin.wav'

const Aside = () => {
  return (
    <>
      <aside className="aside">
        <div className="aside-logo">
          <a href="#inicio" className="logo">
            <img
              src="/imgs/logo-inicio.webp"
              alt="TechVerse logo"
            />
          </a>
        </div>
        <nav className="main-nav" aria-label="Navegación principal">
          <ul>
            <li>
              <SoundWrapper sound={coinSfx}>
                <Link to="/"><span>Inicio</span></Link>
              </SoundWrapper>
            </li>
            <li>
              <SoundWrapper sound={coinSfx}>
                <Link to="/lean">Lean</Link>
              </SoundWrapper>
            </li>
            <li>
            <SoundWrapper sound={coinSfx}>
                <Link to="/martin">Martin</Link>
              </SoundWrapper>
            </li>
            <li>
            <SoundWrapper sound={coinSfx}>
                <Link to="/bitacora">Bitacora</Link>
              </SoundWrapper>
            </li>
            <li>
            <SoundWrapper sound={coinSfx}>
                <Link to="/pkmteam">Equipo pkm</Link>
              </SoundWrapper>
            </li>
            <li>
            <SoundWrapper sound={coinSfx}>
                <Link to="/nesgames">Juegos NES</Link>
              </SoundWrapper>
            </li>
            <li>
            <SoundWrapper sound={coinSfx}>
                <Link to="/playmario">Jugar al Mario</Link>
              </SoundWrapper>
            </li>
          </ul>
        </nav>

        <footer className="aside-footer">
          <p>2025 - Grupo 19 -</p>
          <a className="github" href="https://github.com/xxiicode/tp2-front-ifts2025" target="_blank" rel="noopener noreferrer">
            Repositorio
          </a>
        </footer>
      </aside>
    </>
  )
}

export default Aside
