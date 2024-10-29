import { useAppSelector } from "@/store/Hooks/hooks";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

interface IProps {
  title: string;
  menu: MenuItem[];
}

const Select: React.FC<IProps> = ({ title, menu }) => {
  const { language } = useAppSelector((state) => state.languages);

  const key = `name_${language}` as keyof MenuItem;

  return (
    <>
      <div className="select-item">
        <div className="selected">
          {title}
          <span>
            <FaAngleDown />
          </span>
        </div>
        <div className="menu">
          {menu?.map((item, index) => (
            <a
              href={item.slug === "yangiliklar" ? "/news" : "/"}
              className="menu-item"
              key={`${index}_${item.id}`}
            >
              {item[key]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Select;
