import React, {useState} from "react";
import Adventures from "../components/Adventures";
import NavBar from '../components/NavBar';
import Movie from "../components/Movie";
import Rooms from '../components/Rooms'
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <NavBar />
            <Movie />
            <Rooms />
            <Adventures />
            <Footer />
        </div>
    )
}

export default Home