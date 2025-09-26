// src/pages/Home.jsx
import { Link } from "react-router-dom";
import heroImg from "../assets/imgs/hero-section.webp";
import logoHTML from "../assets/imgs/logo-html.webp";
import logoCSS from "../assets/imgs/logo-css.webp";
import logoJS from "../assets/imgs/logo-javascript.webp";
import logoVS from "../assets/imgs/logo-visual.webp";
import logoGitHub from "../assets/imgs/logo-github.webp";
import imgPaula from "../assets/imgs/card-Paula.webp";
import imgMartin from "../assets/imgs/card-Martin.webp";
import imgMicaela from "../assets/imgs/card-Micaela.webp";
import imgLeandro from "../assets/imgs/card-Leandro.webp";
import imgMaria from "../assets/imgs/card-Maria.webp";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        aria-label="Portada Hola Mundo"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero__content">
          <h1>HELLO WORLD</h1>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="section-technologies">
        <h2 className="titulo-principal">Tecnologías</h2>
        <ul className="tech-list" role="list">
          <li className="tech-item">
            <img src={logoHTML} alt="HTML" title="HTML" />
          </li>
          <li className="tech-item">
            <img src={logoCSS} alt="CSS" title="CSS" />
          </li>
          <li className="tech-item">
            <img src={logoJS} alt="JavaScript" title="JavaScript" />
          </li>
          <li className="tech-item">
            <img src={logoVS} alt="Visual Studio Code" title="Visual Studio Code" />
          </li>
          <li className="tech-item">
            <img src={logoGitHub} alt="GitHub" title="GitHub" />
          </li>
        </ul>
      </section>

      {/* Texto/Intro */}
      <section className="section-intro">
        <div className="intro-box">
          <h3>¡Bienvenido a TechVerse!</h3>
          <p>
            Un multiverso digital donde cada integrante tiene su estilo. <br />
            ¡Elegí uno y sumergite en la experiencia de cada portal!
          </p>
        </div>
      </section>

      {/* Cards de Miembros / Portales */}
      <section id="miembros" className="section-cards">
        <h2 className="titulo-principal">Portales de integrantes</h2>
        <div className="cards-grid">
          <Link className="card card-member" to="/paula">
            <img src={imgPaula} alt="Portal Paula" />
            <span data-original="Paula">SELECT PLAYER</span>
          </Link>
          <Link className="card card-member" to="/martin">
            <img src={imgMartin} alt="Portal Martin" />
            <span data-original="Martin">SELECT PLAYER</span>
          </Link>
          <Link className="card card-member" to="/micaela">
            <img src={imgMicaela} alt="Portal Micaela" />
            <span data-original="Micaela">SELECT PLAYER</span>
          </Link>
          <Link className="card card-member" to="/leandro">
            <img src={imgLeandro} alt="Portal Leandro" />
            <span data-original="Leandro">SELECT PLAYER</span>
          </Link>
          <Link className="card card-member" to="/maria">
            <img src={imgMaria} alt="Portal Maria" />
            <span data-original="Maria">SELECT PLAYER</span>
          </Link>
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
  );
};

export default Home;
