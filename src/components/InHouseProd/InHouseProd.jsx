import React, { useState, useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoSection from "../VideoSection/VideoSection";
import { contactImageSources, videoLink } from "../globalImageSources";
import inHouseProdImages from "./InHouseProdImageSources";
import inHouseProdImageSources from "./InHouseProdImageSources";
import ContactUs from "../Home/ContactUs/ContactUs";

const InHouseProdImages = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
              <div className={globalStyles["first-line"]}>IN-HOUSE</div>
              <div className={globalStyles["px14-line"]}>
                HOME {">"} IN-HOUSE
              </div>
            </div>
          </div>
          {/* image container */}
          {/* poster-title */}
          {/* image index 0 */}
          <div
            className={globalStyles["poster-title"]}
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            <div className={`${globalStyles["poster-image"]}`}>
              <img src={inHouseProdImages[0].image} alt="" />
            </div>
            <div className={globalStyles["poster-description"]}>
              <div className={globalStyles["first-line"]}>
                In-House <br /> Production
              </div>
              <div className={globalStyles["large-description"]}>
                <p>
                  OneRX is a group of designers, artists, master fabricators and
                  builders. We physically make and participate in production
                  directly for our projects within our in-house facilities.
                </p>
                <p>
                  Each stage of the process is underpinned by a full range of
                  services we offer in-house, performed by a team of experts
                  passionate about shaping the future of retail.
                </p>
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* in house prod three menu container */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
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
                      Innovation is one of our core in-house capabilities. We
                      help to deploy great ideas and brilliant design to bring
                      our client's products and services to life, to real users.
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
                      We bring all members of a project team together early in
                      the process to propose best-value solutions, identify and
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

          {/* three-image-attached container */}
          {/* below in-house prod menu */}
          {/* image index 1,2,3 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={inHouseProdImageSources[1].image} alt="" />
                <img src={inHouseProdImageSources[2].image} alt="" />
                <img src={inHouseProdImageSources[3].image} alt="" />
              </div>
            </div>
          </div>

          {/* video container */}
          {/* home same video */}
          {/* image index video replace*/}
          <div
            className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
            data-aos="zoom-in"
          >
            <VideoSection videoLink={videoLink[0].image} />
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 5 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  High Level Production
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    Your exciting journey into Each stage of the process is
                    underpinned by a full range of services we offer in-house,
                    performed by a team of experts passionate about shaping the
                    future of retail.
                  </p>
                  <ul>
                    <li>Prompt client service on scheduled timeline</li>
                    <li>
                      Quality control with in-house production facilities and
                      experienced labour
                    </li>
                    <li>
                      Ability to manage a project within tight schedule and
                      budget
                    </li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={inHouseProdImageSources[4].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 5,6 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Quality Certificates
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We physically make and participate in production directly
                    for our projects within our in-house facilities.
                  </p>
                  <p>
                    We deliver, on the basis of an efficient quality system, the
                    best products and services which conform to our customer
                    requirements and expectations. The quality objectives of One
                    RX’s are measurable and consistent with quality policies.
                    Quality objectives include key performance indicators by
                    processes and joint quality improvement projects with
                    customers and suppliers.
                    <br />
                    One RX makes every effort to achieve excellent and
                    consistent product quality, and at the right time to ensure
                    customer satisfaction. In order to achieve this goal, One RX
                    continuously improves productivity by controlling variations
                    in various processes in a stable way.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={inHouseProdImageSources[5].image} alt="" />
                <img src={inHouseProdImageSources[6].image} alt="" />
              </div>
            </div>
          </div>

          {/* video container */}
          {/* home same video */}
          {/* image index video replace*/}
          <div
            className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
            data-aos="zoom-in"
          >
            <VideoSection videoLink={videoLink[0].image} />
          </div>

          {/* three-image-attached container */}
          {/* below second video */}
          {/* image index 7,8,9 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={inHouseProdImageSources[7].image} alt="" />
                <img src={inHouseProdImageSources[8].image} alt="" />
                <img src={inHouseProdImageSources[9].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 10 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>Prototyping</p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We can provide a prototyping service that allows appraisal
                    of intended structure, finish, and practical functional
                    detail for approval to progress to full manufacture.
                    Prototypes can be viewed at our dedicated OneRX factory /
                    warehouse facility, and we are able to offer prototyping
                    either as a development of our own concepts, or of supplied
                    creative intent from other sources.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={inHouseProdImageSources[10].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached container */}
          {/* below second video */}
          {/* image index 11,12,13 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={inHouseProdImageSources[11].image} alt="" />
                <img src={inHouseProdImageSources[12].image} alt="" />
                <img src={inHouseProdImageSources[13].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index copy services image */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>Retail Solutions</p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    Mass produced OneRX retail hardware with competitive price.
                  </p>
                  <p>
                    After design intent packs are completed, we move to
                    developing detail draw packs. At this stage every element of
                    the concept is specified and detailed ready for production
                    and installation. We produce full site packs that include
                    flooring and finish schedules, elevations, sections, ceiling
                    and lighting plans, and all electrical and plumbing
                    drawings. We also provide all details for production of
                    artwork and custom fixtures, specifications, and facade
                    signage details.
                  </p>
                  <p>
                    Following design approval, you will be assigned a project
                    manager who will make sure the project is fit for purpose.
                    They work closely with the project management team to
                    provide accurate costings and a plan for roll-out (if
                    necessary). Your dedicated project manager will act as the
                    link between the retailer, and you as the client to pull the
                    project together.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img
                  src="https://res.cloudinary.com/drplnrrww/image/upload/v1715594084/servicesGallery/services44_aw8ys0.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* three-image-attached container */}
          {/* below second video */}
          {/* image index 14,15,16 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={inHouseProdImageSources[14].image} alt="" />
                <img src={inHouseProdImageSources[15].image} alt="" />
                <img src={inHouseProdImageSources[16].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached container */}
          {/* below second video */}
          {/* image index 17,18,19 */}
          <div
            className={globalStyles["padding-group-middle-grayBackground"]}
            data-aos="fade-left"
          >
            <div
              className={globalStyles["three-image-attached-container-inhouse"]}
            >
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[17].image} alt="" />
                <div className={globalStyles["third-line"]}>
                  Wood cutting machine
                </div>
              </div>
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[18].image} alt="" />
                <div className={globalStyles["third-line"]}>Cnc machine</div>
              </div>
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[19].image} alt="" />
                <div className={globalStyles["third-line"]}>Mdf</div>
              </div>
            </div>
            <div
              className={globalStyles["three-image-attached-container-inhouse"]}
            >
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[20].image} alt="" />
                <div className={globalStyles["third-line"]}>Plywood</div>
              </div>
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[21].image} alt="" />
                <div className={globalStyles["third-line"]}>Sanding</div>
              </div>
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[22].image} alt="" />
                <div className={globalStyles["third-line"]}>
                  Painting & drying
                </div>
              </div>
            </div>
            <div
              className={globalStyles["three-image-attached-container-inhouse"]}
            >
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[23].image} alt="" />
                <div className={globalStyles["third-line"]}>Metal works</div>
              </div>
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[24].image} alt="" />
                <div className={globalStyles["third-line"]}>Assembling</div>
              </div>
              <div className={globalStyles["three-image-captions-column"]}>
                <img src={inHouseProdImageSources[25].image} alt="" />
                <div className={globalStyles["third-line"]}>Printing</div>
              </div>
            </div>
          </div>

          {/* video container */}
          {/* home same video */}
          {/* image index video replace*/}
          <div
            className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
            data-aos="zoom-in"
          >
            <VideoSection videoLink={videoLink[0].image} />
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default InHouseProdImages;
