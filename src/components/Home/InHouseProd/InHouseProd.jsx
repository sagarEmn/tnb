import React, { useState, useEffect } from "react";
import globalStyles from "../../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
        <div className={globalStyles["padding-container"]}>
          <div className={globalStyles["title-description-image-container"]}  data-aos="fade-left">
            <div className={globalStyles["title-description"]}>
              <p className={`${globalStyles["first-line"]}`}>
                IN-HOUSE Production
              </p>
              <p className={`${globalStyles["description-one"]}`}>
                Each stage of the process is underpinned by a full range of
                services we offer in-house, performed by a team of experts
                passionate about shaping the future of retail.
              </p>
              <div className={globalStyles["three-menu-container"]}>
                <div className={globalStyles["menu-container"]}>
                  <div
                    className={`${globalStyles["menu-item"]} ${
                      globalStyles["description-one-small"]
                    } ${activeIndex === 0 ? globalStyles.active : ""}`}
                    onClick={() => handleClick(0)}
                  >
                    INNOVATION
                  </div>
                  <div
                    className={`${globalStyles["menu-item"]} ${
                      globalStyles["description-one-small"]
                    } ${activeIndex === 1 ? globalStyles.active : ""}`}
                    onClick={() => handleClick(1)}
                  >
                    PRODUCTION
                  </div>
                  <div
                    className={`${globalStyles["menu-item"]} ${
                      globalStyles["description-one-small"]
                    } ${activeIndex === 2 ? globalStyles.active : ""}`}
                    onClick={() => handleClick(2)}
                  >
                    QUALITY
                  </div>
                </div>
                <div className={globalStyles["description-one"]}>
                  <div
                    className={`${globalStyles.description} ${
                      activeIndex === 0 ? globalStyles.active : ""
                    }`}
                  >
                    Innovation is one of our core in-house capabilities. We help
                    to deploy great ideas and brilliant design to bring our
                    client's products and services to life, to real users.
                  </div>
                  <div
                    className={`${globalStyles.description} ${
                      activeIndex === 1 ? globalStyles.active : ""
                    }`}
                  >
                    We provide the best of both the design and production with
                    access to the technology to build anything custom and
                    complex.
                  </div>
                  <div
                    className={`${globalStyles.description} ${
                      activeIndex === 2 ? globalStyles.active : ""
                    }`}
                  >
                    We bring all members of a project team together early in the
                    process to propose best-value solutions, identify and
                    address issues of cost, schedule and constructibility to
                    reduce risk for design errors.
                  </div>
                </div>
              </div>
            </div>

            {/* image */}
            <div
              className={globalStyles["image"]}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515293/homeGallery/inhouseprodImage_uoavpb.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery2;
