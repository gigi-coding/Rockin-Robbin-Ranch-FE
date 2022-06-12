import { Parallax } from 'react-parallax';
import Tent from '../assets/Tent.jpeg'

const TentRoom = () => (
    <Parallax className='parallaxImage' bgImage={Tent} bgImageAlt="Tent" strength={800}>
        <div className='content'>
            <span className='img-text'>The Tent</span>
        </div>
        {/* pass in data from rooms.js from backend */}
    </Parallax>
);

export default TentRoom