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

          {/* first office dubai hq */}
          <section className="first-office" data-aos="fade-right" data-aos-delay="200">
            <div className={globalStyles["contact-us-information"]}>
              <div className={globalStyles["contact-icons"]}>
                <img src={contactImageSources[0]} alt="Map Icon" />
              </div>

              <div className={globalStyles["contact-details-larger"]}>
                <p>HQ DUBAI OFFICE</p>
                <p>
                  One RX Interior Decoration LLC Plot No - 598-709 Next to Dubai
                  Metal Grating & Manufcturing LLC DIP - 1 Dubai / UAE
                </p>
                <p>
                  On google maps you can look for : Cartel Mnfg Co LLC, Dubai
                  Investments Park
                </p>
              </div>
            </div>
            <div className={globalStyles["embed-map"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.2465464862129!2d55.15997594134909!3d24.987798577024236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a27f40b829f%3A0xe67734a0fdbba53!2sOne%20RX%20Interior%20Decoration%20LLC!5e0!3m2!1sen!2snp!4v1715670014946!5m2!1sen!2snp"
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

          {/* second office turkey office */}
          <section className="second-office" data-aos="fade-left" data-aos-delay="200">
            <div className={globalStyles["contact-us-information"]}>
              <div className={globalStyles["contact-icons"]}>
                <img src={contactImageSources[0]} alt="Map Icon" />
              </div>

              <div className={globalStyles["contact-details-larger"]}>
                <p>Turkey Office</p>
                <p>
                  One Rx Mimari Planlama Uygulama, Orta Mah. İbrahim Ağa Cad.
                  No:18 Kısmet Han
                </p>
                <p>Zemin kat Bayrampaşa, İstanbul / TÜRKİYE</p>
              </div>
            </div>
            <div className={globalStyles["embed-map"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3009.8215915982173!2d28.918545000000005!3d41.029159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba0cfa2ca0e7%3A0xc662b5105cd3da68!2sOne%20Rx%20Mimari%20Planlama%20Uygulama!5e0!3m2!1sen!2sus!4v1715670502132!5m2!1sen!2sus"
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
