import React, { useEffect } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "../Home/ContactUs/ContactUs";
import VideoSection from "../VideoSection/VideoSection";
import { videoLink } from "../globalImageSources";
import servicesImageSources from "./ServicesImageSources";
import aboutImageSources from "../About/AboutImage";

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

          {/* video container */}
          {/* home same video */}
          <div
            className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
            data-aos="zoom-in"
          >
            <VideoSection videoLink={videoLink[0].image} />
          </div>

          {/* top-title title-description-image-container */}
          {/* we value quality, creativity sketch */}
          <div
            className={globalStyles["padding-group-middle-grayBackground"]}
            data-aos="fade-right"
          >
            <p className={globalStyles["first-line"]}>
              We Value Quality, Creativity, and Beauty Interior Design
            </p>
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We are proud to have worked with some of the world’s largest
                    and best loved brands across myriad sectors around the
                    globe. And whether creating stores, concessions, branded
                    spaces, pop-ups, point of sale or windows, our retail design
                    bring brands to life through immersive physical experiences
                    that engage your customers and create awareness among new
                    audiences.
                  </p>
                  <p>
                    From research, strategy and concept through to
                    implementation, our expert teams work collaboratively with
                    you, challenging the brief where necessary, sharing thoughts
                    and ideas, so every opportunity is maximised.
                  </p>
                  <p>
                    Creating a dynamic new store experience is ambitious.
                    Implementing that design across a fleet of store locations
                    is an even bigger challenge. This is where we come in. Our
                    architectural implementation experience spans more than 10
                    years of developing successful rollout and remodel programs
                    for major, multinational brands and retailers.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[0].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Interior Store Design
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We can help you to create an award-winning store design
                    (we’ve done it before), assisting you with every part of the
                    design process, we expertly manage your project every step
                    of the way, including technical development and full site
                    works. Ensuring that brand, creative concept and
                    architecture remain in perfect harmony, we seamlessly
                    deliver creative visions through the construction phase of
                    any new store design or refresh.
                  </p>

                  <p>
                    Our retail strategy service identifies opportunities for
                    your brand, and defines a clear story that will resonate
                    with the end user and provide a point of difference to
                    competitors. Through this strategic stage we write the brand
                    story, and create a series of pillars – the foundations of
                    the retail identity – that can be referred to during the
                    conceptualisation process. This analysis is how we elevate a
                    concept above simply good-looking, and create a retail
                    experience that ensures customer connection. and excellent
                    performance in any required context.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[1].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[3].image} alt="" />
                <img src={servicesImageSources[4].image} alt="" />
                <img src={servicesImageSources[5].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 5 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Pop-ups & Temporary Spaces
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    Pop-up Shops offer your customers something unique and
                    different from their usual visit to a store. With years of
                    experience in pop-up design, we are experts in designing
                    unique brand experiences which create interest and raise
                    awareness within new consumer groups and greater brand
                    advocacy amongst your existing customers.
                  </p>

                  <p>
                    As part of your wider brand strategy, pop-ups give brands
                    the opportunity to be more flexible and to experiment. At
                    OneRX we create bespoke pop-up destinations that push the
                    boundaries to surprise, engage and educate audiences, as
                    well as creating hype.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[5].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 6,7,8 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[6].image} alt="" />
                <img src={servicesImageSources[7].image} alt="" />
                <img src={servicesImageSources[8].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 9 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Branded Spaces & Concessions
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We have a great ability to understand brands and distill
                    them into branded spaces and concessions that attract
                    customers attention in multi-brand retail environments.
                  </p>

                  <p>
                    From the smallest footprint of a single piece of furniture
                    to a full-blown shop-in-shop, whatever and wherever the
                    location, our design development team review the features
                    and layout to optimise each space to create maximum standout
                    for the brand in each setting, acting as brand-guardian for
                    rollout, to ensure consistent delivery of the concept.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[9].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 10,11,12 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[10].image} alt="" />
                <img src={servicesImageSources[11].image} alt="" />
                <img src={servicesImageSources[12].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 13 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Event, Roadshow and Exhibions
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    Our approach is totally customer-centric. We see to
                    individual clients the day requirements are adequately
                    fulfilled.
                  </p>

                  <p>
                    By choosing OneRX, you gain the services of award-winning
                    design and consultation teams. We always strive to
                    understand your marketing objectives and vision, which
                    inform the island concepts designed for you. After the
                    initial 3D design, we include your feedback to improve upon
                    and render a final exhibit that serves as a beacon on a
                    packed trade show, roadshow, events or exhibition floor.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[13].image} alt="" />
              </div>
            </div>
          </div>

          {/* video container */}
          {/* home same video replace*/}
          {/* image index 14 */}
          <div
            className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
            data-aos="fade-right"
          >
            <VideoSection videoLink={videoLink[0].image} />
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 15,16,17 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[15].image} alt="" />
                <img src={servicesImageSources[16].image} alt="" />
                <img src={servicesImageSources[17].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 18 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Show Window Displays
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We create visually striking window displays which capture
                    your customers’ imagination and drive footfall
                    in-store.Using shopper insights to understand your
                    customers’ shopping missions and their flow around the
                    store, we create bespoke solutions that embody the unique
                    spirit of your brand and guide customers through the store,
                    designing impactful to disrupt their journey and draw their
                    attention to specific products and promotions.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[18].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 19,20,21 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[19].image} alt="" />
                <img src={servicesImageSources[20].image} alt="" />
                <img src={servicesImageSources[21].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 22 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>Point of Sale</p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    It’s all in the detail… From a single piece of card to a
                    crafted and highly engineered, standalone fixture, we create
                    effective point of sale that drives sales. Whether our
                    clients require a one-off solution or POS for global
                    rollout, as retail specialists, our team of
                    multi-disciplined designers are skilled in creating bespoke
                    POS concepts, choosing materials and finishes that retain
                    the integrity and values of your brand.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[22].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 23,24,25 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[23].image} alt="" />
                <img src={servicesImageSources[24].image} alt="" />
                <img src={servicesImageSources[25].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 26 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Digital Integration
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We work with you to create retail environments that truly
                    integrate digital with the physical. From your brand’s
                    online persona to digital interventions in-store, we take a
                    holistic approach to create a unified and seamless
                    experience that enriches and enhances their shopping journey
                    and the customers relationship with your brand.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[26].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 27,28,29 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[27].image} alt="" />
                <img src={servicesImageSources[28].image} alt="" />
                <img src={servicesImageSources[29].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 30 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Graphics & Branding
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We understand retail graphics, from category management and
                    spatial graphics to wayfinding and navigation, not to
                    mention front of store graphics that draw consumers into
                    your store. Retail graphics can not only support your brand
                    in telling its story at retail, but they are also highly
                    effective at guiding shopping journeys and influencing
                    buying decisions instore.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[30].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 31,32,33 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[31].image} alt="" />
                <img src={servicesImageSources[32].image} alt="" />
                <img src={servicesImageSources[33].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 34 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Technical Development
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    Following design approval, you will be assigned a technical
                    designer who will make sure the project is fit for purpose.
                    They work closely with the project management team to
                    provide accurate costings and a plan for roll-out (if
                    necessary). Your dedicated project manager will act as the
                    link between OneRX, the retailer, and you as the client to
                    pull the project together.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[34].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 35,36,37 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[35].image} alt="" />
                <img src={servicesImageSources[36].image} alt="" />
                <img src={servicesImageSources[37].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 38 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>Prototyping</p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    We can provide a prototyping service that allows appraisal
                    of intended structure, finish, and practical functional
                    detail for approval to progress to full manufacture.
                    Prototypes can be viewed at our dedicated One RX warehouse
                    facility, and we are able to offer prototyping either as a
                    development of our own concepts, or of supplied creative
                    intent from other sources.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[38].image} alt="" />
              </div>
            </div>
          </div>

          {/* three-image-attached-container */}
          {/* below interior store design */}
          {/* image index 39,40,41 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["three-image-attached"]}>
                <img src={servicesImageSources[39].image} alt="" />
                <img src={servicesImageSources[40].image} alt="" />
                <img src={servicesImageSources[41].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 42 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Assembly & Installation
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <p>
                    Working closely alongside our designers and project
                    managers, our team technical developers and skilled fitters
                    provide a professional assembly and installation service.
                    Despite a local base in our OneRX factory / warehouse, our
                    friendly fitters travel across the globe to carry out
                    projects of all shapes and sizes. From the installation of a
                    kiosk through to the finishing touches of a large format
                    store, our team are fully versed in all aspects of shop
                    fitting and will bring retail projects to life with utmost
                    care.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[42].image} alt="" />
              </div>
            </div>
          </div>

          {/* two-image-attached-container */}
          {/* below interior store design */}
          {/* image index 43,44 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div className={globalStyles["three-image-attached-container"]}>
              <div className={globalStyles["two-image-attached"]}>
                <img src={servicesImageSources[43].image} alt="" />
                <img src={servicesImageSources[44].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 45 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
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
                <img src={servicesImageSources[45].image} alt="" />
              </div>
            </div>
          </div>

          {/* video container */}
          {/* home same video */}
          {/* image index 46 */}
          <div
            className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
            data-aos="zoom-in"
          >
            <VideoSection videoLink={videoLink[0].image} />
          </div>

          {/* grayBackground first-line container */}
          <div
            className={globalStyles["padding-group-middle-grayBackground"]}
            data-aos="fade-left"
          >
            <p className={globalStyles["first-line"]}>
              With our portfolio of work and integrated skill sets, we offer all
              the services you need to bring your vision to life.
            </p>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 47 */}
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
                <p className={globalStyles["first-line"]}>Retail offerings</p>
                <div className={globalStyles["description-one-small"]}>
                  <ul>
                    <li>Retail Design</li>
                    <li>Prototype Design & Documentation</li>
                    <li>Prototype Implementation</li>
                    <li>Flagships</li>
                    <li>Pop-Up Experiences</li>
                    <li>Shop-In-Shop's</li>
                    <li>Experience Adaptations</li>
                    <li>Design Sprints</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[47].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 48 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div
              className={
                globalStyles["title-description-image-container-reverse"]
              }
            >
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Interior Design Offerings
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <ul>
                    <li>Concept Development</li>
                    <li>Environmental Digital Strategy</li>
                    <li>Design Adaptation Development</li>
                    <li>Resource Design Specifications</li>
                    <li>Sustainable Design</li>
                    <li>Design Standards Guidelines</li>
                    <li>3D Visualization</li>
                    <li>Signage</li>
                    <li>Security System</li>
                    <li>Fabric light Panel</li>
                    <li>Display Funitures</li>
                    <li>Highlight Panel</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[48].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 49 */}
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
                <p className={globalStyles["first-line"]}>
                  Architectural Implementation Offerings
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <ul>
                    <li>Multi-Site Implementation</li>
                    <li>Architectural Documentation</li>
                    <li>Site Surveys</li>
                    <li>Code Research / Due Diligence</li>
                    <li>Test Fits / Design Adaptation</li>
                    <li>Engineering Coordination</li>
                    <li>Construction Documentation</li>
                    <li>Construction Administration</li>
                    <li>Master Standards Maintenance</li>
                    <li>BIM / Revit Transitions</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[49].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* interior store design */}
          {/* image index 50 */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div
              className={
                globalStyles["title-description-image-container-reverse"]
              }
            >
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  In-House Production
                </p>
                <div className={globalStyles["description-one-small"]}>
                  <ul>
                    <li>Wood cutting machine</li>
                    <li>Cnc machine</li>
                    <li>Mdf</li>
                    <li>Plywood</li>
                    <li>Sanding</li>
                    <li>Painting & drying</li>
                    <li>Metal wroks</li>
                    <li>Assembling</li>
                    <li>Printing</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={servicesImageSources[50].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-title-description */}
          {/* retail-solutions planning space */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-right"
          >
            <div
              className={`${globalStyles["title-description-image-container"]} ${globalStyles["three-text-columns"]}`}
            >
              <div className={globalStyles["title-description"]}>
                <div className={globalStyles["first-line"]}>
                  Retail Solutions
                </div>
                <div className={globalStyles["description-one"]}>
                  <ul>
                    <li>Background analysis</li>
                    <li>Spatial analysis</li>
                    <li>Concept development</li>
                    <li>Trend report</li>
                    <li>Shop identity design</li>
                    <li>Developing construction drawings</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["title-description"]}>
                <div className={globalStyles["first-line"]}>Planning</div>
                <div className={globalStyles["description-one"]}>
                  <ul>
                    <li>Signage</li>
                    <li>Security System</li>
                    <li>Fabric light Panel</li>
                    <li>Display Funitures</li>
                    <li>Display Module</li>
                    <li>Highlight Panel</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["title-description"]}>
                <div className={globalStyles["first-line"]}>Space</div>
                <div className={globalStyles["description-one"]}>
                  <ul>
                    <li>Office design</li>
                    <li>Hospitality space design</li>
                    <li>Exhibition design</li>
                    <li>Roadshow</li>
                    <li>Event design</li>
                    <li>Technical drawing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* furniture media graphics */}
          <div
            className={globalStyles["padding-group-middle"]}
            data-aos="fade-left"
          >
            <div
              className={`${globalStyles["title-description-image-container"]} ${globalStyles["three-text-columns"]}`}
            >
              <div className={globalStyles["title-description"]}>
                <div className={globalStyles["first-line"]}>Furniture</div>
                <div className={globalStyles["description-one"]}>
                  <ul>
                    <li>Mall furniture</li>
                    <li>Retail furniture</li>
                    <li>Office furniture</li>
                    <li>Public furniture</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["title-description"]}>
                <div className={globalStyles["first-line"]}>Media</div>
                <div className={globalStyles["description-one"]}>
                  <ul>
                    <li>Digital + Retail solution</li>
                    <li>In-store digital solution</li>
                    <li>Interactive software</li>
                    <li>Hardware design</li>
                  </ul>
                </div>
              </div>
              <div className={globalStyles["title-description"]}>
                <div className={globalStyles["first-line"]}>Grphic</div>
                <div className={globalStyles["description-one"]}>
                  <ul>
                    <li>Advertisement</li>
                    <li>Info graphic</li>
                    <li>Editorial design</li>
                    <li>Signage</li>
                    <li>Creating 2D / 3D images</li>
                  </ul>
                </div>
              </div>
            </div>
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
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Services;
