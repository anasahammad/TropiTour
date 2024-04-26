import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
const TouristSpot = () => {
    return (
        <div className=" ">
            <div className="flex justify-center font-poppins">
                <h1 className="text-5xl text-[#222] font-bold">The <span className="text-[#FA7436]"> best tourist spot</span> for vacation</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card my-6 card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="h-[313px]" /></figure>
  <div className="card-body">
   

    <div className="flex justify-between">
        <div className="text-lg flex items-center gap-2 text-[#7D7D7D]">
            <HiOutlineCalendarDays/>
            <h4>7 days</h4>
        </div>
        <div className="text-lg flex items-center gap-2 text-[#7D7D7D]">
            <MdPeopleOutline/>
            <h4>Total visitors : 1000</h4>
        </div>
    </div>

    <div>
        <h1 className="text-3xl font-bold ">Phi Phi Islands</h1>
    </div>
    <div className="flex justify-between">
    <div className="flex items-center  text-xl">
        <IoLocationSharp/>
        <h3>Cox's Bazar</h3>
   </div>

   <div className="flex items-center gap-2 text-lg">
    <FaGlobeAmericas/>
    <h1>Bangladesh</h1>
   </div>
    </div>

        <div className="flex justify-between">
            <h1 className="text-3xl text-[#FA7436] font-bold">$5000/avg</h1>
            <div className="flex items-center gap-2 text-[#7D7D7D] text-xl ">
                <TbCalendarTime/>
                <h2 >Summer</h2>
            </div>
            
        </div>

        <div className="divider"></div>

        <div className="flex justify-center items-center flex-grow">
            <button className="btn bg-[#FA7436] text-white">View Details</button>
        </div>
  </div>
</div>
            </div>
           

        </div>
    );
};

export default TouristSpot;