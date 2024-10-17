import React from "react";

import gallery1 from "@/images/Gallery/photo-1.jpg";

const PhotoGallery: React.FC = () => {
  return (
    <>
      <div className="photoGallery">
        <div className="section-title">
          <h3 className="title">fotogalareya</h3>
          <a href="#">Barcha rasmlar</a>
        </div>
        <div className="gallery-box">
          <div className="gallery-item">
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery-item">
            <img src={gallery1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
