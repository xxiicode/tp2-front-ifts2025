import { Link } from "react-router-dom";

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
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/proyecto">Nuestro proyecto</Link>
            </li>
            <li>
              <Link to="/lean">Lean</Link>
            </li>
            <li>
              <Link to="/miembros">Miembros</Link>
            </li>
            <li>
              <Link to="/bitacora.html">Bitacora</Link>
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
  );
};

export default Aside;
