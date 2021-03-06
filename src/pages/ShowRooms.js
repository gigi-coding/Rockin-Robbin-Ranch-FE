import Footer from "../components/Footer";
import GardenRoom from "../components/GardenRoom";
import HunterRoom from "../components/HunterRoom";
import NavBar from "../components/NavBar";
import Tent from "../components/TentRoom";
import WrittersRoom from "../components/WrittersRoom";
import BookingInfo from "../components/BookingInfo";
const ShowRooms = () => {
    return (
        <div>
                <NavBar />
                <HunterRoom />
                <BookingInfo />
                <WrittersRoom />
                <BookingInfo />
                <GardenRoom />
                <BookingInfo />
                <Tent />
                <BookingInfo />
                {/* would prefer to grab these from the backend js file and map through them to display them instead of hard coding.. */}
                <Footer />
        </div>
        
    );
}

export default ShowRooms;