import { useEffect, useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { Link, useLoaderData, useParams } from "react-router-dom";

const SpotByCountry = () => {
    const [allData, setAllData] = useState()
    const {countryName} = useParams()
    console.log(countryName);
    useEffect(()=>{
        fetch(`http://localhost:5000/spots`)
        .then(res=> res.json())
        .then(data=> {
            setAllData(data)
        })
    }, [])

    const filterData = allData?.filter(item=> item.country=== countryName)
    
    return (
        <div className="spotContainer">
           
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-4xl ligth:text-[#222] font-bold dark:text-white">All Tourist Spots of <span className="text-[#FA7436]">{countryName}</span></h1>

            <p className="my-3">Explore the vibrant allure of <span>{countryName}</span> top tourist spots.Dive into its rich culture and natural beauty</p>
            </div>
            
            <div className="grid my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                {
                    filterData?.map(item=> <div key={item._id} className="max-w-xs flex flex-col  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={item.imageURL} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-4 space-y-8">
                        <div className="space-y-2 flex-grow">
                            <h2 className="text-2xl font-semibold tracking-wide ">{item.spotName}</h2>
                            <p className="dark:text-gray-800">{item.shortDescription?.slice(0, 100)}</p>
                        </div>
                        <div className="divider"></div>

                        <div>
                            <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <FaGlobeAmericas/>
                                <span>{item.country}</span>
                            </div>
                            <div className="flex items-center gap-2">
                            <IoLocationSharp/>
                                <span>{item.location}</span>
                            </div>
                            
                            </div>

                            <div className="flex justify-between">
                              <h1 className="text-3xl text-[#FA7436] font-bold">${item?.avgCost}/avg</h1>
                              <div className="flex items-center gap-2 text-[#7D7D7D] text-xl ">
                                  <TbCalendarTime/>
                                  <h2 >{item?.seasonality}</h2>
                              </div>
                              
                          </div>
                           
                        </div>
                        <div className="flex-grow">
                            <Link to={`/spot-details/${item?._id}`}>
                            <button type="button" className="flex btn items-center justify-center w-full p-3 font-semibold tracking-wide  rounded-md bg-[#4086F4]  text-white
                        dark:bg-violet-600 dark:text-gray-50">View Details</button>
                            </Link>
                        
                        </div>
                      
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default SpotByCountry;