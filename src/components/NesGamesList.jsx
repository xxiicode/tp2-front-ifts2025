import { useState } from "react";
import games from "../data/nesgames.json";
import { motion } from "framer-motion";
import "animate.css";

export function NesGamesList() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("Todos");

  const generos = ["Todos", ...new Set(games.map((g) => g.genero))];

  // 🔍 Filtro dinámico
  const juegosFiltrados = games.filter((juego) => {
    const coincideTitulo = juego.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideGenero = filtroGenero === "Todos" || juego.genero === filtroGenero;
    return coincideTitulo && coincideGenero;
  });

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

      {/* 🔧 Controles de búsqueda y filtro */}
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

      {/* 🕹️ Grid de juegos filtrados */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {juegosFiltrados.map((game) => (
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
              transition: "transform 0.2s",
            }}
            whileHover={{ scale: 1.05 }}
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
            <h3 style={{ marginTop: "10px", color: "#00ffff" }}>{game.titulo}</h3>
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
    </section>
  );
}
