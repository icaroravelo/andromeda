import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomeScreen from './pages/HomeScreen';
import Infos from './pages/Infos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/infos/:id" element={<Infos />} />
    </Routes>
  </BrowserRouter>
)
