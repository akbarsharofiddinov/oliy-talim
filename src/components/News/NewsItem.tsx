import React from "react";

import { MyButton } from "@/components";

interface IProps {
  img: string;
}

const NewsItem: React.FC<IProps> = ({ img }) => {
  return (
    <>
      <div className="img-box">
        <img src={img} alt="" />
      </div>
      <div className="body">
        <p className="date">13 October 2024</p>
        <h3 className="title">
          JDPUda «Tabiat in’omisan-Mehrjon» hosil bayrami o‘tkazildi.
        </h3>
        <p className="desc">
          Mehrjon — kuzgi teng kunlikda kuz bayrami sifatida o‘tkaziladigan
          bayramdir..
        </p>
        <MyButton type="contained">Batafsil</MyButton>
      </div>
    </>
  );
};

export default NewsItem;
