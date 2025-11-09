/* eslint-disable quotes, semi, indent, comma-dangle */
import { useEffect, useMemo, useState } from 'react'
import gamesLocal from '../data/nesgames.json'
import { motion } from 'framer-motion'
import 'animate.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import '../css/nesgames.css'

export function NesGamesList () {
  const [games, setGames] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [filtroGenero, setFiltroGenero] = useState('Todos')
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [allGeneros, setAllGeneros] = useState([]) // lista estable de géneros acumulados
  const [soloJugables, setSoloJugables] = useState(false)

  const API_KEY = import.meta.env.VITE_RAWG_KEY
  const PAGE_SIZE = 20 // limitar a 20 resultados por página

  // Utilidad simple para pasar de "Action" -> "action" o "Beat 'em up" -> "beat-em-up"
  const slugify = useMemo(() => (str) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  , [])

  // Incluir los géneros locales desde el JSON para que el selector siempre los tenga
  useEffect(() => {
    const generosLocales = Array.from(new Set((gamesLocal || []).map(g => g.genero).filter(Boolean)))
    setAllGeneros(prev => Array.from(new Set([...(prev || []), ...generosLocales])))
  }, [])

  // Traer juegos desde la API RAWG
  useEffect(() => {
    const fetchGames = async () => {
      try {
        // Construir query con filtros para evitar páginas vacías al filtrar
  const params = new URLSearchParams()
  params.set('key', API_KEY)
  params.set('page', String(pagina))
  params.set('page_size', String(PAGE_SIZE))
  params.set('platforms', '49') // 49 = NES
  if (busqueda.trim()) params.set('search', busqueda.trim())
  if (filtroGenero !== 'Todos') params.set('genres', slugify(filtroGenero))

  const response = await fetch(`https://api.rawg.io/api/games?${params.toString()}`)
  const data = await response.json()

    // Fusión con los datos locales
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '')

        const fusionados = (data.results || []).map((g) => {
          const local = gamesLocal.find(
            (l) => normalize(g.name) === normalize(l.titulo)
          )

          return {
            id: g.id,
            idLocal: local?.id || null, // ID del JSON local
            titulo: g.name,
            año: g.released?.split('-')[0] || 'Desconocido',
            genero: g.genres?.[0]?.name || 'Desconocido', // principal para mostrar
            generos: Array.isArray(g.genres) ? g.genres.map(x => x.name) : [], // todos los géneros
            imagen: g.background_image,
            puedeJugar: !!local,
          }
        })

    setGames(fusionados)
  setTotalPaginas(Math.ceil((data?.count || 0) / PAGE_SIZE))

        // acumular géneros sin perder los anteriores (que desaparecen si filtramos por uno)
        const nuevosGeneros = Array.from(new Set((data.results || [])
          .flatMap(g => (Array.isArray(g.genres) ? g.genres.map(x => x.name) : []))))
        setAllGeneros(prev => Array.from(new Set([...(prev || []), ...nuevosGeneros])))
      } catch (error) {
        console.error('Error al traer los juegos:', error)
      }
    };

    fetchGames()
  }, [pagina, busqueda, filtroGenero, slugify, API_KEY])

  // Al cambiar búsqueda o género, volver a la primera página para evitar páginas vacías
  useEffect(() => {
    setPagina(1)
  }, [busqueda, filtroGenero])

  // Al cambiar el toggle de "solo jugables", volvemos a la primera página
  useEffect(() => {
    setPagina(1)
  }, [soloJugables])

  // Filtrado dinámico
  // Lista de géneros estable (no se reduce al filtrar)
  const generos = ['Todos', ...allGeneros]

  // Fuente de datos según el modo:
  // - soloJugables: usar únicamente los juegos locales (todos jugables y paginar localmente)
  // - caso contrario: usar los juegos de la API (ya vienen paginados por RAWG)
  const juegosLocalesBase = useMemo(() => {
    return (gamesLocal || []).map((l) => ({
      id: `local-${l.id}`,
      idLocal: l.id,
      titulo: l.titulo,
      año: String(l.año || '').toString() || 'Desconocido',
      genero: l.genero || 'Desconocido',
      generos: l.genero ? [l.genero] : [],
      imagen: l.imagen,
      puedeJugar: true,
    }))
  }, [])

  const sourceGames = soloJugables ? juegosLocalesBase : games

  const juegosFiltrados = sourceGames.filter((juego) => {
    const coincideTitulo = (juego.titulo || '')
      .toLowerCase()
      .includes((busqueda || '').toLowerCase());
    const coincideGenero =
      filtroGenero === 'Todos' || (juego.generos || []).includes(filtroGenero);
    // En modo soloJugables todos ya son jugables; en modo normal respetar flag
    const coincideDisponibilidad = !soloJugables ? true : true
    return coincideTitulo && coincideGenero && coincideDisponibilidad;
  })

  // Paginación mostrada
  const totalPaginasToShow = soloJugables
    ? Math.max(1, Math.ceil(juegosFiltrados.length / PAGE_SIZE))
    : totalPaginas

  const juegosParaMostrar = soloJugables
    ? juegosFiltrados.slice((pagina - 1) * PAGE_SIZE, pagina * PAGE_SIZE)
    : juegosFiltrados

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

        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', userSelect: 'none' }}>
          <input
            type="checkbox"
            checked={soloJugables}
            onChange={(e) => setSoloJugables(e.target.checked)}
          />
          Solo jugables
        </label>
      </div>

      {/* Grid de juegos (máximo 4 columnas) */}
      <div className='nes-grid'>
        {juegosParaMostrar.map((game, index) => (
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
              width: "100%",
              maxWidth: "260px",
              margin: "0 auto",
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

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={juegosParaMostrar.map((g) => ({
          src: g.imagen,
          title: g.titulo,
        }))}
      />

      {/* Paginación */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          gap: '10px',
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
          Página {pagina} / {totalPaginasToShow}
        </span>

        <button
          onClick={() => setPagina((p) => p + 1)}
          disabled={pagina >= totalPaginasToShow}
          style={{
            padding: "10px 15px",
            borderRadius: "6px",
            border: "none",
            background: pagina >= totalPaginasToShow ? "#555" : "#00ffff",
            color: "#000",
            cursor: pagina >= totalPaginasToShow ? "not-allowed" : "pointer",
          }}
        >
          Siguiente ➡
        </button>
      </div>
    </section>
  );
}
