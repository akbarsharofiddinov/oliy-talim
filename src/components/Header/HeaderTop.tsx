import React from "react";
// Images
import uzFlag from "@/images/header-top/uz-flag.png";
import qqFlag from "@/images/header-top/qq-flag.png";
import gerb from "@/images/header-top/gerb.png";

// Icons
import { CiSearch } from "react-icons/ci";
import { BsGlobeAmericas } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks";
import { setLanugage } from "@/store/Languages/languageSlice";
import { useTranslation } from "react-i18next";

const HeaderTop: React.FC = () => {
  const dispatch = useAppDispatch();

  const { i18n } = useTranslation();

  const language = useAppSelector((state) => state.languages.language);

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanugage(lang));
    localStorage.setItem("interface_language", JSON.stringify(lang));
    i18n.changeLanguage(lang);
  };

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
                  <li className={language === "uz" ? "item active" : "item"}>
                    <a href="/uz" onClick={() => handleLanguageChange("uz")}>
                      o'zb
                    </a>
                  </li>
                  <li className={language === "ru" ? "item active" : "item"}>
                    <a href="/ru" onClick={() => handleLanguageChange("ru")}>
                      рус
                    </a>
                  </li>
                  <li className={language === "qr" ? "item active" : "item"}>
                    <a href="/qr" onClick={() => handleLanguageChange("qr")}>
                      qr
                    </a>
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
