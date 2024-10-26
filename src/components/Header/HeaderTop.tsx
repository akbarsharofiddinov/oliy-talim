import React from "react";
// Images
import uzFlag from "@/images/header-top/uz-flag.png";
import qqFlag from "@/images/header-top/qq-flag.png";
import gerb from "@/images/header-top/gerb.png";

// Icons
import { CiSearch } from "react-icons/ci";
import { BsGlobeAmericas } from "react-icons/bs";

const HeaderTop: React.FC = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-top_inner">
            <ul className="menu left">
              <li className="menu-item">
                <a href="#">
                  <img src={uzFlag} alt="Uzbekistan flag" />
                </a>
              </li>
              <li className="menu-item">
                <a href="#">
                  <img src={gerb} alt="Uzbekistan flag" />
                </a>
              </li>
              <li className="menu-item">
                <a href="#">
                  <img src={qqFlag} alt="Uzbekistan flag" />
                </a>
              </li>
              <li className="menu-item">
                <a href="#">
                  <img src={gerb} alt="Uzbekistan flag" />
                </a>
              </li>
            </ul>

            <ul className="menu right">
              <li className="menu-item">
                <ul className="languages">
                  <p>
                    <BsGlobeAmericas />
                  </p>
                  <li className="item">
                    <a href="#">o'zb</a>
                  </li>
                  <li className="item">
                    <a href="#">рус</a>
                  </li>
                  <li className="item">
                    <a href="#">qr</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <button className="search-btn">
                  <CiSearch />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
