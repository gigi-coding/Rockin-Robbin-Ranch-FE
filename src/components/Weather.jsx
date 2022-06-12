import React from 'react'
// import axios from 'axios';


const api = {
    key: 'aa2ed97819ca2cd9671c10f2cfce762c',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function Weather() {

    const dateBuilder = (date) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        let day = days[date.getDay()];
        let theDate = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();

        return `${day} ${theDate} ${month} ${year}`
    }

    return (
    // <div className='p-0 m-0 border-box'>
    <div className='weather'>
        <main>
            <div className='search-box'>
                <input
                    type='text'
                    clasname='search-bar'
                    placeholder='Search..'
                />
            </div>
            <div className='location-box'>
                <div className=''>Santaquin, UT</div>
                <div className=''>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
                <div className='temp'></div>
                <div className='theWeather'>Sunny</div>
            </div>
        </main>
    </div>
    )
}

export default Weather