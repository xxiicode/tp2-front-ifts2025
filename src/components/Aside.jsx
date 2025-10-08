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
              src="./src/assets/imgs/logo-inicio.webp"
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
                <Link to="/proyecto">Nuestro proyecto</Link>
              </SoundWrapper>
            </li>
            <li>
              <Link to="/lean">Lean</Link>
            </li>
            <li>
              <Link to="/martin">Martin</Link>
            </li>
            <li>
              <Link to="/bitacora">Bitacora</Link>
            </li>
            <li>
              <Link to="/playmario">Jugar al Mario</Link>
            </li>
          </ul>
        </nav>

        <footer className="aside-footer">
          <p>2025 - Grupo X -</p>
          <a className="github" href="">
            Repositorio
          </a>
        </footer>
      </aside>
    </>
  )
}

export default Aside
