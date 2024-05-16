import React, { useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesImage from "./ServicesComponents/ServicesImage";
import ImageServices from "./ServicesComponents/ImageServices";
import servicesImageSources from "./ServicesImageSources";

const Services = () => {
  const firstImage = servicesImageSources[0];
  const secondImage = servicesImageSources[1];
  const thirdImage = servicesImageSources[2];
  const fourthImage = servicesImageSources[3];
  const fifthImage = servicesImageSources[4];
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
          <ServicesImage
            firstH4={"Interior Design"}
            secondH4={
              "GetLance is a great place to find more clients, and to run and grow your own freelance business"
            }
            description={
              "Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space."
            }
            imageIndex={thirdImage}
          />

          <ImageServices
            firstH4={"House and Bungalow Renovation"}
            secondH4={
              "GetLance makes it easy to connect with clients and begin doing great work."
            }
            description={
              "Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for. Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs. Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients."
            }
            imageIndex={fifthImage}
          />
          <ServicesImage
            firstH4={"Condominium Renovation"}
            secondH4={
              "With GetLance, you have the freedom and fleixibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to: "
            }
            description={
              "Send and receive files. Deliver digital assets in a secure environment. Share feedback in real time. Use GetLance Messages to communciate via text, chat, or video. Use our mobile app. Many features can be accessed on your mobile phone when on the go."
            }
            imageIndex={thirdImage}
          />
          <ImageServices
            firstH4={"Condominium Buy and Sell"}
            secondH4={
              "All projects include GetLance Payment Protection - helping ensure that you get paid for all work successfully completed through the freelancing website."
            }
            description={
              "All invoices and payments happen through GetLance. Count on a simple and streamlined proces. Hourly and fixed-price projects. For hourly work, submit imtesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features. Multiple payment options. Choose a payment method that works best for you, from direct deposite or PayPal to wire transfer and more."
            }
            imageIndex={firstImage}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
