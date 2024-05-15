import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import styles from "./ThreeImageGrid.module.css";

export default function ThreeImageGrid({ imageSources }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);
  return (
    <div className={styles["grid"]} data-aos="fade-right">
      <div className={styles.gridContainer}>
        {imageSources.map((src, index) => (
          <div className={styles.gridItem} key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
