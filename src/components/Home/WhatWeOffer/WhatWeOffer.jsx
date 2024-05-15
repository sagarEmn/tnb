import React, { useState, useEffect } from "react";
import styles from "./WhatWeOffer.module.css";
import globalStyles from "../../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeOffer = () => {
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
        <div className={globalStyles["padding-container"]}>
          <div className={globalStyles["title-description-image-container"]} data-aos="fade-right">
            <div className={globalStyles["title-description"]}>
              <p className={`${globalStyles["first-line"]}`} >What We Offer</p>
              <p className={`${globalStyles["description-one"]}`}>
                In today’s world of maximum connectivity, we see a convergence
                of cross-sector trends and take a multifaceted approach to
                retail design for every market and physical space we serve. We
                are finding that the retail sector must reflect the welcoming
                and social elements of hospitality environments.
              </p>
              <ul>
                <li className={styles["description-one"]}>
                  <p className={styles["first-line"]}>POSITION</p>
                  <p>
                    We immerse in your brand, business, user and competition to
                    script a strategy for success.
                  </p>
                </li>
                <li className={styles["description-one"]}>
                  <p className={styles["first-line"]}>CREATE</p>
                  <p>
                    We immerse in your brand, business, user and competition to
                    script a strategy for success.
                  </p>
                </li>
                <li className={styles["description-one"]}>
                  <p className={styles["first-line"]}>DELIVER</p>
                  <p>
                    We immerse in your brand, business, user and competition to
                    script a strategy for success.
                  </p>
                </li>
                <li className={styles["description-one"]}>
                  <p className={styles["first-line"]}>ENVOLVE</p>
                  <p>
                    We revisit and refine to anticipate your needs in an
                    ever-changing marketplace.
                  </p>
                </li>
              </ul>
              <p className={styles["description-one"]}>
                Today, retail design is informed by more compelling human
                insights than ever before, and we creatively integrate these
                insights into every project we touch.
              </p>
            </div>
            <div
              className={styles["gallery-image"]}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515294/homeGallery/roundImage_irs4xs.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
