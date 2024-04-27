import Banner from "../components/Banner/Banner";
import Countries from "../components/Countries";
import TouristSpot from "../components/TouristSpot";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="spotContainer mx-auto">
            <TouristSpot/>
            <Countries/>
            </div>
            
           
        </div>
    );
};

export default Home;