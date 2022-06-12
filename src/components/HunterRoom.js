import { Parallax } from 'react-parallax';
import HuntersDen from '../assets/theHuntersDen.jpeg'

const HunterRoom = () => (
    <Parallax className='parallaxImage' bgImage={HuntersDen} bgImageAlt="Hunters Den" strength={800}>
        <div className='content'>
            <span className='img-text'>The Hunter's Den</span>
        </div>
        {/* pass in data from rooms.js from backend */}
    </Parallax>
);

export default HunterRoom