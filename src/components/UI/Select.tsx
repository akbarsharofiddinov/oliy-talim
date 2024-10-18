import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

interface InnerItem {
  title: string;
  innerMenu: string[];
}

type MenuItem = string | InnerItem;

interface IProps {
  title: string;
  menu: MenuItem[];
}

const Select: React.FC<IProps> = ({ title, menu }) => {
  return (
    <>
      <div className="select-item">
        <div className="selected">
          {title}
          <span>
            <FaAngleDown />
          </span>
        </div>
        <ul className="menu">
          {menu?.map((item, index) => (
            <li className="menu-item" key={index}>
              {typeof item === "string" ? (
                item
              ) : (
                <div className="select-item">
                  <div className="selected">
                    {item.title}{" "}
                    <span>
                      <FaAngleRight />
                    </span>
                  </div>
                  <div className="menu inner-menu">
                    {item.innerMenu.map((innerItem, index) => (
                      <li className="item inner-item" key={index}>
                        {innerItem}
                      </li>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
