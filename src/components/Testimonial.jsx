import qutetion from "../assets/images/Quotations.png"
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import person3 from "../assets/images/person3.png"
import person4 from "../assets/images/person4.png"
import amazon from "../assets/icons/Amazon Logo.svg"
import fedx from "../assets/icons/FedEx Logo.svg"
import google from "../assets/icons/Google Logo.svg"
import airnb from "../assets/icons/Airbnb Logo.svg"
import ola from "../assets/icons/OLA logo.svg"
import oyo from "../assets/icons/OYO Logo.svg"
import walmart from "../assets/icons/Walmart Logo.svg"

const Testimonial = () => {
    return (
        <div className=" my-20">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-4xl  font-bold ">See What Our <span className="text-[#FA7436]">Clients Say</span> About Us</h1>
            </div>

            <div>
                <div className="my-6">
                    <img className="w-[32px]" src={qutetion} alt="" />
                </div>
                        {/* Testimonial Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="max-w-xs p-6 mx-auto  rounded-md shadow-md">
	
	
	<p className="">Wow, what a fun vacation with
Oelinken, guided by professional
people</p>

<div className="flex gap-4 items-center mt-8">
<img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 " src={person1} />
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

                    <div className="max-w-xs mx-auto p-6 rounded-md shadow-md ">
	
	
	<p className="">It's an amazing experience to be
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

                    <div className="max-w-xs mx-auto p-6 rounded-md shadow-md ">
	
	
	<p className="">At first I was lazy but that thought
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

                    <div className="max-w-xs mx-auto p-6 rounded-md shadow-md">
	
	
	<p className="">New story in my life, really amazing
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

            <section className="p-6 my-10  ">
	<div className="container p-4 mx-auto text-center">
		<h2 className=" text-4xl lg:text-5xl font-bold "><span className="text-[#FA7436]">Trusted by</span> the industry leaders </h2>
	</div>
	<div className="container flex flex-wrap justify-center mx-auto dark:text-gray-600">
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<img src={amazon} className="w-18 h-18" alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M9.438 31.401c-0.63-0.422-1.193-0.938-1.656-1.536-0.516-0.615-0.984-1.266-1.422-1.938-1.021-1.495-1.818-3.125-2.375-4.849-0.667-2-0.99-3.917-0.99-5.792 0-2.094 0.453-3.922 1.339-5.458 0.651-1.198 1.625-2.203 2.797-2.906 1.135-0.708 2.453-1.094 3.786-1.12 0.469 0 0.974 0.068 1.51 0.198 0.385 0.109 0.854 0.281 1.427 0.495 0.729 0.281 1.13 0.453 1.266 0.495 0.427 0.156 0.786 0.224 1.068 0.224 0.214 0 0.516-0.068 0.859-0.172 0.193-0.068 0.557-0.188 1.078-0.411 0.516-0.188 0.922-0.349 1.245-0.469 0.495-0.146 0.974-0.281 1.401-0.349 0.521-0.078 1.036-0.104 1.531-0.063 0.948 0.063 1.813 0.266 2.589 0.557 1.359 0.547 2.458 1.401 3.276 2.615-0.349 0.214-0.667 0.458-0.969 0.734-0.651 0.573-1.198 1.25-1.641 2.005-0.573 1.026-0.865 2.188-0.859 3.359 0.021 1.443 0.391 2.714 1.12 3.813 0.521 0.802 1.208 1.484 2.047 2.047 0.417 0.281 0.776 0.474 1.12 0.604-0.161 0.5-0.333 0.984-0.536 1.464-0.464 1.078-1.016 2.109-1.667 3.083-0.578 0.839-1.031 1.464-1.375 1.88-0.536 0.635-1.052 1.12-1.573 1.458-0.573 0.38-1.25 0.583-1.938 0.583-0.469 0.021-0.932-0.042-1.38-0.167-0.385-0.13-0.766-0.271-1.141-0.432-0.391-0.177-0.792-0.333-1.203-0.453-0.51-0.135-1.031-0.198-1.552-0.198-0.536 0-1.057 0.068-1.547 0.193-0.417 0.12-0.818 0.26-1.214 0.432-0.557 0.234-0.927 0.391-1.141 0.458-0.427 0.125-0.87 0.203-1.318 0.229-0.693 0-1.339-0.198-1.979-0.599zM18.578 6.786c-0.906 0.453-1.771 0.646-2.63 0.583-0.135-0.865 0-1.75 0.359-2.719 0.318-0.828 0.745-1.573 1.333-2.24 0.609-0.693 1.344-1.266 2.172-1.677 0.88-0.453 1.719-0.698 2.521-0.734 0.104 0.906 0 1.797-0.333 2.76-0.307 0.854-0.76 1.641-1.333 2.344-0.583 0.693-1.302 1.266-2.115 1.682z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <img src={google} className="w-18 h-18" alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <img src={airnb} className="w-18 h-18" alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<img src={fedx} className="w-18 h-18" alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <img src={ola} className="w-18 h-18" alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <img src={oyo} className="w-18 h-18" alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <img src={walmart} className="w-18 h-18" alt="" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Testimonial;