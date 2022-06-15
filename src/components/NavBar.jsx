import React, {useState} from 'react'
import {WiStars} from 'react-icons/wi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [nav, setNav] = useState(false); 
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
        // ! means to set to the opposite of what it currently is
    }
    return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-grey-darker'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Rosestone Rentals</h1>
        </div>
        <ul className='hidden md:flex'>
            <li> <Link to='/'>Home</Link></li>
            <li><Link to='/rooms'>The Rooms</Link></li>
            <li><Link to='/garden'>The Garden</Link></li>
            <li><Link to='/area'>The Area</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        <div className='hidden md:flex'>
        <WiStars className='mr-2' size={20} />
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
            <li className='border-b'><Link to='/about'>About</Link></li>
            <li className='border-b'><Link to='/rooms'>The Rooms</Link></li>
            <li className='border-b'><Link to='/garden'>The Garden</Link></li>
            <li className='border-b'><Link to='/area'>The Area</Link></li>
            {/* <li className='border-b'><Link to='/winter'>Winter Fun</Link></li> */}
            <li className='border-b'><Link to='/reviews'>Reviews</Link></li>
            <li className='border-b'><Link to='/contact'>Contact Us</Link></li>
            <div className='flex flex-col'>
                <button className='my-6'>Sky Report</button>
            </div>
            </ul>
        </div>
    </div>
)
}

export default NavBar