import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <p className={globalStyles["description-one-small"]}>
            2023 © OneRX All Rights Reserved
          </p>
          <p className={globalStyles["description-one-small"]}>
            <Link to="/KVKK">KVKK Hakkında Bilgilendirme</Link>
          </p>
          <p className={globalStyles["description-one-small"]}>
            <Link to="/KVKK2">KVKK Aydınlatma Metni</Link>
          </p>
          <p className={globalStyles["description-one-small"]}>
            <Link to="/QualityCertificates">Quality Certificates</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
