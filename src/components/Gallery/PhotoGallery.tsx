import React, { useState } from "react";

import gallery1 from "@/images/Gallery/photo-1.jpg";
import { TbPhoto } from "react-icons/tb";
import { Modal } from "..";

const PhotoGallery: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  return (
    <>
      <div className="photoGallery" data-aos="zoom-in">
        <div className="section-title">
          <h3 className="title">fotogalareya</h3>
          <a href="#">Barcha rasmlar</a>
        </div>
        <div className="gallery-box">
          <div className="gallery-item">
            <button
              className="icon"
              onClick={() => {
                setModal(true);
                setCurrentImage(gallery1);
              }}
            >
              <TbPhoto />
            </button>
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery-item">
            <button
              className="icon"
              onClick={() => {
                setModal(true);
                setCurrentImage(gallery1);
                console.log("first");
              }}
            >
              <TbPhoto />
            </button>
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery-item">
            <button
              className="icon"
              onClick={() => {
                setModal(true);
                setCurrentImage(gallery1);
                console.log("first");
              }}
            >
              <TbPhoto />
            </button>
            <img src={gallery1} alt="" />
          </div>
        </div>
      </div>
      {modal ? (
        <Modal setModal={setModal}>
          <img src={currentImage} alt="" />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default PhotoGallery;
