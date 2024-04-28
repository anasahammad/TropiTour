import { useEffect, useState } from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import loadingImg from "../assets/images/images.png"
import { TbCalendarTime } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AllTouristSpot = () => {
    const [allSpots, setAllSpots] = useState([])
    const {setLoading} = useAuth() || {}
    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res=> res.json())
        .then(data=> {
            setAllSpots(data)
            setLoading(true)
        })
    }, [])

    const handleSort = (e)=>{
        if(e.target.value === "avgCost" ){
            let sortSpot =[...allSpots].sort((a, b)=> a.avgCost - b.avgCost)
            setAllSpots(sortSpot)
        }
    }
    return (
        <div className="spotContainer mb-16">

<div className="text-center my-8">
<select onChange={handleSort}  className="select select-ghost w-full max-w-xs border-2  border-red-600 focus:border-[#FA7436]">
  <option disabled selected>Find a Spot by avarage low cost</option>
  <option value="avgCost">Avarage Cost</option>
  
</select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    allSpots.map(spot=><div key={spot?._id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                    <img src={spot?.imageURL} alt={spot?.spotName} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                          <div className=" flex items-center gap-2 text-[#7D7D7D]">
                              <HiOutlineCalendarDays/>
                              <h4>{spot?.travelTime}</h4>
                          </div>
                          <div className=" flex items-center gap-2 text-[#7D7D7D]">
                              <MdPeopleOutline/>
                              <h4>Total visit : {spot?.totalVisitors}/Year</h4>
                          </div>

                      </div>

                      <div className="my-3">
                          <h1 className="text-2xl font-bold ">{spot?.spotName}</h1>
                      </div>

                      
                      <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                              <h1 className="text-3xl text-[#FA7436] font-bold">${spot?.avgCost}/avg</h1>
                              <div className="flex items-center gap-2 text-[#7D7D7D] text-xl ">
                                  <TbCalendarTime/>
                                  <h2 >{spot?.seasonality}</h2>
                              </div>
                              
                          </div>

                          <div className="my-3 flex-grow">
                            <Link to={`/spot-details/${spot?._id}`}>
                            <button className="btn bg-[#FA7436] text-white rounded-xl">View Details</button>
                            </Link>
                          </div>
                    </div>
                   
                </div>)
                }
            </div>
            
        </div>
    );
};

export default AllTouristSpot;