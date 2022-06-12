import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import './App.css';

import Home from './pages/Home'
import About from './pages/About';
import Area from './pages/Area';
import Garden from './pages/Garden';
import ShowRooms from './pages/ShowRooms';




function App() {
  return (
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='area' element={<Area />} />
    <Route path='garden' element={<Garden />} />
    <Route path='rooms' element={<ShowRooms />} />
  </Routes>

    

  );
}

export default App;


