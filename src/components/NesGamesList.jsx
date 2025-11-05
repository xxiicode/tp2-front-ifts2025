import { useState } from "react";
import games from "../data/nesgames.json";
import { motion } from "framer-motion";
import "animate.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom"

export function NesGamesList() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("Todos");
  const [lightboxIndex, setLightboxIndex] = useState(-1); 

  const generos = ["Todos", ...new Set(games.map((g) => g.genero))];

  // Filtro dinámico
  const juegosFiltrados = games.filter((juego) => {
    const coincideTitulo = juego.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideGenero =
      filtroGenero === "Todos" || juego.genero === filtroGenero;
    return coincideTitulo && coincideGenero;
  });

  //Prepara las imágenes para el Lightbox
  const slides = juegosFiltrados.map((j) => ({
    src: j.imagen,
    description: `${j.titulo} (${j.año}) - ${j.genero}`,
  }));

  return (
    <section style={{ padding: "20px", background: "#1b2838" }}>
      <h2
        style={{
          color: "#ffd700",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Juegos Clásicos de NES
      </h2>

      {/*Controles de búsqueda y filtro */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "10px",
            border: "2px solid #444",
            width: "240px",
            background: "#222",
            color: "white",
          }}
        />
        <select
          value={filtroGenero}
          onChange={(e) => setFiltroGenero(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "10px",
            border: "2px solid #444",
            background: "#222",
            color: "white",
          }}
        >
          {generos.map((gen, i) => (
            <option key={i} value={gen}>
              {gen}
            </option>
          ))}
        </select>
      </div>

      {/* Grid de juegos filtrados */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {juegosFiltrados.map((game, i) => (
          <motion.div
            key={game.id}
            className="animate__animated animate__fadeInUp"
            style={{
              background: "#222",
              border: "2px solid #444",
              borderRadius: "10px",
              padding: "10px",
              color: "white",
              textAlign: "center",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={game.imagen}
              alt={game.titulo}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3
              style={{
                marginTop: "10px",
                color: "#00ffff",
                transition: "all 0.2s ease",
              }}
            >
              <Link
                to={`/juego/${game.id}`}
                style={{
                  color: "#00ffff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) => (e.target.style.textShadow = "0 0 10px #00ffff")}
                onMouseLeave={(e) => (e.target.style.textShadow = "none")}
              >
                {game.titulo}
              </Link>
            </h3>

            <p style={{ fontSize: "14px", color: "#bbb" }}>
              {game.genero} · {game.año}
            </p>
          </motion.div>
        ))}
      </div>

      {juegosFiltrados.length === 0 && (
        <p style={{ color: "#ccc", marginTop: "20px", textAlign: "center" }}>
          No se encontraron juegos que coincidan con la búsqueda.
        </p>
      )}

     
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
