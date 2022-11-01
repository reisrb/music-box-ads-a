import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Musicas from './pages/Musicas';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Adicionar from './pages/Adicionar';

function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/adicionar" element={<Adicionar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;