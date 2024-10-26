import React from "react";

import { AiOutlineMail } from "react-icons/ai";

import hemis from "@/images/our-systems/hemis.png";
import onlineTest from "@/images/our-systems/online-test.png";

import { FcReading } from "react-icons/fc";

const OurSystems: React.FC = () => {
  return (
    <>
      <section className="section-our_systems">
        <div className="container">
          <div className="section-inner">
            <div className="section-title">
              <h3 className="title">bizning tizimlarimiz</h3>
            </div>
            <div className="our-systems" data-aos="zoom-in">
              <a href="#" className="system-item">
                <img src={hemis} alt="" />
                Hemis axborot tizimi
              </a>
              <a href="#" className="system-item">
                <AiOutlineMail color="#fff" />
                ZooVet Service
              </a>
              <a href="#" className="system-item">
                <FcReading />
                Elektron kutubxona
              </a>
              <a href="#" className="system-item">
                <img src={onlineTest} alt="" />
                Online test olimpiada
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSystems;
