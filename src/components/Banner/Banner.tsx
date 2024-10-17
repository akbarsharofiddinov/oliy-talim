import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass, NavigationOptions } from "swiper/types";

// import required modules
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import banner1 from "@/images/banner/banner-1.jpg";
import banner2 from "@/images/banner/banner-2.jpg";
import banner3 from "@/images/banner/benner-3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Banner: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <section className="section-banner">
        <div className="container">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            speed={2000}
            autoplay={{ delay: 5000 }}
            loop={true}
            modules={[EffectCreative, Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            className="banner-swiper"
            onSwiper={(swiper: SwiperClass) => {
              setTimeout(() => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  const navigationParams = swiper.params
                    .navigation as NavigationOptions;
                  navigationParams.prevEl = prevRef.current;
                  navigationParams.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
          >
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner3} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="custom-navigation">
            <button ref={prevRef} className="custom-prev">
              <FaArrowLeft size={24} />
            </button>
            <button ref={nextRef} className="custom-next">
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
