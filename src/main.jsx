import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import History from './pages/History';
import HomeScreen from './pages/HomeScreen';
import Infos from './pages/Infos';
import Recomendations from './pages/Recomendations';
import Search from './pages/Search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/infos/:id" element={<Infos />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recomendations" element={<Recomendations />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </BrowserRouter>
)
