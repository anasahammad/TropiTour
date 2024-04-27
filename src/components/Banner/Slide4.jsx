
import slide4Img from "../../assets/images/slide4.jpg"
const Slide4 = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${slide4Img})`}}>
<div className="hero-overlay opacity-60"></div>
<div className="hero-content  relative">
 <div className="max-w-3xl mx-auto">
   <h1 className="mb-5 text-white font-poppins text-3xl md:text-4xl lg:text-5xl font-bold">Explore the world's wonders today!</h1>
   <div className="absolute text-white  bg-red-300">
     <div className="flex ">
         <div className="border border-r-slate-50">
         <select className="select select-ghost w-full max-w-xs">
<option disabled selected>Where to go </option>
<option >
                Bangladesh
               </option>
               <option  >
               Thailand
               </option>
               <option  >
               Indonesia
               </option>
               <option >
               Malaysia
               </option>
               <option  >
               Vietnam
               </option>
               <option  >
               Cambodia
               </option>
</select>
         </div>
       
         <div className="border border-r-slate-50">
         <select className="select select-ghost w-full max-w-xs">
<option disabled selected>Travel Time </option>
<option >
               2 days
               </option>
               <option  >
              3 days
               </option>
               <option  >
               4 days
               </option>
               <option >
               5 days
               </option>
               <option  >
               6 days
               </option>
               <option  >
               7 days
               </option>
               <option  >
               More than a week
               </option>
</select>
         </div>
     
     
         <input className="btn btn-ghost" type="submit" value="Submit" />
     
     </div>
   </div>
  
 </div>
</div>
</div>
        </div>
    );
};

export default Slide4;