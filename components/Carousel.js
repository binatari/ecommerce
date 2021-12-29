import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Carousel = () => {
  return (
    <div className="w-full col-start-1 col-end-4 h-[90vh] relative">
      
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <img
            src="/images/avi.png"
            className="absolute object-cover object-bottom w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/engin.png"
            className="absolute object-cover object-bottom w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/josh.png"
            className="absolute object-cover object-bottom w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/victor.png"
            className="absolute object-cover object-bottom w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col absolute top-[40%] left-0 pl-2 sm:pl-10 z-10">
        <h1 className="text-blue-500 text-6xl 2xl:text-8xl">Welcome to X-store</h1>
        <span className="text-2xl text-white 2xl:text-4xl">Your one stop shop for audio gadgets</span>
      </div>
    </div>
  );
};

export default Carousel;
