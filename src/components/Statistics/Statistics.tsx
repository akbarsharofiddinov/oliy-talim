import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

const Statistics: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <section className="section-statistics">
        <div className="container">
          <div className="section-title">
            <h3 className="title">asosiy ko'rsatkichlar</h3>
          </div>
          <div className="section-inner">
            <Swiper
              slidesPerView={4}
              spaceBetween={60}
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
              modules={[Navigation]}
              autoplay={{
                delay: 3000,
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
                <div data-aos="flip-left">
                  <h3>22</h3>
                  <p>Lorem, ipsum.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="flip-left">
                  <h3>41</h3>
                  <p>Lorem, ipsum.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="flip-left">
                  <h3>38</h3>
                  <p>Lorem, ipsum.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="flip-left">
                  <h3>12</h3>
                  <p>Lorem, ipsum.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="flip-left">
                  <h3>53</h3>
                  <p>Lorem, ipsum.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="flip-left">
                  <h3>34</h3>
                  <p>Lorem, ipsum.</p>
                </div>
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

export default Statistics;
