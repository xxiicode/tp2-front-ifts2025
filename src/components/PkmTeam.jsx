import { useState, useEffect } from 'react'
import pokemonTeam from '../data/pokemonTeam.json'

const PkmCard = ({ pokemon }) => {

  const tipos = pokemon.types?.map(t => t.type.name).join(', ')
  const img = pokemon.sprites?.other?.['official-artwork']?.front_default
  const imgShiny = pokemon.sprites?.other?.['official-artwork']?.front_shiny

  return (
    <article className='pkm-card'>
      <div className='pkm-img'>
        <img className="normal" src={img} alt={pokemon.name} />
        <img className="shiny" src={imgShiny} alt={`${pokemon.name} shiny`} />
      </div>
      <div className='pkm-content'>
        <p>Nombre: <span>{pokemon.name}</span></p>
        <p>Numero: <span>{pokemon.id}</span></p>
        <p>Tipo: <span>{tipos}</span></p>
      </div>
    </article>
  )
}

export const PkmSection = () => {

  const pkmArray = pokemonTeam.equipo
  const [pkms, setPkms] = useState([])

  useEffect(() => {
    Promise.all(
      pkmArray.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json()),
      ),
    )
      .then(setPkms)
      .catch((e) => console.error(e))
  }, [pkmArray])

  return (
    <section className='pkm-section' style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#FFD700', marginBottom: '10px' }}>Nuestro Equipo Pokémon</h1>
      <p style={{
        color: '#ddd',
        fontSize: '14px',
        maxWidth: '600px',
        margin: '0 auto 30px auto'
      }}>
        Este es el equipo Pokémon que representa a nuestro grupo: una mezcla de fuerza, estrategia y espíritu retro.
        Cada miembro refleja una parte del equipo de desarrollo.
      </p>

      <div className="pkm-grid">
        {pkms.map((pkm) => (
          <PkmCard key={pkm.id} pokemon={pkm} />
        ))}
      </div>
    </section>
  )
}