import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "./AutoPlay.css";
import { images } from "./AutoPlayImages"; // Import the images array

function AutoPlay() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 950,
      easing: "ease-out",
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="small-slider-container" data-aos="zoom-in">
      <div className="slider-container">
        <Slider {...settings}>
          {/* Map through the imported images array and generate img elements */}
          {images.map((imageUrl, index) => (
            <div className="slider-item" key={index}>
              <img src={imageUrl} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
