// Home.jsx
import React, { useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesImageSources from "../../../src/components/Services/ServicesImageSources.js";
import HomeItem from "./HomeItem";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className={globalStyles["outer-container"]}>
        <div className={`${globalStyles["padding-container"]}`}>
          {/* Hero Section */}
          <div
            className={globalStyles["hero-section"]}
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            <h1>Welcome to Our Home Design Services</h1>
            <p>Transforming houses into dream homes</p>
          </div>

          <HomeItem
            title="Modern Interior Design"
            subtitle="Create stunning living spaces that reflect your style"
            description="Our expert designers blend contemporary aesthetics with functionality to create interiors that are both beautiful and practical. We focus on creating harmonious spaces that enhance your daily life."
            imageIndex={servicesImageSources[0]}
            imageFirst={false}
          />

          <HomeItem
            title="Renovation Specialists"
            subtitle="Breathe new life into your existing spaces"
            description="Whether it's a simple refresh or a complete overhaul, our renovation services can transform your home. We handle everything from planning to execution, ensuring a smooth and stress-free process."
            imageIndex={servicesImageSources[1]}
            imageFirst={true}
          />

          <HomeItem
            title="Custom Home Solutions"
            subtitle="Tailored designs to match your unique lifestyle"
            description="We believe that every home should be as unique as its owner. Our custom home solutions allow you to create a living space that perfectly fits your needs, preferences, and dreams."
            imageIndex={servicesImageSources[2]}
            imageFirst={false}
          />
        </div>
      </div>
    </>
  );
};

export default Home;