import React from "react";
import {
  Banner,
  News,
  OurSystems,
  PhotoGallery,
  Services,
  VideoGallery,
} from "@/components";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <News />
      <section className="section-gallery">
        <div className="container">
          <div className="section-inner">
            <PhotoGallery />
            <VideoGallery />
          </div>
        </div>
      </section>
      <OurSystems />
      <Services />
    </>
  );
};

export default Home;
