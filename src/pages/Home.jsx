import Banner from "../components/Banner/Banner";
import Countries from "../components/Countries";
import Testimonial from "../components/Testimonial";
import TouristSpot from "../components/TouristSpot";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="spotContainer mx-auto">
            <TouristSpot/>
            <Countries/>
            <Testimonial/>
            </div>
            
           
        </div>
    );
};

export default Home;