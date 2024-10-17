import React from "react";

import logo from "@/images/logo/logo.png";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="col col-1">
              <a href="/" className="logo">
                <img src={logo} alt="" />
                <p>
                  O‘zbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar
                  vazirligi
                </p>
              </a>
            </div>
            <div className="col col-2">
              <h3 className="col-title">Bog'lanish</h3>
              <ul className="menu">
                <li className="menu-item">
                  <p>Telefon:</p>
                  <a href="#"> +(99872) 226 13 57</a>
                </li>
                <li className="menu-item">
                  <p>Faks:</p>
                  <a href="#"> +(99872) 226 13 57</a>
                </li>
                <li className="menu-item">
                  <p>E-mail:</p>
                  <a href="#">info@jdpu.uz</a>
                </li>
                <li className="menu-item">
                  <p>E-mail:</p>
                  <a href="#">jspi_info@umail.uz</a>
                </li>
              </ul>
            </div>
            <div className="col col-3">
              <h3 className="col-title">Manzil</h3>
              <p>
                130100.Jizzax viloyati, Jizzax shahri, Sharof Rashidov ko'chasi,
                4-uy.
              </p>
            </div>
            <div className="col col-4">
              <h3 className="col-title">Ish vaqti</h3>
              <p>Dushanba - Shanba</p>
              <p>09:00-13:00 — 14:00-18:00</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
