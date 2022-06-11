import React from 'react'
import {FaFacebook, FaLinkedin, } from 'react-icons/fa'
import {GoLogoGithub} from 'react-icons/go' 

function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'> 
            <h1> Follow Us! </h1>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='icon'/>
            </div>
            <h3>
                Rockin Robbin's Ranch <br/>
                430 S. 600 W. <br />
                Santaquin, UT 84655
            </h3>
            {/* <h1>
                Gigi Brigitte 
                <FaLinkedin className='icon' />
                <GoLogoGithub className='icon'/>
            </h1> */}
            {/* <h3>Gigi Brigitte</h3>
            <div>
                <GoLogoGithub className='icon' />
                <FaLinkedin className='icon' />
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer