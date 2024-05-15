import { Component } from "react";
import styles from "./Gallery1.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Gallery1 extends Component {
  componentDidMount() {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }

  render() {
    return (
      <>
        <div className={styles["gallery-container"]}>
          <div className={styles["gallery-box"]} data-aos="fade-left">
            <div className={styles["gallery-text"]}>
              <div className={styles["texts-contain"]}>
                <p className={`${styles["first-line"]}`}>
                  We Always Produce Better
                </p>
                <p className={`${styles["first-line"]}`}>Results for Retail</p>
                <a
                  href="http://www.one-rx.com/wp-content/plugins/pdf-poster/pdfjs/web/viewer.html?file=http://www.one-rx.com/wp-content/uploads/2023/06/OneRX_Credential_hq.pdf&download=true&print=true&openfile=false"
                  className={`${styles["portfolio-btn"]}`}
                >
                  Click to see our portfolio
                </a>
              </div>
            </div>
            <div
              className={styles["gallery-image"]}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515283/homeGallery/homegallery1_cd535i.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            className={`${styles["gallery-box"]} ${styles["gallery-box-second"]}`}
            data-aos="fade-right"
          >
            <div className={styles["gallery-text"]}>
              <div className={styles["texts-contain"]}>
                <div className={styles["description-one"]}>
                  <p>
                    Our creativity is fearless, our teamwork is unrivalled and
                    our insight is empowering. We push boundaries and we're
                    ambitious for our brands, and at the heart of it, we're the
                    produce better results for etail.{" "}
                  </p>
                  <ul className="description-one-lists">
                    <li>
                      Well trained designers in the field of brand experience
                      retail, events and trade show.
                    </li>
                    <li>
                      Huge databases in 3D design which have been acquired from
                      various projects globally.
                    </li>
                    <li>
                      We provide the best of both the design and production with
                      access to the technology to build anything custom and
                      complex.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={styles["gallery-image"]}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515281/homeGallery/homegallery2_jbg2jc.jpg"
                alt=""
              />
            </div>
          </div>

          <div className={styles["three-image-gallery-box"]}>
            <div className={styles["first-line"]} data-aos="fade-right">
              We offers Ideas With Impressive Details
            </div>
            <div className={styles["three-images-gallery"]}>
              <div className={styles["threeFlex"]} data-aos="fade-right">
                <img
                  src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515280/homeGallery/homegallery3_r0ut4t.jpg"
                  alt="three-image-one"
                />
                <p className={styles["second-line"]}>Be the difference</p>
                <p className={styles["description-one"]}>
                  We rethink and refine to anticipate your needs in an
                  ever-changing marketplace. We help them leverage design's
                  power to generate innovative solutions that affect real
                  transformation.
                </p>
              </div>
              <div className={styles["threeFlex"]}  data-aos="fade-up">
                <img
                  src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515281/homeGallery/homegallery4_qgigmp.jpg"
                  alt="three-image-two"
                />
                <p className={styles["second-line"]}>Fresh Design</p>
                <p className={styles["description-one"]}>
                  We develop transformative solutions that move your brand and
                  business forward. With our diverse portfolio of work and
                  integrated skill sets, we offer all the services you need to
                  bring your vision to life.
                </p>
              </div>
              <div className={styles["threeFlex"]}  data-aos="fade-left">
                <img
                  src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515281/homeGallery/homegallery5_tjqg85.jpg"
                  alt="three-image-three"
                />
                <p className={styles["second-line"]}>Global Solutions</p>
                <p className={styles["description-one"]}>
                  Our service delivery model that connects the dots between our
                  service offerings and our practice area ladership so that you
                  get a solution tailored to support not just your design needs,
                  also your buisness goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Gallery1;
