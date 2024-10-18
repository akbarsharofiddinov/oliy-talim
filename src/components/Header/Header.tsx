import React from "react";
import HeaderTop from "./HeaderTop";

import logo from "@/images/logo/logo.png";
import { MySelect } from "..";

const Header: React.FC = () => {
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
            <div className="header-menu">
              <MySelect title="menu-1" menu={menu} />
              <MySelect title="menu-2" menu={menu} />
              <MySelect title="menu-3" menu={menu} />
              <MySelect title="menu-4" menu={menu} />
              <MySelect title="menu-5" menu={menu} />
              <MySelect title="menu-6" menu={menu} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
