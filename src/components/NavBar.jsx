import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {WiStars} from 'react-icons/wi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutline, HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaFacebook} from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false); 
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
        // ! means the opposite of what it is
    }
    return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>RoseStone Rentals</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>About</li>
            <li>The Rooms</li>
            <li>The Garden</li>
            <li>The Area</li>
        </ul>
        <div className='hidden md:flex'>
        <BiSearch className='mr-2' size={20} />
        <WiStars size={20} />
        </div>

        {/* Hamburger Menu */}
        {/* onClick run our handleNav function from above */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {/* this is saying if nav is true display Close else display Menu */}
            {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/* Mobile Menu Dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
            <h1>THE ROCKIN ROBBINS RANCH</h1>
            <li className='border-b'>About Us</li>
            <li className='border-b'>The Rooms</li>
            <li className='border-b'>The Garden</li>
            <li className='border-b'>The Area</li>
            <li className='border-b'>Reviews</li>
            <li className='border-b'>Contact Us</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Sky Report</button>
            </div>
            {/* <div className=''>
                <FaFacebook className='icon' />
            </div> */}
            </ul>
        </div>
    </div>
)
}

export default NavBar