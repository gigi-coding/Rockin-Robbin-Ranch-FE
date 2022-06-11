import React from "react";
import Activities from "./components/Activities";
import NavBar from './components/NavBar';
import Movie from "./components/Movie";
import Rooms from './components/Rooms'



function App() {
  return (
    <div>
      <NavBar />
      < Movie />
      <Rooms />
      <Activities />
    </div>
  );
}

export default App;
