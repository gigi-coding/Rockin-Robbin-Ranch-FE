import React from 'react'
import {FaAirbnb} from 'react-icons/fa'

const BookingInfo = () => {
  return (
    <div className='booking-info'>
        <h2>Check Availability for your Trip!</h2>
        <h1>
            <a className='iconA flex justify-center' href='https://www.airbnb.com/rooms/32956503?adults=2&children=0&infants=0&check_in=2022-08-04&check_out=2022-08-11&federated_search_id=7f7347fe-1d8a-4226-85cd-094a6db0c3b1&source_impression_id=p3_1655128834_1laGy0ZVRih0P4NC'>
            <FaAirbnb/> 
            </a>
        </h1>
    </div>
  )
}

export default BookingInfo