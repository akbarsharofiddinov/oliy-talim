import React from "react";
import {
  Announcements,
  Banner,
  EducationalLinks,
  News,
  OurSystems,
  PhotoGallery,
  Services,
  Statistics,
  UseFullLinks,
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
      <Announcements />
      <Services />
      <Statistics />
      <UseFullLinks />
      <EducationalLinks />
    </>
  );
};

export default Home;
