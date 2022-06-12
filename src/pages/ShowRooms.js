import Footer from "../components/Footer";
import GardenRoom from "../components/GardenRoom";
import HunterRoom from "../components/HunterRoom";
import NavBar from "../components/NavBar";
import Tent from "../components/TentRoom";
import WrittersRoom from "../components/WrittersRoom";

const ShowRooms = () => {
    return (
        <div>
                <NavBar />
                <HunterRoom />
                <WrittersRoom />
                <GardenRoom />
                <Tent />
                <Footer />
        </div>
        
    );
}

export default ShowRooms;