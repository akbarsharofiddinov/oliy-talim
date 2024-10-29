import React, { useState } from "react";
import HeaderTop from "./HeaderTop";

import logo from "@/images/logo/logo.png";
import { FaBars } from "react-icons/fa6";

import HeaderMenu from "./HeaderMenu";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Header: React.FC = () => {
  const [headerBar, setHeaderBar] = useState(false);

  return (
    <>
      <HeaderTop />
      <header>
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
              <p>
                O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar
                vazirligi
              </p>
            </a>

            <div className="right">
              <div className="phone">
                <FaHeadphonesAlt />
                <a href="tel:+998901234567">+998 90 123 45 67</a>
              </div>
              <div className="email">
                <MdOutlineEmail />
                <a href="meilto:info@jdpu.uz">info@jdpu.uz</a>
              </div>
            </div>

            <button className="header-bar" onClick={() => setHeaderBar(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      <HeaderMenu headerBar={headerBar} setHeaderBar={setHeaderBar} />
    </>
  );
};

export default Header;
