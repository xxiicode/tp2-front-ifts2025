//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aside from './components/Aside.jsx'
import Home from './pages/Home.jsx'
import PlayMario from './pages/PlayMario.jsx'

import LeanPage from './pages/Lean.jsx'
import MartinPage from './pages/Martin.jsx'
import BitacoraPage from './pages/Bitacora.jsx'

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
              <Route path="/lean" element={<LeanPage />} />
              <Route path="/miembros" element={<MartinPage />} />
              <Route path='/playmario' element={<PlayMario />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
