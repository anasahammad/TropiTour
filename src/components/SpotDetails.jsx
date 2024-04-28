import { useEffect, useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SpotDetails = () => {
    const {id} = useParams()
    // console.log(id);
	const {setLoading} = useAuth() || {}
    const [allSpots, setAllSpots] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res=> res.json())
        .then(data=> {
            setAllSpots(data)
			setLoading(true)
        })
    }, [])

    const singleSpot = allSpots.find(spot=> spot._id === id)
    const {spotName, imageURL, country, location, avgCost, seasonality,travelTime, totalVisitors, shortDescription} = singleSpot || {};
    return (
        <div className="spotContainer">
          <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex border items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={imageURL} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		<div className="flex items-center gap-2 text-base">
                      <FaGlobeAmericas/>
                      <h1>{country}</h1>
                     </div>
			<h1 className="text-3xl font-bold leading-none sm:text-4xl">
				{spotName}
			</h1>

			<div className="flex flex-col md:flex-row w-full mt-4 gap-4">
				<div>
					<h4 className="text-lg ">Total Visitors: <span className="text-orange-400">{totalVisitors}/Year</span></h4>
				</div>
				
				<div>
					<h4 className="text-lg">Travel Time : {travelTime}</h4>
				</div>
			</div>

			<div className="flex gap-1 items-center  text-base">
                          <IoLocationSharp/>
                          <h3>{location}</h3>
                     </div>
			
			<p className="mt-6 mb-8 text-lg sm:mb-12">
				{shortDescription?.slice(0, 180)}
			</p>

			<h2>Seasionality : <span className="text-orange-500">{seasonality}</span></h2>
			<div className="divider"></div>
			<div className="flex flex-col md:flex-row gap-4 justify-between items-center">
			<h1 className="text-3xl  font-bold"> Cost: <span className="text-[#FA7436]">${avgCost}/avg</span></h1>

			<Link to="/">
				<button className="btn bg-[#FA7436] text-white">Back to Home</button>
			</Link>
			</div>
		</div>
	</div>
</section> 
        </div>
    );
};

export default SpotDetails;