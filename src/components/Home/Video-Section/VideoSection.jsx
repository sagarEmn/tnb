import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

import styles from "../../../global.module.css";

export default function VideoSection({ videoLink }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);
  return (
    <>
      <div className={styles["padding-group-first"]} data-aos="zoom-in"	>
        <div
          className={`${styles["video-outer-container"]} ${styles["video-80"]}`}
          data-aos="fade-up"
        >
          <video autoPlay muted className={styles["video"]} controls={false}>
            <source src="https://res.cloudinary.com/drplnrrww/video/upload/v1715518197/homeGallery/compressedTwo_cdtuhx.mp4" />
            Your Browser doesn't support the video.
          </video>
        </div>
      </div>
    </>
  );
}
