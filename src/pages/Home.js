import React from "react";
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
            <h3  className=' flex justify-center md:text-3xl sm:text-2xl text-2xl md:py-6 py-4' >
                <p>
                    A Farmhouse Ranch B&B <br />
                    Open 6 am to 10:30 PM for Check-in <br />
                    A farmhouse breakfast is served 8 AM to 9AM every morning! <br />
                    Farm to Table Grill or Dutch Oven Dinners. <br />
                    Fire sides at Sunset with beautiful Mountain Views! <br />
                    Special Hosted Events and Family Gathers welcome! <br />
                </p>
            </h3>
            <Rooms />
            <Adventures />
            <Footer />
        </div>
    )
}

export default Home