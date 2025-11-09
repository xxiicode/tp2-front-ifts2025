import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "animate.css";
import pokemonTeam from "../data/pokemonTeam.json";

const PkmCard = ({ pokemon }) => {
  const tipos = pokemon.types?.map(t => t.type.name).join(", ");
  const img = pokemon.sprites?.other?.["official-artwork"]?.front_default;
  const imgShiny = pokemon.sprites?.other?.["official-artwork"]?.front_shiny;

  return (
    <motion.article
      className="pkm-card animate__animated animate__fadeInUp"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pkm-img">
        <img className="normal" src={img} alt={pokemon.name} />
        <img className="shiny" src={imgShiny} alt={`${pokemon.name} shiny`} />
      </div>
      <div className="pkm-content">
        <p>Nombre: <span>{pokemon.name}</span></p>
        <p>Número: <span>{pokemon.id}</span></p>
        <p>Tipo: <span>{tipos}</span></p>
      </div>
    </motion.article>
  );
};

export const PkmSection = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [cache, setCache] = useState(() => {
    const saved = localStorage.getItem("pkmCache");
    return saved ? JSON.parse(saved) : {};
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const limit = 6;
  const totalPokemons = 898;
  const fixedTeam = pokemonTeam.equipo;

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      setError(null);

      try {
        // Si ya está en caché, lo usamos
        if (cache[page]) {
          setPokemons(cache[page]);
          setLoading(false);
          return;
        }

        let ids = [];

        if (page === 1) {
          // Página 1 → tus 6 del equipo
          const randomExtras = [];
          while (randomExtras.length < limit - fixedTeam.length) {
            const randomId = Math.floor(Math.random() * totalPokemons) + 1;
            if (!fixedTeam.includes(randomId) && !randomExtras.includes(randomId)) {
              randomExtras.push(randomId);
            }
          }
          ids = [...fixedTeam, ...randomExtras];
        } else {
          // Otras páginas
          const randomIds = [];
          while (randomIds.length < limit) {
            const id = Math.floor(Math.random() * totalPokemons) + 1;
            if (!randomIds.includes(id)) randomIds.push(id);
          }
          ids = randomIds;
        }

        const detalles = await Promise.all(
          ids.map(id =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
          )
        );

        const newCache = { ...cache, [page]: detalles };
        setCache(newCache);
        localStorage.setItem("pkmCache", JSON.stringify(newCache));

        setPokemons(detalles);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, [page]);

  return (
    <section className="pkm-section" style={{ textAlign: "center" }}>
      <h1 style={{ color: "#FFD700", marginBottom: "10px" }}>Pokedex Retro</h1>
      <p
        style={{
          color: "#ddd",
          fontSize: "14px",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
        }}
      >
        Este es el equipo Pokémon que representa a nuestro grupo: una mezcla de fuerza, estrategia y espíritu retro.
        Cada miembro refleja una parte del equipo de desarrollo.  
        Si quieres ver más equipos Pokémon, navega entre las páginas.
      </p>

      {/*Paginación */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {/* Botón Anterior — solo visible si page > 1 */}
        {page > 1 && (
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#222",
              color: "white",
              cursor: "pointer",
            }}
          >
            ◀ Anterior
          </button>
        )}

        <span style={{ color: "#fff", fontWeight: "bold" }}>Página {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#222",
            color: "white",
            cursor: "pointer",
          }}
        >
          Siguiente ▶
        </button>
      </div>

      {loading && <p style={{ color: "#ccc" }}>Cargando Pokémon...</p>}
      {error && <p style={{ color: "salmon" }}>Error: {error}</p>}

      <div className="pkm-grid">
        {pokemons.map((pkm) => (
          <PkmCard key={pkm.id} pokemon={pkm} />
        ))}
      </div>
    </section>
  );
};
