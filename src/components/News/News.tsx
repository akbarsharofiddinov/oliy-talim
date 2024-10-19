import React, { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import NewsItem from "./NewsItem";

import news1 from "@/images/news/news-1.jpg";
import { IoGridOutline } from "react-icons/io5";
import { MyButton } from "..";
import { NavigationOptions } from "swiper/types";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const News: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <section className="section-news">
        <div className="container">
          <div className="section-title">
            <h4 className="title">so'nggi yangiliklar</h4>
          </div>
          <div className="section-inner">
            <Swiper
              data-aos="fade-left"
              modules={[Navigation]}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 6,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
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
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <NewsItem img={news1} />
              </SwiperSlide>
            </Swiper>
            <MyButton type="outlined">
              <IoGridOutline /> Barcha yangiliklar
            </MyButton>
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

export default News;
