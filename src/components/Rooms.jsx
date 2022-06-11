import React from 'react'
import Tent from '../assets/Tent.jpeg';
import GardenSuite from '../assets/GardenSuite.jpeg';
import HuntersDen from '../assets/HuntersDen.jpeg';
import WrittersRetreat from '../assets/WrittersRetreat.jpeg';
import RoomCard from './RoomCard';

function Rooms() {
    return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <RoomCard bg={GardenSuite} text='Garden Suite' />
        <RoomCard bg={HuntersDen} text='Garden Suite' />
        <RoomCard bg={WrittersRetreat} text='Garden Suite' />
        <RoomCard bg={Tent} text='Garden Suite' /> 
        {/* prefer to pass backend data if we can get to it  */}
    </div>
    )
}

export default Rooms