// Services.jsx
import React, { useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesImageSources from "./ServicesImageSources";
import ServiceItem from "./ServiceItem"; // Import ServiceItem component

const Services = () => {
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
        <div className={`${globalStyles["padding-container"]}`}>
          {/* nav location */}
          <div
            className={globalStyles["small-grayBackground"]}
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            <div className={globalStyles["display-nav-location-center"]}>
              <div className={globalStyles["first-line"]}>SERVICES</div>
              <div className={globalStyles["px14-line"]}>
                HOME {">"} SERVICES
              </div>
            </div>
          </div>

          <ServiceItem
            firstH4="Interior Design"
            secondH4="GetLance is a great place to find more clients, and to run and grow your own freelance business"
            description="Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space."
            imageIndex={servicesImageSources[2]}
            imageFirst={false}
          />

          <ServiceItem
            firstH4="House and Bungalow Renovation"
            secondH4="GetLance makes it easy to connect with clients and begin doing great work."
            description="Streamlined hiring. GetLance's sophisticated algorithms highlight projects you're a great fit for. Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs. Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients."
            imageIndex={servicesImageSources[4]}
            imageFirst={true}
          />

          <ServiceItem
            firstH4="Condominium Renovation"
            secondH4="With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to: "
            description="Send and receive files. Deliver digital assets in a secure environment. Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video. Use our mobile app. Many features can be accessed on your mobile phone when on the go."
            imageIndex={servicesImageSources[2]}
            imageFirst={false}
          />

          <ServiceItem
            firstH4="Condominium Buy and Sell"
            secondH4="All projects include GetLance Payment Protection - helping ensure that you get paid for all work successfully completed through the freelancing website."
            description="All invoices and payments happen through GetLance. Count on a simple and streamlined process. Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features. Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more."
            imageIndex={servicesImageSources[0]}
            imageFirst={true}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
