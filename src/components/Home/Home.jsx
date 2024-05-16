import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import globalStyles from "../../global.module.css";
import Slider from "./Slider/Slider";
import AutoPlay from "./AutoPlay/AutoPlay";
import HomeImage from "./HomeComponents/HomeImage";
import ImageHome from "./HomeComponents/ImageHome";
import servicesImageSources from "../Services/ServicesImageSources";

export default function Home() {
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
      <Slider />
      <hr />
      <AutoPlay />
      <div className={globalStyles["outer-container"]}>
        <div className={`${globalStyles["padding-container"]}`}>
          <h3 className="display-2 mb-4 fw-medium text-center">We Provide</h3>
          <HomeImage
            firstH4={"Interior Design"}
            secondH4={
              "Interior Design with quality,beautiful and stand out inspirational show homes in order to ultimately secure the sale of a given property."
            }
            imageIndex={fifthImage}
          />

          <ImageHome
            firstH4={"House and Bungalow Renovation"}
            secondH4={
              "House and Bunaglow Renovation includes interior and exterior appearance, garde, bathrooms, kitchesn, FLooring. "
            }
            imageIndex={thirdImage}
          />
          <HomeImage
            firstH4={"Condominium Renovation"}
            secondH4={
              "We offer condo renovation to customers in the Greater Bangkok Area Renovations include bathrooms, kitchens, FLooring and Electrical Wiring."
            }
            imageIndex={fifthImage}
          />
          <ImageHome
            firstH4={"Condominium Renovation"}
            secondH4={
              "We offer condo renovation to customers in the Greater Bangkok Area Renovations include bathrooms, kitchens, Flooring and Electrical Wiring."
            }
            imageIndex={fifthImage}
          />
        </div>
      </div>
    </>
  );
}
