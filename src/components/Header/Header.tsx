import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";

import logo from "@/images/logo/logo.png";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { API } from "@/API";
import { MySelect } from "..";

const Header: React.FC = () => {
  const [headerBar, setHeaderBar] = useState(false);
  const [headerMenu, setHeaderMenu] = useState<Menu[]>([]);

  async function getMenus() {
    try {
      const response = await API.get("/menus");
      if (response.status === 200) {
        setHeaderMenu(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMenus();
  }, []);

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
              {headerMenu.length ? (
                <>
                  {headerMenu.map((menuItem, index) => (
                    <MySelect
                      title={menuItem.name_uz}
                      menu={menuItem.menu_items}
                      key={index}
                    />
                  ))}
                  <NavLink className="header-menu_link" to={"/news"}>
                    Yangiliklar
                  </NavLink>
                  <NavLink className="header-menu_link" to={"/photos"}>
                    Foto gallareya
                  </NavLink>
                </>
              ) : (
                ""
              )}
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
