import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MySelect } from "..";

import { API } from "@/API";
import { useAppSelector } from "@/store/Hooks/hooks";

interface IProps {
  headerBar: boolean;
  setHeaderBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMenu: React.FC<IProps> = ({ headerBar, setHeaderBar }) => {
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

  const { language } = useAppSelector((state) => state.languages);

  const key = `name_${language}` as keyof Menu;

  useEffect(() => {
    getMenus();
  }, []);
  return (
    <>
      <div className="section-header_menu">
        <div className="container">
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
                    title={menuItem[key] + ""}
                    menu={menuItem.menu_items}
                    key={index}
                  />
                ))}
                <NavLink
                  className="select-item header-menu_link"
                  to={"/photos"}
                >
                  {language === "uz"
                    ? "Foto gallareya"
                    : language === "ru"
                    ? "Фотогалерея"
                    : "Foto Galeriya"}
                </NavLink>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
