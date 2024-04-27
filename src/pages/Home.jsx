import Banner from "../components/Banner/Banner";
import Countries from "../components/Countries";
import Testimonial from "../components/Testimonial";
import TouristSpot from "../components/TouristSpot";
import WhyChoseUs from "../components/WhyChoseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="spotContainer mx-auto">
            <TouristSpot/>
            <Countries/>
            <WhyChoseUs/>
            <Testimonial/>
            </div>
            
           
        </div>
    );
};

export default Home;