import React from "react";
import Adventures from "./components/Adventures";
import NavBar from './components/NavBar';
import Movie from "./components/Movie";
import Rooms from './components/Rooms'
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <NavBar />
      < Movie />
      <Rooms />
      <Adventures />
      <Footer />
    </div>
  );
}

export default App;
