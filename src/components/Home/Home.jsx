// Home.jsx
import React, { useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesImageSources from "../../../src/components/Services/ServicesImageSources.js";
import HomeItem from "./HomeItem";
import Slider from "./Slider/Slider";
import AutoPlay from "./AutoPlay/AutoPlay";

const Home = () => {
  const firstImage = servicesImageSources[0];
  const secondImage = servicesImageSources[1];
  const thirdImage = servicesImageSources[2];
  const fourthImage = servicesImageSources[3];
  const fifthImage = servicesImageSources[4];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      {/* Slider and Autoplay Components */}
      <Slider />
      <hr />
      <AutoPlay />

      <div className="container mx-auto px-2 lg:px-4">
        <div >
        
          <h3 className="display-2 mb-4 fw-medium text-center">We Provide</h3>
          <HomeItem
            title="Modern Interior Design"
            subtitle="Create stunning living spaces that reflect your style"
            description="Our expert designers blend contemporary aesthetics with functionality to create interiors that are both beautiful and practical. We focus on creating harmonious spaces that enhance your daily life."
            imageIndex={firstImage}
            imageFirst={false}
          />

          <HomeItem
            title="Renovation Specialists"
            subtitle="Breathe new life into your existing spaces"
            description="Whether it's a simple refresh or a complete overhaul, our renovation services can transform your home. We handle everything from planning to execution, ensuring a smooth and stress-free process."
            imageIndex={secondImage}
            imageFirst={true}
          />

          <HomeItem
            title="Custom Home Solutions"
            subtitle="Tailored designs to match your unique lifestyle"
            description="We believe that every home should be as unique as its owner. Our custom home solutions allow you to create a living space that perfectly fits your needs, preferences, and dreams."
            imageIndex={thirdImage}
            imageFirst={false}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
