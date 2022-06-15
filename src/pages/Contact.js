import React from 'react'
import Footer from "../components/Footer";
import Typed from 'react-typed';
import NavBar from '../components/NavBar';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className='text-[#333]'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <div>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
            strings={['Contact Us']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
          </div>
          <h1 className='md:text-5xl sm:text-4xl text-3xl md:py-6 py-4' >
              Rockin Robbins Ranch <br/>
              430 S. 600 W. <br />
              Santaquin, UT 84655 <br />
              (801) 755-9820 <br />
              therockinrobbinsranch@gmail.com
          </h1>
          <button className='text-center w-[800px] rounded-md font-medium my-6 mx:auto py-3 text-black flex justify-center'>
          <a href='https://www.facebook.com/The-Rockin-Robbins-Ranch-255367878257909'target='_blank'>Message us On Facebook</a>
          </button>
      </div>
    </div>
    <Footer />
    </div>
);
}

export default Contact
