import { NesGamesList } from '../components/NesGamesList'

export default function NesGamesPage() {
  return (
    <main style={{ background: '#003366', minHeight: '100vh', padding: '30px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>
        Catálogo de Juegos NES
      </h1>
      <NesGamesList />
    </main>
  )
}
