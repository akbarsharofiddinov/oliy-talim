import React from "react";

interface IProps {
  title: string;
  menu?: string[];
}

const Select: React.FC<IProps> = ({ title, menu }) => {
  return (
    <>
      <div className="select-item">
        <div className="selected">{title}</div>
        <ul className="menu">
          {menu?.map((item, index) => (
            <li className="menu-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
