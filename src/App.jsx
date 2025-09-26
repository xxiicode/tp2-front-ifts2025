//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside.jsx";
import Home from "./pages/Home.jsx";

import LeanPage from "./pages/Lean.jsx";
import Bitacora from "./pages/Bitacora.jsx";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Aside />
          <main id="main" className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bitacora.html" element={<Bitacora />} />
              <Route path="/lean" element={<LeanPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
