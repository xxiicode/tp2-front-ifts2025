import { useEffect, useState } from "react";
import gamesLocal from "../data/nesgames.json";
import { motion } from "framer-motion";
import "animate.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function NesGamesList() {
  const [games, setGames] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("Todos");
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const API_KEY = import.meta.env.VITE_RAWG_KEY;
  console.log("API_KEY:", API_KEY);

  // Traer juegos desde la API RAWG
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page=${pagina}&platforms=49&page_size=40`
        );
        const data = await response.json();

        // Fusión con los datos locales
        const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

        const fusionados = data.results.map((g) => {
          const local = gamesLocal.find(
            (l) => normalize(g.name) === normalize(l.titulo)
          );

          return {
            id: g.id,
            idLocal: local?.id || null, // ID del JSON local
            titulo: g.name,
            año: g.released?.split("-")[0] || "Desconocido",
            genero: g.genres?.[0]?.name || "Desconocido",
            imagen: g.background_image,
            puedeJugar: !!local,
          };
        });

        setGames(fusionados);
        setTotalPaginas(Math.ceil(data.count / 20));
      } catch (error) {
        console.error("Error al traer los juegos:", error);
      }
    };

    fetchGames();
  }, [pagina]);

  // Filtrado dinámico
  const generos = ["Todos", ...new Set(games.map((g) => g.genero))];

  const juegosFiltrados = games.filter((juego) => {
    const coincideTitulo = juego.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideGenero =
      filtroGenero === "Todos" || juego.genero === filtroGenero;
    return coincideTitulo && coincideGenero;
  });

  // Renderizado
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

      {/* Controles de búsqueda y filtro */}
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

      {/* Grid de juegos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {juegosFiltrados.map((game, index) => (
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
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            />
            <h3 style={{ marginTop: "10px", color: "#00ffff" }}>
              {game.titulo}
            </h3>
            <p style={{ fontSize: "14px", color: "#bbb" }}>
              {game.genero} · {game.año}
            </p>

            {game.puedeJugar && (
              <a
                href={`/jugar/${game.idLocal}`}
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  padding: "6px 12px",
                  background: "#00ff88",
                  color: "#000",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Jugar ahora
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={juegosFiltrados.map((g) => ({
          src: g.imagen,
          title: g.titulo,
        }))}
      />

      {/* Paginación */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setPagina((p) => Math.max(p - 1, 1))}
          disabled={pagina === 1}
          style={{
            padding: "10px 15px",
            borderRadius: "6px",
            border: "none",
            background: pagina === 1 ? "#555" : "#00ffff",
            color: "#000",
            cursor: pagina === 1 ? "not-allowed" : "pointer",
          }}
        >
          Anterior
        </button>

        <span style={{ color: "#fff", alignSelf: "center" }}>
          Página {pagina} / {totalPaginas}
        </span>

        <button
          onClick={() => setPagina((p) => p + 1)}
          disabled={pagina >= totalPaginas}
          style={{
            padding: "10px 15px",
            borderRadius: "6px",
            border: "none",
            background: pagina >= totalPaginas ? "#555" : "#00ffff",
            color: "#000",
            cursor: pagina >= totalPaginas ? "not-allowed" : "pointer",
          }}
        >
          Siguiente ➡
        </button>
      </div>
    </section>
  );
}
