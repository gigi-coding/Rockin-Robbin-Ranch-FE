import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import bench from '../assets/bench.jpg'
import house from '../assets/house.jpg'
import side from '../assets/side.jpg'
import roses from '../assets/roses.jpg'
import garden from '../assets/garden.jpg'
import React from "react";

function Garden() {
    return (
        <div>
            <NavBar />
            <div className='max-w-[1240px] mx-auto py-16 px-4'>
                <h1>We have tons going on in the Garden!</h1>
                <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'>
                    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={house} alt='/' />
                    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={bench} alt='/' />
                    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={side} alt='/' />
                    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={roses} alt='/' />
                    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={garden} alt='/' />
                </div>
        </div>
        <Footer />
        </div>
    )
}

export default Garden;