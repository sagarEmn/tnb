import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { contactImageSources } from "../globalImageSources";

import globalStyles from "../../global.module.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className={globalStyles["outer-container"]} data-aos="zoom-in">
        <div
          className={`${globalStyles["padding-container"]} ${globalStyles["footer-flow"]}`}
        >
          <div className={globalStyles["contact-us-information-footer"]}>
            <div className={globalStyles["contact-icons"]}>
              <img src={contactImageSources[4]} alt="Mail Icon" />
            </div>

            <div className={globalStyles["contact-details-footer"]}>
              <p>tnbsource.th@gmail.com</p>
            </div>
          </div>
          <p
            className={`${globalStyles["description-one"]} ${globalStyles["centered-paragraph"]}`}
          >
            TNB Source Co., Ltd is multi purpose business group based in Bangkok
            Thailand. We're specialised in furniture installation, interior
            design, civil work, showroom decor, renovations and construction
            related works.
          </p>

          <div
            className={`${globalStyles["contact-details-align-center"]} ${globalStyles["contact-details-grid"]} ${globalStyles["center-map-icon"]}`}
          >
            <div className={globalStyles["contact-icons"]}>
              <img src={contactImageSources[0]} alt="Map Icon" />
            </div>
            <div className={`${globalStyles["contact-details-footer"]}`}>
              <p> Unit 20/1, Building (k19/2)</p>
              <p>Soi Phatthana Chonnabot - 3,</p>
              <p> Khlong Song Ton Nun, Lat Krabang,</p>
              <p> Bangkok 10520</p>
            </div>
          </div>

          <div className={globalStyles["copyright-bottom-padding-container"]}>
            © Copyright TNB Sources Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
