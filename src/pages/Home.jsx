import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SoundBtn } from '../components/SoundBtn'

function CardMember ({ to, nombre, img, imgHover }) {
  const [hover, setHover] = useState(false)

  return (
    <Link
      className="card card-member"
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? imgHover : img}
        alt={`Portal ${nombre}`}
      />
      <span data-original={nombre}>
        {hover ? 'PLAYER READY' : 'SELECT PLAYER'}
      </span>
    </Link>
  )
}

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-label="Portada Hola Mundo">
        <div className="hero__content">
          <h1 className="mario">HELLO WORLD</h1>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="section-technologies">
        <h2 className="titulo-principal">Tecnologías</h2>
        <ul className="tech-list" role="list">
          <li className="tech-item">
            <img src="/imgs/logo-html.webp" alt="HTML" title="HTML" />
          </li>
          <li className="tech-item">
            <img src="/imgs/logo-css.webp" alt="CSS" title="CSS" />
          </li>
          <li className="tech-item">
            <img
              src="/imgs/logo-javascript.webp"
              alt="JavaScript"
              title="JavaScript"
            />
          </li>
          <li className="tech-item">
            <img
              src="/imgs/logo-visual.webp"
              alt="Visual Studio Code"
              title="Visual Studio Code"
            />
          </li>
          <li className="tech-item">
            <img
              src="/imgs/logo-github.webp"
              alt="GitHub"
              title="GitHub"
            />
          </li>
        </ul>
      </section>

      {/* Texto/Intro */}
      <section className="section-intro">
        <div className="intro-box">
          <h3>¡Bienvenido a TechVerse!</h3>
          <p>
            Un multiverso digital donde cada integrante tiene su estilo. <br />
            ¡Eligí uno y sumergite en la experiencia de cada portal!
          </p>
        </div>
      </section>

      {/* Cards de Miembros / Portales */}
      <section id="miembros" className="section-cards">
        <h2 className="titulo-principal">Portales de integrantes</h2>
        <SoundBtn />
        <div className="cards">
          <CardMember
            to="/martin"
            nombre="Martin"
            img="/imgs/sm-martin.webp"
            imgHover="/imgs/card-Martin.webp"
          />
          <CardMember
            to="/lean"
            nombre="Leandro"
            img='/imgs/sm-lean.webp'
            imgHover="/imgs/card-Leandro.webp"
          />
        </div>
      </section>

      {/* Proyecto */}
      <section id="proyecto" className="section-project">
        <h2 className="titulo-principal">Nuestro proyecto</h2>
        <div className="project-panel">
          <p>
            Para nuestro sitio web, elegimos implementar una propuesta de
            portales individuales para cada integrante, mostrando que cada uno
            tiene su estilo propio y permitiendo que cada miembro desarrolle
            distintas prácticas de manera independiente. <br />
            La página principal se diseñó con un estilo moderno y tech,
            sirviendo como punto de entrada coherente al proyecto. <br />
            Cada integrante aportó de manera diferenciada a nivel de
            planificación, diseño, programación y estructura de contenido, lo
            que permitió reflejar la diversidad creativa del equipo mientras se
            mantenía una experiencia unificada para el usuario.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
