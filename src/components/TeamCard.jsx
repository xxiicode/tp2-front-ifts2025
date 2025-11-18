import { useParams } from 'react-router-dom'
import CoinBoton from './Button'
import teamData from '../data/datos.json'

const TeamCardSection = ({ titulo = 'poner titulo', lista = [] }) => {
  return (
    <section className='lista'>
      <h2>{titulo}</h2>
      <ul>
        {
          lista.map((item, i) => (
            <li key={i}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.titulo}
              </a>
            </li>

          ))
        }
      </ul>
    </section>

  )
}

const TeamCard = () => {
  const { nombre } = useParams()

  const miembro = teamData.find((x) => x.rutaId === nombre)

  if (!miembro) return <p>Integrante no encontrado</p>

  return (
    <article className="team-card">
      <div className="team-card-avatar">
        <img
          src={ miembro.imagen || 'img-placeholder.png'}
          alt={`Avatar de ${miembro.nombre}`}
        />
      </div>
      <div className="team-card-info">
        <p>
          <span className="lbl">Nombre</span>
          <span className="val">{miembro.nombre}</span>
        </p>
        <p>
          <span className="lbl">Ubicación</span>{' '}
          <span className="val">{miembro.ubicacion}</span>
        </p>
        <p>
          <span className="lbl">Edad</span> <span className="val">{miembro.edad}</span>
        </p>
        <CoinBoton player={miembro.nombre} initialCoins={miembro.initialCoins} />

        <TeamCardSection titulo='Habilidades' lista= {miembro.habilidades} />
        <TeamCardSection titulo='Peliculas favoritas' lista= {miembro.peliculas} />
        <TeamCardSection titulo= 'Musica favorita' lista={miembro.musica} />
      </div>

    </article>
  )
}

export default TeamCard
