import React from "react";
import { Link } from "react-router-dom";
import globalStyles from "../../../global.module.css";

function HomeImage({ firstH4, secondH4, imageIndex, description, readMore }) {
  return (
    <>
      <div
        className={globalStyles["padding-group-middle"]}
        data-aos="fade-right"
      >
        <div className={globalStyles["title-description-image-container"]}>
          <div className={globalStyles["title-description"]}>
            <p className={globalStyles["first-line"]}>{firstH4}</p>
            <p className={globalStyles["third-line"]}>{secondH4}</p>
            <div className={globalStyles["description-one"]}>
              <p>{description}</p>
            </div>
            <Link to="/services">
              <div className={globalStyles["portfolio-bnt"]}>Read More</div>
            </Link>
          </div>
          <div className={globalStyles["image"]}>
            <img src={imageIndex} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeImage;
