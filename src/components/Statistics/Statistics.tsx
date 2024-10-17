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
                <h3>22</h3>
                <p>Lorem, ipsum.</p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>41</h3>
                <p>Lorem, ipsum.</p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>38</h3>
                <p>Lorem, ipsum.</p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>12</h3>
                <p>Lorem, ipsum.</p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>53</h3>
                <p>Lorem, ipsum.</p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>34</h3>
                <p>Lorem, ipsum.</p>
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
