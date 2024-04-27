import Countries from "../components/Countries";
import TouristSpot from "../components/TouristSpot";

const Home = () => {
    return (
        <div className="spotContainer mx-auto">
            <h1>This is Home</h1>
            <TouristSpot/>
            <Countries/>
        </div>
    );
};

export default Home;