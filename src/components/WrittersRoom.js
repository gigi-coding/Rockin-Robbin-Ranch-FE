import { Parallax } from 'react-parallax';
// import HuntersDen from '../assets/HuntersDen.jpeg'
import WrittersRetreat from '../assets/WrittersRetreat.jpeg'

const WrittersRoom = () => (
    <Parallax className='parallaxImage' bgImage={WrittersRetreat} bgImageAlt="Writter's Retreat" strength={800}>
        <div className='content'>
            <span className='img-text'>The Writter's Retreat</span>
        </div>
        {/* pass in data from rooms.js from backend */}
    </Parallax>
);

export default WrittersRoom