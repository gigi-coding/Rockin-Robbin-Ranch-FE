import React from 'react';
import Provo from '../assets/Provo.jpg';
import Welcome from '../assets/Welcome.jpg';
import SilverLake from '../assets/SilverLakeRes.jpg'
import ArchesNP from '../assets/ArchesNP.jpg'
import Timpanogos from '../assets/Timpanogos.jpg'
// import Weather from './Weather';


function Adventures() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1 className='text-right'>Go on an Incredible Adventure.</h1>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Welcome} alt='/' />
            <a href='https://www.alltrails.com/trail/us/utah/bst-provo-canyon-section?u=i'><img className='w-full h-full object-cover' src={Provo} alt='/' /></a>
            <a href='https://www.alltrails.com/trail/us/utah/silver-lake-trail?u=i'><img className='w-full h-full object-cover' src={SilverLake} alt='/' /></a>
            <a href='https://www.alltrails.com/trail/us/utah/mt-timpanogos-timpooneke-trail'><img className='w-full h-full object-cover' src={Timpanogos} alt='/' /></a>
            <a href='https://www.alltrails.com/trail/us/utah/delicate-arch-trail?u=i'><img className='w-full h-full object-cover' src={ArchesNP} alt='/' /></a>
        </div>
    </div>
  )
}

export default Adventures