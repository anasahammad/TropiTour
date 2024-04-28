import Lottie from "lottie-react";
import animation404 from "../assets/404.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-full mt-6 bg-white items-center flex justify-center px-5 lg:px-0">
      <div className="w-[415px] text-center flex-col items-center justify-center mx-auto gap-[100px]">
        <div className="md:my-8 ">
          <div className="max-w-[312px]  w-full h-[120px] relative flex justify-center items-center mx-auto">
          <Lottie className="w-[200px] md:w-[350px]" loop={true} animationData={animation404} />
          </div>
        </div>
        <div>
          <h3 className="text-4xl md:text-[56px] leading-[64px] text-[#1A1C16]">
            Page Not Found
          </h3>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <div className="text-center">
            <p className="text-base leading-6 tracking-wider font-sans">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
          </div>
          <div>
            <Link to="/">
            <button className="bg-[#FA7436] text-white font-sans max-w-[146px] w-full h-[48px] rounded-[100px] font-medium text-sm">
              Home Page
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;