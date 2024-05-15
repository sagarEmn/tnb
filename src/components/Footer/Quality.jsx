import React from "react";
import { Link } from "react-router-dom";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImageSources from "../About/AboutImage.js";

const Quality = () => {
  return (
    <>
      <div className={`${globalStyles["outer-container"]}`}>
        <div className={`${globalStyles["padding-container"]}`}>
          <section className="image-container">
            {/* image container */}
            <div
              className={`${globalStyles["padding-group-first"]} ${globalStyles["padding-group-extend"]} `}
            >
              <div className={globalStyles["image-container"]}>
                <img src={aboutImageSources[0].image} alt="" />
              </div>
            </div>
          </section>

          <div className={globalStyles["first-line"]}>
            One RX management is committed to providing quality products and
            services with its employees and experienced business partners within
            ensuring their continuity.
          </div>

          <section className={`${globalStyles["two-image-attached"]} ${globalStyles['certificate-image']}`}>
            <img
              src="https://res.cloudinary.com/drplnrrww/image/upload/v1715680178/quality/ISO-14001-2015-Environmental-Management-Systems-Cert_EN-scaled_klf2hj.jpg"
              alt="image 1"
            />
            <img
              src="https://res.cloudinary.com/drplnrrww/image/upload/v1715680203/quality/ISO-9001-2015-Quality-Management-Systems-Cert_EN-scaled_zb9hmp.jpg"
              alt="image 1"
            />
          </section>

          <section className={globalStyles["back-to-homepage"]}>
            <Link to="/home">BACK TO HOMEPAGE</Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Quality;
