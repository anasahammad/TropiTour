import { useEffect, useState } from "react";
import { FcGlobe } from "react-icons/fc";
import { Link } from "react-router-dom";


const Countries = () => {
    const [countries, setCountries] = useState([])
   

    useEffect(()=>{
        fetch('https://tropi-tour-server.vercel.app/countries')
        .then(res=> res.json())
        .then(data=> {
            setCountries(data)
            
        })
    }, [])
    // console.log(countries);
    return (
        <div className="my-12 font-poppins">
            <div className="flex flex-col mb-10">
                <p className="text-3xl mb-3 flex gap-2 items-center">  <FcGlobe/> <span className="text-[#4086F4]">Top Countries</span></p>
          
                <h1 className="text-[38px] font-bold   ">Explore Spots by Country</h1>
            </div>
            <div className="grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-3">

            {
                countries.map(country=> <div data-aos="fade-up-right"
                 key={country._id} className="max-w-xs mx-auto flex flex-col  rounded-md shadow-md  ">
                <img src={country.imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                <div className="flex flex-col justify-between p-4 space-y-8">
                    <div className="space-y-2 flex-grow">
                        <h2 className="text-3xl font-semibold tracking-wide ">{country.countryName}</h2>
                        <p className="">{country.description}</p>
                    </div>
                    <div className="flex-grow">
                        <Link to={`/countries/${country.countryName}`}>
                        <button type="button" className="flex btn items-center justify-center w-full p-3 font-semibold tracking-wide  rounded-md bg-[#4086F4]  text-white
                     dark:text-gray-50">See Tourist Spot</button>
                        </Link>
                    
                    </div>
                  
                </div>
            </div>)
            }
            </div>
         
        </div>
    );
};

export default Countries;