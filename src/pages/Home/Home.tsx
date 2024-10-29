import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/Hooks/hooks";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const lang = useAppSelector((state) => state.languages.language);

  useEffect(() => {
    if (lang) {
      navigate(`/${lang}`);
    }
  }, []);
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
