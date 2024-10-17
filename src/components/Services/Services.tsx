import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FcOrganization } from "react-icons/fc";

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
              <FcOrganization />
              <span>Talabalar turar joylari haqida ma'lumot</span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>
                Nomdor stipendiayalar olish bo`yicha tanlovga ariza berish
              </span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>Akademik ta`tildan chiqish uchun ariza berish</span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>Akademik ta`tilga qaytish uchun ariza berish</span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>Akademik ta`tildan chiqish uchun ariza berish</span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>
                Nomdor stipendiayalar olish bo`yicha tanlovga ariza berish
              </span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>Akademik ta`tildan chiqish uchun ariza berish</span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>Akademik ta`tilga qaytish uchun ariza berish</span>
            </a>
            <a href="#" className="service-item">
              <AiOutlineMail />
              <span>Akademik ta`tilga qaytish uchun ariza berish</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
