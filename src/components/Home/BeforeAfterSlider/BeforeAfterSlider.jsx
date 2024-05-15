import React, { useState, useEffect } from "react";
import styles from "./BeforeAfterSlider.module.css";
import globalStyles from "../../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BeforeAfterSlider() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e) => {
    setPosition(e.target.value);
    const container = document.querySelector(
      `.${styles["before-after-content"]}`
    );
    container.style.setProperty("--position", `${e.target.value}%`);
  };

  // Array of image sources
  const imageSources = [
    "https://res.cloudinary.com/drplnrrww/image/upload/v1715515291/homeGallery/beforeAfter1_a0zex5.jpg",
    "https://res.cloudinary.com/drplnrrww/image/upload/v1715515290/homeGallery/beforeAfter2_z5ionm.jpg",
  ];

  return (
    <div className={globalStyles["outer-container"]}>
      <div className={globalStyles["padding-container"]}>
        <div
          className={`${globalStyles["padding-group-middle-grayBackground"]} ${globalStyles["fix-before-after"]}`}
          data-aos="fade-up"
        >
          <div className={globalStyles["first-line"]}>
            Interior Transformation
          </div>
          <div className={styles["before-after-content"]}>
            <div className={styles["image-container"]}>
              <img
                className={`${styles["image-before"]} ${styles["slider-image"]}`}
                src={imageSources[0]} // Using array index for src attribute
                alt=""
              />
              <img
                className={`${styles["image-after"]} ${styles["slider-image"]}`}
                src={imageSources[1]} // Using array index for src attribute
                alt=""
              />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={handleSliderChange}
              className={styles["slider"]}
            />
            <div className={styles["slider-line"]}></div>
            <div className={styles["slider-button"]}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="30" height="30" fill="none" />
                <line
                  x1="128"
                  y1="40"
                  x2="128"
                  y2="216"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="16"
                  y1="128"
                  x2="96"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <polyline
                  points="64 96 96 128 64 160"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="240"
                  y1="128"
                  x2="160"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <polyline
                  points="192 160 160 128 192 96"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
