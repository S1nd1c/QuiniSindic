import React from 'react'
import { Routes, Route } from 'react-router-dom'; 
import App from './App';
import HallOfFame from './views/HallOfFame';
import Quiniela from './views/Quiniela';

function AppRoutes() {
  return (
    <div className="h-full">
        <Routes>
          <Route path="/" element={<Quiniela/>} /> {/* Cambiar a App */}
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/quiniela" element={<Quiniela />} />
        </Routes>
    </div>
  )
}

export default AppRoutes