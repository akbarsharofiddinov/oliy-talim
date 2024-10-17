import React from "react";

import gallery1 from "@/images/Gallery/photo-1.jpg";

const VideoGallery: React.FC = () => {
  return (
    <div className="videoGallery">
      <div className="section-title">
        <h3 className="title">video darslar</h3>
        <a href="#">Barcha darslar</a>
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
  );
};

export default VideoGallery;
