import React from 'react'
import Tent from '../assets/Tent.jpeg';
import GardenSuite from '../assets/GardenSuite.jpeg';
import HuntersDen from '../assets/HuntersDen.jpeg';
import WrittersRetreat from '../assets/WrittersRetreat.jpeg';
import RoomCard from './RoomCard';

function Rooms() {
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <h1>Available Rooms</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4  py-4 gap-4'>
                <RoomCard bg={GardenSuite} text='' />
                <RoomCard bg={HuntersDen} text='' />
                <RoomCard bg={WrittersRetreat} text='' />
                <RoomCard bg={Tent} text='' />
                {/* prefer to pass backend data if we can get to it  */}
            </div>
        </div>
    )
}

export default Rooms