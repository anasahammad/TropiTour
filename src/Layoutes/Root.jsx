import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


// ..
AOS.init();
const Root = () => {
    return (
        <div >
            <Navbar/>
           
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;