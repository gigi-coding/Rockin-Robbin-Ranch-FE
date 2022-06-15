import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Area from './pages/Area';
import Garden from './pages/Garden';
import ShowRooms from './pages/ShowRooms';
import Review from './pages/Review';
import Reviews from './components/Reviews';
import Contact from './pages/Contact';
// import Show from './pages/Show'


function App(props) {
  return (
    <Routes> 
      {/* routes to my pages */}
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/area' element={<Area />} />
      <Route path='/garden' element={<Garden />} />
      <Route path='/rooms' element={<ShowRooms />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/reviews' element={<Review />} />
      <Route path='/reviews' element={<Reviews />} />
    </Routes>
  );
}

export default App;


