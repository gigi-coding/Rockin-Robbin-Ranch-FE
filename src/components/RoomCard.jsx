import React from 'react'

function RoomCard(props) {
    return (
        <div className='relative'>
            <img className=''w-full h-full object-cover src={props.bg} alt='/' />
            {/* some images are not covering full container! */}
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    {/* {props.bg} */}
                    {/* props above should be displaying name of Room but it's not... figure this out!  */}
                </p>
            </div>
        </div>
    )
}

export default RoomCard