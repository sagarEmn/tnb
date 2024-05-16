import React from "react";
import globalStyles from "../../../global.module.css";

function ServicesImage({ firstH4, secondH4, imageIndex, description }) {
  return (
    <>
      <div
        className={globalStyles["padding-group-middle"]}
        data-aos="fade-left"
      >
        <div className={globalStyles["title-description-image-container"]}>
          <div className={globalStyles["title-description"]}>
            <p className={globalStyles["first-line"]}>{firstH4}</p>
            <p className={globalStyles["third-line"]}>{secondH4}</p>
            <div className={globalStyles["description-one"]}>
              <p>{description}</p>
            </div>
          </div>
          <div className={globalStyles["image"]}>
            <img src={imageIndex} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesImage;
