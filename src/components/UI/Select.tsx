import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

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
            <li className="menu-item" key={`${index}_${item.id}`}>
              {item.name_uz}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
