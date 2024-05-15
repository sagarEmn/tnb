import React, { useState, useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImageSources from "./AboutImage.js";
import ContactUs from "../Home/ContactUs/ContactUs.jsx";
import VideoSection from "../VideoSection/VideoSection.jsx";
import { contactImageSources, videoLink } from "../globalImageSources.jsx";

const Gallery1 = () => {
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
      <div className={`${globalStyles["outer-container"]}`}>
        <div className={`${globalStyles["padding-container"]}`}>
          {/* nav location */}
          <div
            className={globalStyles["small-grayBackground"]}
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            <div className={globalStyles["display-nav-location-center"]}>
              <div className={globalStyles["first-line"]}>ABOUT US</div>
              <div className={globalStyles["px14-line"]}>
                HOME {">"} ABOUT US
              </div>
            </div>
          </div>

          {/* image container */}
          <div
            className={`${globalStyles["padding-group-first"]} ${globalStyles["padding-group-extend"]} `}
            data-aos="zoom-in"
          >
            <div className={globalStyles["image-container"]}>
              <img src={aboutImageSources[0].image} alt="" />
            </div>
          </div>

          {/* title texts content */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["first-line"]}>
              We are global interior and branding experts specialising in
              customer-centric experience design.
            </div>

            {/* descriptions text content */}
            <div className={globalStyles["description-one-small"]}>
              <p>
                One RX has a cross-border retail network of professionals who
                have worked together to help retail brands meet the needs of
                their business in the Europe, Asia and Middle East. Various
                retail environment experience in diverse country ; proven
                experience in GCC, Turkey, Africa, Russia and Korea.
              </p>
              <p>
                Collaboration and information sharing is the key to successful
                global retail client service. Our professionals engage in
                consistent dialogue across time zones and geography to stay
                abreast of the changing pace of the retail industry.
              </p>
            </div>
          </div>

          {/* video container */}
          <div
            className={globalStyles["padding-group-extend"]}
            data-aos="zoom-in"
          >
            <VideoSection videoLink={videoLink[1].image} />
          </div>

          {/* title-description-image-container */}
          {/* providing customized solutions */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Providing Customized Solutions
                </p>

                <div className={globalStyles["description-one-small"]}>
                  <p>
                    OneRX represents a collection of highly qualified designers,
                    architects, project managers and engineers. We are
                    specialist in retail and brand development and work
                    internationally.
                  </p>
                  <p>
                    We have offices in (HQ) Dubai, Seoul, Istanbul allowing us
                    to respond quickly to our client’s regional needs. Our teams
                    can develop projects from concept through project management
                    and replicate it anywhere.
                  </p>
                  <p>
                    OneRX culture is to provide customized solutions with high
                    quality services. Our goal is to ensure our clients succeed
                    and that we become an extension of their business.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={aboutImageSources[2].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* collaboration samsung chiel logo */}
          <div
            className={globalStyles["padding-group-middle-grayBackground"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>Collaboration</p>

                <div className={globalStyles["description-one-small"]}>
                  <p>
                    OneRX operates as a subsidiary of Samsung Group and in
                    cooperation with Cheil Worldwide.
                  </p>
                </div>
                <img
                  className={globalStyles["company-logo-image"]}
                  src={aboutImageSources[3].image}
                  alt="samsung logo"
                />
                <img
                  className={globalStyles["company-logo-image"]}
                  src={aboutImageSources[4].image}
                  alt="cheil logo"
                />
              </div>
              <div className={globalStyles["image-more"]}>
                <img src={aboutImageSources[5].image} alt="" />
              </div>
            </div>
          </div>

          {/* video container */}
          {/* home same video */}
          <div
            className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
            data-aos="zoom-in"
          >
            <VideoSection videoLink={videoLink[0].image} />
          </div>

          {/* title-description-image-container */}
          {/*  gear icon getting to know you */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div
              className={
                globalStyles["title-description-image-container-reverse"]
              }
            >
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line-taller"]}>
                  Getting to know you
                </p>

                <div className={globalStyles["description-one"]}>
                  We read, research, and explore to fully understand your brand
                  and its objectives, the customer, and the specific and current
                  market sector landscape. This research stage helps us set you
                  apart and informs both the core functional nature, and the
                  visual direction of the concept.
                </div>
                <p className={globalStyles["first-line-taller"]}>
                  Defining brand story at retail
                </p>

                <div className={globalStyles["description-one"]}>
                  We read, research, and explore to fully understand your brand
                  and its objectives, the customer, and the specific and current
                  market sector landscape. This research stage helps us set you
                  apart and informs both the core functional nature, and the
                  visual direction of the concept.
                </div>
                <p className={globalStyles["first-line-taller"]}>
                  Bring a strategy to life
                </p>

                <div className={globalStyles["description-one"]}>
                  We are proud to have worked with some of the world’s largest
                  and best loved brands across myriad sectors around the globe.
                  And whether creating stores, concessions, branded spaces,
                  pop-ups, point of sale or windows, our retail design bring
                  brands to life through immersive physical experiences that
                  engage your customers and create awareness among new
                  audiences.
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={aboutImageSources[6].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/*  global reach */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line-taller"]}>
                  Global Reach
                </p>

                <div className={globalStyles["description-one"]}>
                  We have implemented projects in every far reaching corner of
                  the world. We know the nuances of specific markets, consumers
                  and even store groups like the back of our hand, and we
                  understand what it takes to get to know somewhere new.
                  Wherever your sights are set, we are up for the challenge and
                  will ensure that you remain relevant and distinctive; anywhere
                  in the world.
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={aboutImageSources[7].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/*  create projects connect each other */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line-taller"]}>
                  We create projects that make every brand unique
                </p>

                <div className={globalStyles["description-one"]}>
                  Teamwork and collaboration generate creativity and innovation.
                  At OneRX, we harbor a synergistic culture, productively
                  working together to ensure that the passion behind our
                  projects resonates within. We take pride in our work, striving
                  to produce the most unique, aesthetically attractive designs.
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={aboutImageSources[8].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/*  building cost effective global image */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line-taller"]}>
                  Building cost effective, <br />
                  multi-site solutions
                </p>

                <div className={globalStyles["description-one"]}>
                  Our team is nationally licensed and completes over 2,000
                  domestic projects each year. Our portfolio of work encompasses
                  retail categories, store formats, and geographic regions
                  across GCC, Turkey, Africa, Russia and Korea. We combine
                  quality survey work with design-sensitive planning,
                  documentation, and proactive project management to
                  successfully implement multiple sites simultaneously.
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={aboutImageSources[9].image} alt="" />
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

          {/* title-description-image-container */}
          {/* three-image-attached-container */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={aboutImageSources[11].image} alt="" />
                <img src={aboutImageSources[12].image} alt="" />
                <img src={aboutImageSources[13].image} alt="" />
              </div>
            </div>
          </div>

          {/* contact us drop section
          <div
            className={globalStyles["padding-group-middle-grayBackground"]}
            data-aos="fade-up"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description-flexGap"]}>
                <p className={globalStyles["first-line"]}>Contact Us</p>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-icons"]}>
                    <img src={contactImageSources[0]} alt="Map Icon" />
                  </div>

                  <div className={globalStyles["contact-details"]}>
                    <p>HQ DUBAI OFFICE:</p>
                    <p>One RX Interior Decoration LLC Plot No - 598-709 </p>
                    <p>
                      Next to Dubai Metal Grating & Manufcturing LLC DIP - 1{" "}
                    </p>
                    <p>Dubai / UAE </p>
                  </div>
                </div>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-icons"]}>
                    <img src={contactImageSources[1]} alt="Phone Icon" />
                  </div>

                  <div className={globalStyles["contact-details"]}>
                    <p>+971 4 590 4700</p>
                  </div>
                </div>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-icons"]}>
                    <img src={contactImageSources[2]} alt="Map Icon" />
                  </div>

                  <div className={globalStyles["contact-details"]}>
                    <p>TURKEY OFFICE:</p>
                    <p>Orta Mah. İbrahim Ağa Cad. No:18 Kısmet Han </p>
                    <p>Zemin kat Bayrampaşa, İstanbul / TÜRKİYE </p>
                  </div>
                </div>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-icons"]}>
                    <img src={contactImageSources[3]} alt="Phone Icon" />
                  </div>

                  <div className={globalStyles["contact-details"]}>
                    <p>+90 212 437 8072</p>
                  </div>
                </div>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-icons"]}>
                    <img src={contactImageSources[4]} alt="Mail Icon" />
                  </div>

                  <div className={globalStyles["contact-details"]}>
                    <p>info@one-rx.com</p>
                  </div>
                </div>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-icons"]}>
                    <img src={contactImageSources[5]} alt="Mail Icon" />
                  </div>

                  <div className={globalStyles["contact-details"]}>
                    <p>infoturkey@one-rx.com</p>
                  </div>
                </div>
              </div>

              <div className={globalStyles["title-description-flexGap"]}>
                <p className={globalStyles["first-line"]}>Drop Us A Line</p>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-details"]}>
                    <input
                      type="text"
                      placeholder="Name"
                      className={globalStyles["input-field"]}
                    />
                  </div>
                </div>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-details"]}>
                    <input
                      type="email"
                      placeholder="Email"
                      className={globalStyles["input-field"]}
                    />
                  </div>
                </div>

                <div className={globalStyles["contact-us-information"]}>
                  <div className={globalStyles["contact-details"]}>
                    <textarea
                      placeholder="Message"
                      className={globalStyles["textarea-field"]}
                    ></textarea>
                  </div>
                </div>
                <p className={globalStyles["description-one"]}>
                  If you are interested in working with us then please dop us a
                  line, or contact us below informations, we would love to hear
                  from you.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Gallery1;
