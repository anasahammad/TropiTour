import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

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