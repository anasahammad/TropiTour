import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const AddTouristSpot = () => {
    const { user } = useAuth() || {};
    
    const handleAdd = (event) => {
      event.preventDefault();
      const form = event.target;
      const spotName = form.spotName.value;
      const imageURL = form.image.value;
      const country = form.country.value;
      const location = form.location.value;
      const avgCost = form.cost.value;
      const seasonality = form.seasonality.value;
      const travelTime = form.time.value;
      const totalVisitors = form.visitors.value;
      const shortDescription = form.description.value;
      const email = user?.email;
      const name = user?.displayName;
      
      const spotInfo = {spotName, imageURL, country, location,avgCost, seasonality,travelTime, totalVisitors, shortDescription, email,  name }
      console.log(spotInfo);
      fetch('https://tropi-tour-server.vercel.app/spots', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(spotInfo)
      })
      .then(res=>res.json())
      .then(()=>{
        Swal.fire({
            title: "Congratulations",
            text: "You have added a new tourist spot",
            icon: "success"
          });
          form.reset()
      })
  
     
  
      
  
     
     
    };
  
    return (
        <div data-aos="fade-down" data-aos-duration="500" className="spotContainer mb-16 pt-10">
        <div className="shadow-lg p-5 border ">
         
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-[#FA7436]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="dark:text-white">
                Add a New Tourist Spot
              </span>
            </p>
          </div>
        
          <form onSubmit={handleAdd}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white " htmlFor="">
                  Spot Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="text"
                  placeholder="Enter the spot name"
                  id=""
                  name="spotName"
                />
  
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor=""
                >
                  Country Name
                </label>
                <select
                  name="country"
                  id=""
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="text"
                  placeholder="Select a country"
                >
                  <option selected disabled value="Select Country">Select a Country</option>
                  <option value="Bangladesh" >
                   Bangladesh
                  </option>
                  <option value="Thailand" >
                  Thailand
                  </option>
                  <option value="Indonesia" >
                  Indonesia
                  </option>
                  <option value="Malaysia" >
                  Malaysia
                  </option>
                  <option value="Vietnam" >
                  Vietnam
                  </option>
                  <option value="Cambodia" >
                  Cambodia
                  </option>
                </select>
  
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor=""
                >
                  Avarage Cost
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="number"
                  placeholder="Enter avarage cost"
                  id=""
                  name="cost"
                />

<label className="block mb-2 dark:text-white">
                  Travel Time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="text"
                  placeholder="Enter travel time"
                  id=""
                  name="time"
                />
              </div>
            
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="">
                   Image URL
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="text"
                  placeholder="Enter spot image url"
                  id=""
                  name="image"
                />
                <label className="block mb-2 mt-4 dark:text-white" htmlFor="">
                  Location
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="text"
                  placeholder="Enter location"
                  id=""
                  name="location"
                />
  
                <label
                  className="block mt-4 mb-2 dark:text-white" htmlFor=""
                >
                  Seasonality
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                 type="text" name="seasonality" placeholder="Enter seasonality"
                />

<label className="block mb-2 dark:text-white" htmlFor="">
                  Total Visitors
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="text"
                  placeholder="Enter visitors/year"
                  id=""
                  name="visitors"
                />
              </div>
            </div>
            <label className="block mb-2 dark:text-white" htmlFor="">
                  Short Description
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FA7436]"
                  type="text"
                  placeholder="Enter short description"
                  id=""
                  name="description"
                />  
            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#FA7436]  bg-[#FA7436] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Spot"
            />
          </form>
        </div>
      </div>
    );
};

export default AddTouristSpot;