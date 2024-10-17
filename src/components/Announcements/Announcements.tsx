import React, { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import AnnouncementItem from "./AnnouncementItem";

import news1 from "@/images/news/news-1.jpg";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { MyButton } from "..";
import { IoGridOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Announcements: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <section className="section-announcements">
        <div className="container">
          <div className="section-title">
            <h3 className="title">e'lonlar</h3>
          </div>
          <div className="section-inner">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              modules={[Navigation]}
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
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
              <SwiperSlide>
                <AnnouncementItem img={news1} />
              </SwiperSlide>
            </Swiper>
            <MyButton type="outlined">
              <IoGridOutline fontSize={22} /> Barcha yangiliklar
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

export default Announcements;
