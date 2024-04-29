
import { FcRating } from "react-icons/fc";
import icon2 from "../assets/images/Icon.svg"
import icon1 from "../assets/images/9 (1).svg"
import picture1 from "../assets/images/picture1.png"
import picture2 from "../assets/images/picture2.jpg"

import picture3 from "../assets/images/picture3.png"
import picture4 from "../assets/images/picture4.jpg"
import picture5 from "../assets/images/picture5.jpg"
import picture6 from "../assets/images/picture6.jpg"
import picture7 from "../assets/images/picture7.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import { Autoplay, Pagination } from 'swiper/modules';

const WhyChoseUs = () => {
    return (
        <div className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex   flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-4xl  font-bold ">Why <span className="text-[#FA7436]">Choose</span> Us</h1>
            <p className="my-3">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
            <div>
            <button className="btn btn-outline btn-error">Learn More</button>
            </div>
           
            </div> 

            <div className="flex flex-col px-4  dark:bg-gray-50 dark:text-gray-900">
                <FcRating className="w-[60px] h-[60px]"/>
                <h1 className="text-lg font-semibold my-3">Best Travel Management System</h1>
                <p>Best Travel management system that provide one way, and multi trip services.</p>
            </div>
            <div className="flex flex-col px-4 dark:bg-gray-50 dark:text-gray-900">
               <img src={icon1} alt="" className="w-[60px] h-[60px]" />
              
                <h1 className="text-lg font-semibold my-3">Competitive Price</h1>
                <p>The price offered are affordable starting from the ordinary to the exclusive.</p>
            </div>
            <div className="flex flex-col px-4 dark:bg-gray-50 dark:text-gray-900">
               <img src={icon2} alt="" className="w-[60px] h-[60px]" />
              
                <h1 className="text-lg font-semibold my-3">Global Coverage</h1>
                <p>There are many tourist attractions, hotels and interesting entertainment.</p>
            </div>

            <div>

            </div>
            </div>
         
         <div className="my-10">
         <Swiper
        slidesPerView={1}
        spaceBetween={9}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
            <img src={picture1} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={picture3} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={picture2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={picture4} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={picture5} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={picture6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={picture7} alt="" />
        </SwiperSlide>
      </Swiper>
         </div>
        </div>
    );
};

export default WhyChoseUs;