import React, { useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { contactImageSources, videoLink } from "../globalImageSources";
import ContactUs from "../Home/ContactUs/ContactUs";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-out",
    });
  }, []);
  return (
    <>
      <div className={globalStyles["outer-container"]}>
        <div className={globalStyles["padding-container"]}>
          {/* nav location */}
          <div
            className={globalStyles["small-grayBackground"]}
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            <div className={globalStyles["display-nav-location-center"]}>
              <div className={globalStyles["first-line"]}>CONTACT US</div>
              <div className={globalStyles["px14-line"]}>
                HOME {">"} CONTACT US
              </div>
            </div>
          </div>
          <p className={globalStyles["first-line"]}> TNB Source</p>
          <p className={globalStyles["first-line"]}>
            {" "}
            "We don't want to push our ideas on to customers, <br /> we simply
            want to make what they want."
          </p>
          {/* first location */}
          <section
            className="first-office"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className={globalStyles["contact-us-information"]}>
              <div className={globalStyles["contact-icons"]}>
                <img src={contactImageSources[0]} alt="Map Icon" />
              </div>

              <div className={globalStyles["contact-details-larger"]}>
                <p>On google maps you can look for our location:</p>
              </div>
            </div>
            <div className={globalStyles["embed-map"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.746290976046!2d100.7203051902529!3d13.73380433889311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d67238090f1a7%3A0x1fb8cca546af9c15!2sTNB%20source%20co.%2Cltd!5e0!3m2!1sen!2snp!4v1594762779686!5m2!1sen!2snp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="One RX Interior Decoration LLC"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default ContactPage;
