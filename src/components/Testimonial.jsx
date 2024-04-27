import qutetion from "../assets/images/Quotations.png"
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import person3 from "../assets/images/person3.png"
import person4 from "../assets/images/person4.png"


const Testimonial = () => {
    return (
        <div className="bg-[
            #CCCCCC] my-20">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-4xl ligth:text-[#222] font-bold dark:text-white">See What Our <span className="text-[#FA7436]">Clients Say</span> About Us</h1>
            </div>

            <div>
                <div className="my-6">
                    <img className="w-[32px]" src={qutetion} alt="" />
                </div>
                        {/* Testimonial Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="max-w-xs p-6  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	
	
	<p className="dark:text-gray-800">Wow, what a fun vacation with
Oelinken, guided by professional
people</p>

<div className="flex gap-4 items-center mt-8">
<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={person1} />
<div>
        <h4 className="font-medium font-poppins">Benjamin</h4>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
</div>
</div>
</div>
</div>

                    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	
	
	<p className="dark:text-gray-800">It's an amazing experience to be
able to vacation to a new place,
thank you Oelinken</p>

<div className="flex gap-4 items-center mt-8">
<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={person2} />
<div>
        <h4 className="font-medium font-poppins">Annette Black</h4>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
</div>
</div>
</div>
</div>

                    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	
	
	<p className="dark:text-gray-800">At first I was lazy but that thought
disappeared after being accompanied
by a pleasant guide</p>

<div className="flex gap-4 items-center mt-8">
<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={person3} />
<div>
        <h4 className="font-medium font-poppins">Karthik</h4>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
</div>
</div>
</div>
</div>

                    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	
	
	<p className="dark:text-gray-800">New story in my life, really amazing
and also affordable and most easy with browsing.</p>

<div className="flex gap-4 items-center mt-8">
<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={person4} />
<div>
        <h4 className="font-medium font-poppins">Guy Hawkins</h4>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 h-4 bg-orange-400" />
</div>
</div>
</div>
</div>
                    </div>
            </div>
        </div>
    );
};

export default Testimonial;