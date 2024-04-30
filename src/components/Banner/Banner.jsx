import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className="w-full overflow-hidden">
<div>
<Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
         
        }}
        keyboard={{
            enebled: true
        }}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Autoplay, Pagination, Keyboard]}
        className="mySwiper "
      >
        <SwiperSlide> <Slide1/></SwiperSlide>
        <SwiperSlide>  <Slide2/></SwiperSlide>
        <SwiperSlide>  <Slide3/></SwiperSlide>
        <SwiperSlide> <Slide4/></SwiperSlide>
        </Swiper>
</div>

           
          
           
           
        </div>
    );
};

export default Banner;