import React, { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import dtm from "@/images/usefull-links/dtm.png";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const UseFullLinks: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <section className="section-usefullLinks">
        <div className="container">
          <div className="section-title">
            <h3 className="title">foydali manbalar</h3>
          </div>
          <div
            className="section-inner"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Swiper
              modules={[Navigation]}
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
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
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={dtm} alt="" />
                <p>Milliy axborot - tahlil markazi</p>
              </SwiperSlide>
            </Swiper>
            <div className="custom-navigation">
              <button ref={prevRef} className="custom-prev">
                <IoIosArrowBack size={24} />
              </button>
              <button ref={nextRef} className="custom-next">
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseFullLinks;
