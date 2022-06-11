import React from 'react';
import AntelopeIsland from '../assets/AntelopeIsland.jpg';
import DesertHike from '../assets/DesertHike.jpg';
import Provo from '../assets/Provo.jpg';
import SandDunes from '../assets/SandDunes.jpg';
import UtahSign from '../assets/UtahSign.jpg';


function Activities() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1>Popular Places to Explore</h1>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={UtahSign} alt='/' />
            <img className='w-full h-full object-cover' src={Provo} alt='/' />
            <img className='w-full h-full object-cover' src={DesertHike} alt='/' />
            <img className='w-full h-full object-cover' src={AntelopeIsland} alt='/' />
            <img className='w-full h-full object-cover' src={SandDunes} alt='/' />
            {/* need to add links to allTrails? or just pass in data directly */}
        </div>
    </div>
  )
}

export default Activities