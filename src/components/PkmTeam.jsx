import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const PkmCard = ({ pokemon }) => {
  const tipos = pokemon.types?.map(t => t.type.name).join(', ')
  const img = pokemon.sprites?.other?.['official-artwork']?.front_default
  const imgShiny = pokemon.sprites?.other?.['official-artwork']?.front_shiny

  return (
    <motion.article
      className="pkm-card animate__animated animate__fadeInUp"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className='pkm-img'>
        <img className="normal" src={img} alt={pokemon.name} />
        <img className="shiny" src={imgShiny} alt={`${pokemon.name} shiny`} />
      </div>
      <div className='pkm-content'>
        <p>Nombre: <span>{pokemon.name}</span></p>
        <p>Número: <span>{pokemon.id}</span></p>
        <p>Tipo: <span>{tipos}</span></p>
      </div>
    </motion.article>
  )
}

export const PkmSection = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const limit = 6
  const offset = (page - 1) * limit

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true)
      setError(null)
  
      try {
        // Si ya tenemos esta página en caché, la usamos directamente
        setPokemons(prevCache => {
          const currentCache = cache[page]
          if (currentCache) {
            setLoading(false)
            return currentCache
          }
          return prevCache
        })
  
        // Si no está en caché, generamos IDs aleatorios nuevos
        if (!cache[page]) {
          const totalPokemons = 898
          const randomIds = []
          while (randomIds.length < limit) {
            const id = Math.floor(Math.random() * totalPokemons) + 1
            if (!randomIds.includes(id)) randomIds.push(id)
          }
  
          const detalles = await Promise.all(
            randomIds.map(id =>
              fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
            )
          )
  
          // Guardamos los resultados en el caché
          setCache(prev => ({
            ...prev,
            [page]: detalles
          }))
  
          setPokemons(detalles)
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  
    fetchPokemons()
  }, [page])

  const [cache, setCache] = useState({})
  
  return (
    <section className='pkm-section' style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#FFD700', marginBottom: '10px' }}>Pokedex Retro</h1>
      <p style={{
        color: '#ddd',
        fontSize: '14px',
        maxWidth: '600px',
        margin: '0 auto 30px auto'
      }}>
        Explorá los Pokémon de forma paginada. Cada página carga 6 Pokémon desde la API oficial.
      </p>

      {/* 🔄 Controles de paginación */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: '#222',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          ◀ Anterior
        </button>
        <span style={{ color: '#fff', fontWeight: 'bold' }}>Página {page}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: '#222',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Siguiente ▶
        </button>
      </div>

      {loading && <p style={{ color: '#ccc' }}>Cargando Pokémon...</p>}
      {error && <p style={{ color: 'salmon' }}>Error: {error}</p>}

      <div className="pkm-grid">
        {pokemons.map(pkm => (
          <PkmCard key={pkm.id} pokemon={pkm} />
        ))}
      </div>
    </section>
  )
}
