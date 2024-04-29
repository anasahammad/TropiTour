import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristSpot = () => {
    const [allSpots, setAllSpots] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res=> res.json())
        .then(data=> {
            setAllSpots(data)
           
        })
    }, [])
    console.log(allSpots);
    return (
        <div className="my-16 ">
            <div className="flex justify-center font-poppins">
                <h1 data-aos="fade-right" className="text-3xl md:text-4xl lg:text-4xl ligth:text-[#222] font-bold dark:text-white">The <span className="text-[#FA7436]"> best tourist spot</span> for vacation</h1>
            </div>

            <div  className="grid gap-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    allSpots.slice(0, 6).map(spot=><div data-aos="fade-up-left" key={spot._id} className="card  my-6 card-compact  bg-base-100 shadow-xl">
                    <figure><img src={spot?.imageURL} alt={spot?.spotName} className="h-[313px]" /></figure>
                    <div className="card-body flex-grow">
                     
                  
                      <div className="flex flex-col md:flex-row justify-between">
                          <div className="text-lg flex items-center gap-2 text-[#7D7D7D]">
                              <HiOutlineCalendarDays/>
                              <h4>{spot?.travelTime}</h4>
                          </div>
                          <div className="text-lg flex items-center gap-2 text-[#7D7D7D]">
                              <MdPeopleOutline/>
                              <h4>Total visitors : {spot?.totalVisitors}</h4>
                          </div>
                      </div>
                  
                      <div>
                          <h1 className="text-3xl font-bold ">{spot?.spotName}</h1>
                      </div>
                      <div className="flex justify-between">
                      <div className="flex items-center  text-base">
                          <IoLocationSharp/>
                          <h3>{spot?.location}</h3>
                     </div>
                  
                     <div className="flex items-center gap-2 text-base">
                      <FaGlobeAmericas/>
                      <h1>{spot?.country}</h1>
                     </div>
                      </div>
                  
                          <div className="flex justify-between">
                              <h1 className="text-3xl text-[#FA7436] font-bold">${spot?.avgCost}/avg</h1>
                              <div className="flex items-center gap-2 text-[#7D7D7D] text-xl ">
                                  <TbCalendarTime/>
                                  <h2 >{spot?.seasonality}</h2>
                              </div>
                              
                          </div>
                  
                          <div className="divider"></div>
                  
                          <div className="flex justify-center items-center flex-grow">
                            <Link to={`/spot-details/${spot?._id}`}>
                              <button className="btn bg-[#FA7436] text-white">View Details</button>
                            </Link>
                          </div>
                    </div>
                  </div> )
                }
            
            </div>
           
           {
            allSpots.length > 6 &&  <div className="flex justify-center items-center">
            <Link to="/all-tourist-spot">
            <button className="btn bg-[#FA7436] text-white">See More</button>
            </Link>
        </div>
           }
               
        </div>
    );
};

export default TouristSpot;