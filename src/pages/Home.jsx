import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SoundBtn } from '../components/SoundBtn'
import { motion } from "framer-motion";
import "animate.css";


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
      <motion.section
        className="hero animate__animated animate__fadeInDown"
        aria-label="Portada Hola Mundo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero__content">
          <h1 className="mario">HELLO 8-Bit WORLD</h1>
        </div>
      </motion.section>

      {/* Tecnologías */}
      <motion.section
        id="tecnologias"
        className="section-technologies animate__animated animate__fadeIn"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="titulo-principal">Tecnologías</h2>
        <ul className="tech-list" role="list">
          <li className="tech-item"><img src="/imgs/logo-html.webp" alt="HTML" title="HTML" /></li>
          <li className="tech-item"><img src="/imgs/logo-css.webp" alt="CSS" title="CSS" /></li>
          <li className="tech-item"><img src="/imgs/logo-javascript.webp" alt="JavaScript" title="JavaScript" /></li>
          <li className="tech-item"><img src="/imgs/logo-visual.webp" alt="Visual Studio Code" title="Visual Studio Code" /></li>
          <li className="tech-item"><img src="/imgs/logo-github.webp" alt="GitHub" title="GitHub" /></li>
        </ul>
      </motion.section>

      {/* Texto/Intro */}
      <motion.section
        className="section-intro animate__animated animate__fadeInUp"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="intro-box">
          <h3>¡Bienvenido al Mundo 8-Bit!</h3>
          <p>
            Un hub retro inspirado en Mario, la NES y el pixel art. <br />
            Cada integrante agrego su propia nostalgia <br />
            ¡recorre nuestros recuerdos y disfruta!
          </p>
        </div>
      </motion.section>

      {/* Cards de Miembros / Portales */}
      <motion.section
        id="miembros"
        className="section-cards animate__animated animate__fadeInUp"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
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
            img="/imgs/sm-lean.webp"
            imgHover="/imgs/card-Leandro.webp"
          />
        </div>
      </motion.section>

      {/* Proyecto */}
      <motion.section
        id="proyecto"
        className="section-project animate__animated animate__zoomIn"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>
    </>
  )
}


export default Home
