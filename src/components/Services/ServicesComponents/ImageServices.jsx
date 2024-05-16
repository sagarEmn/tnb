import React from "react";
import globalStyles from "../../../global.module.css";

function ImageServices({ firstH4, secondH4, imageIndex, description }) {
  return (
    <>
      <div
        className={globalStyles["padding-group-middle"]}
        data-aos="fade-left"
      >
        <div className={globalStyles["title-description-image-container"]}>
          <div className={globalStyles["image"]}>
            <img src={imageIndex} alt="" />
          </div>
          <div className={globalStyles["title-description"]}>
            <p className={globalStyles["first-line"]}>{firstH4}</p>
            <p className={globalStyles["third-line"]}>{secondH4}</p>
            <div className={globalStyles["description-one-small"]}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageServices;
