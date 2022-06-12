import { Parallax } from 'react-parallax';
import GardenSuite from '../assets/TheGardenSuite.jpeg'

const GardenRoom = () => (
    <Parallax className='parallaxImage' bgImage={GardenSuite} bgImageAlt="Garden Suite" strength={800}>
        <div className='content'>
            <span className='img-text'>The Garden Suite</span>
        </div>
        {/* pass in data from rooms.js from backend */}
    </Parallax>
);

export default GardenRoom