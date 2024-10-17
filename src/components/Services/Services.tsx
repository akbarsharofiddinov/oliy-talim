import React from "react";
import { BsFillPersonLinesFill, BsQuestionDiamondFill } from "react-icons/bs";
import { FaBookReader, FaLaptopHouse } from "react-icons/fa";
import { FcAcceptDatabase, FcApproval, FcTodoList } from "react-icons/fc";
import { GoChecklist } from "react-icons/go";
import { MdOutlineCalculate } from "react-icons/md";
import { PiMedalLight, PiStudent } from "react-icons/pi";
import { TbMailCheck } from "react-icons/tb";

const Services: React.FC = () => {
  return (
    <>
      <section className="section-services">
        <div className="container">
          <div className="section-title">
            <h3 className="title">interaltiv xizmatlar</h3>
          </div>
          <div className="services-box">
            <a href="#" className="service-item">
              <FcApproval />
              <span> Oliy ma'lumot haqida diplomni tasdiqlash</span>
            </a>
            <a href="#" className="service-item">
              <BsQuestionDiamondFill color="#f00" />
              <span>Siz buni bilasizmi?</span>
            </a>
            <a href="#" className="service-item">
              <BsFillPersonLinesFill color="#0d6efd" />
              <span>Talabalik haqida ma'lumot olish</span>
            </a>
            <a href="#" className="service-item">
              <FcTodoList />
              <span>
                Talabalarning moodle tizimida o'zlashtirish bo'yicha ma'lumot
              </span>
            </a>
            <a href="#" className="service-item">
              <MdOutlineCalculate color="#5c9dff" />
              <span>To'lov-kontrakt miqdorini aniqlash</span>
            </a>
            <a href="#" className="service-item">
              <FcAcceptDatabase />
              <span>Abiturientlar arizasizni elektron qabul qilish</span>
            </a>
            <a href="#" className="service-item">
              <GoChecklist color="red" />
              <span> Eng yaxshi pedagog tanloviga ariza berish</span>
            </a>
            <a href="#" className="service-item">
              <PiStudent color="green" />
              <span>Akademik ta'tilga chiqish uchun ariza berish</span>
            </a>
            <a href="#" className="service-item">
              <FaLaptopHouse color="blueviolet" />
              <span>Masofaviy ta'lim tizimi</span>
            </a>
            <a href="#" className="service-item">
              <PiMedalLight color="orange" />
              <span>
                Nomdor stipendiyalar olish bo'yicha tanlovga hujjatlarni
                elektron taqdim qilish
              </span>
            </a>
            <a href="#" className="service-item">
              <FaBookReader color="royalblue" />
              <span>
                Tayansh doktarantura va mustaqil izlanuvchilikka arizalarni
                elektron berish
              </span>
            </a>
            <a href="#" className="service-item">
              <TbMailCheck color="#5c9dff" />
              <span>
                Konferensiya va ilmiy jurnallarga maqolalarni elektron qabul
                qilish
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
