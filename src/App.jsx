//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aside from './components/Aside.jsx'
import Home from './pages/Home.jsx'
import PlayMario from './pages/PlayMario.jsx'
import BitacoraPage from './pages/Bitacora.jsx'
import TeamCard from './components/TeamCard.jsx'
import { PkmSection } from './components/PkmTeam.jsx'
import NesGamesPage from './pages/NesGamesPage'
import JugarNes from './pages/JugarNes';

function App () {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Aside />
          <main id="main" className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bitacora" element={<BitacoraPage />} />
              <Route path="/:nombre" element={<TeamCard />} />
              <Route path='/playmario' element={<PlayMario />} />
              <Route path="/juego/:id" element={<JugarNes />} />
              <Route path='/pkmteam' element={<PkmSection />} />
              <Route path="/nesgames" element={<NesGamesPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
