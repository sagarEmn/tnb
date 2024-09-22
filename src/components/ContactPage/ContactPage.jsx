import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { contactImageSources, videoLink } from "../globalImageSources";
import ContactUs from "../Home/ContactUs/ContactUs";
import globalStyles from "../../global.module.css";


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
      {/* nav location */}
      <div
        className={globalStyles["small-grayBackground"]}
        data-aos="zoom-in"
        data-aos-offset="0"
      >
        <div className={globalStyles["display-nav-location-center"]}>
          <div className={globalStyles["first-line"]}>CONTACT PAGE</div>
          <div className={globalStyles["px14-line"]}>
            HOME {">"} CONTACT PAGE
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="py-12">
          {/* first location */}
          <section
            className="first-office"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="text-lg font-semibold text-gray-600 mb-2">
              TNB Source
            </p>
            <p className="text-2xl font-bold text-gray-800 mb-6">
              "We don't want to push our ideas on to customers, <br /> we simply
              want to make what they want."
            </p>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <img
                  src={contactImageSources[0]}
                  alt="Map Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="text-lg text-gray-700">
                <p>On google maps you can look for our location:</p>
              </div>
            </div>
            <div className="w-full h-96 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.746290976046!2d100.7203051902529!3d13.73380433889311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d67238090f1a7%3A0x1fb8cca546af9c15!2sTNB%20source%20co.%2Cltd!5e0!3m2!1sen!2snp!4v1594762779686!5m2!1sen!2snp"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TNB Source Location"
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
