import React, { useState } from "react";
import HeaderTop from "./HeaderTop";

import logo from "@/images/logo/logo.png";
import { MySelect } from "..";
import { FaBars } from "react-icons/fa6";

const Header: React.FC = () => {
  const [headerBar, setHeaderBar] = useState(false);
  const menu = [
    "item1",
    "item2",
    {
      title: "Submenu",
      innerMenu: ["subitem1", "subitem2"],
    },
    "item3",
  ];

  return (
    <>
      <HeaderTop />
      <header>
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
              <p>
                O‘zbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar
                vazirligi
              </p>
            </a>
            <ul className={headerBar ? "header-menu bar-view" : "header-menu"}>
              <button
                className="header-bar_close"
                onClick={() => setHeaderBar(false)}
              >
                &times;
              </button>
              <li className="header-menu_item">
                <MySelect title="menu-1" menu={menu} />
              </li>
              <li className="header-menu_item">
                <MySelect title="menu-2" menu={menu} />
              </li>
              <li className="header-menu_item">
                <MySelect title="menu-3" menu={menu} />
              </li>
              <li className="header-menu_item">
                <MySelect title="menu-4" menu={menu} />
              </li>
              <li className="header-menu_item">
                <MySelect title="menu-5" menu={menu} />
              </li>
              <li className="header-menu_item">
                <MySelect title="menu-6" menu={menu} />
              </li>
            </ul>
            <button className="header-bar" onClick={() => setHeaderBar(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
