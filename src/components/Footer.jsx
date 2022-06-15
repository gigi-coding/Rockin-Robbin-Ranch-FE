import React from 'react'
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa'
import { ImFacebook2 } from 'react-icons/im'
// import { TbPhone } from 'react-icons/tb'



function Footer() {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'> 
                    <h1 className='icon flex justify-left w-full sm:max-w-[280px] my-4'>
                        <a href='https://www.facebook.com/The-Rockin-Robbins-Ranch-255367878257909'>
                        <ImFacebook2/> 
                        </a>
                        ollow Us!
                    </h1>
                    <h3>
                        Rockin Robbins Ranch <br/>
                        430 S. 600 W. <br />
                        Santaquin, UT 84655 <br />
                    </h3>
                    <div className='text-gray'>
                        <div>
                        In Development by:
                        </div>
                        <h3>Gigi Brigitte</h3>
                        <div className='flex justify-evenly text-4xl'>
                        <a href="https://www.linkedin.com/in/brigitte-quintero/"><FaLinkedin/></a>
                        <a href="https://github.com/gigi-coding"><FaGithubAlt/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer