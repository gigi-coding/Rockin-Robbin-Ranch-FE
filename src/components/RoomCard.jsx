import React from 'react'

function RoomCard(props) {
    return (
                <div className='relative'>
            <img src={props.bg} alt='/' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    {props.bg}
                    {/* props above should be displaying name of Room but it's not... figure this out!  */}
                </p>
            </div>
        </div>
    )
}

export default RoomCard