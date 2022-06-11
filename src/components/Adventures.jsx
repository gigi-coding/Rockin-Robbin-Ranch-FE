import React from 'react';
import Provo from '../assets/Provo.jpg';
import Welcome from '../assets/Welcome.jpg';
import SilverLake from '../assets/SilverLakeRes.jpg'
import ArchesNP from '../assets/ArchesNP.jpg'
import Timpanogos from '../assets/Timpanogos.jpg'


function Adventures() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1>Go on an Incredible Adventure.</h1>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Welcome} alt='/' />
            <img className='w-full h-full object-cover' src={Provo} alt='/' />
            <img className='w-full h-full object-cover' src={SilverLake} alt='/' />
            <img className='w-full h-full object-cover' src={Timpanogos} link={'https://www.alltrails.com/trail/us/utah/mt-timpanogos-timpooneke-trail'} alt='/' />
            <img className='w-full h-full object-cover' src={ArchesNP} alt='/' />
            {/* need to add links to allTrails? or just pass in data directly */}
        </div>
    </div>
  )
}

export default Adventures