import games from '../data/nesgames.json'

export function NesGamesList() {
  return (
    <section style={{ padding: '20px', background: '#1b2838' }}>
      <h2 style={{ color: '#ffd700', textAlign: 'center', marginBottom: '20px' }}>
        Juegos Clásicos de NES
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {games.map((game) => (
          <div key={game.id} style={{
            background: '#222',
            border: '2px solid #444',
            borderRadius: '10px',
            padding: '10px',
            color: 'white',
            textAlign: 'center',
            transition: 'transform 0.2s',
          }}>
            <img
              src={game.imagen}
              alt={game.titulo}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '6px'
              }}
            />
            <h3 style={{ marginTop: '10px', color: '#00ffff' }}>{game.titulo}</h3>
            <p style={{ fontSize: '14px', color: '#bbb' }}>
              {game.genero} · {game.año}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
