import React, { useEffect } from "react";
import styles from "../../../global.module.css";
import { contactImageSources } from "../../globalImageSources";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 950,
      delay: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className={styles["outer-container"]}>
        <div
          
          data-aos="fade-up"
        >
          <div className={styles["title-description-image-container-grid"]} data-aos="zoom-in">
            <div className="flex gap-4">
              <p className={styles["first-line"]}>Contact Us</p>
              <p className={styles["third-line"]}>
                "We don't want to push our ideas on to customers, <br /> we
                simply want to make what they want."
              </p>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={contactImageSources[0]} alt="Map Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p> บริษัท ทีเอ็นบี ซอร์ส จำกัด 20/1 (ห้องK19/2)</p>
                  <p>
                    {" "}
                    ถนนพัฒนาชนบท 3 แขวงคลองสองต้นนุ่น เขตลาดกระบัง
                    จังหวัดกรุงเทพมหานคร 10520 โทร.{" "}
                  </p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={contactImageSources[1]} alt="Phone Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p> Tel 02-138-9530</p>
                  <p> Mobile 09-4857-4030</p>
                  <p> เลขประจำตัวผู้เสียภาษี 0 1 0 5 5 5 9 0 8 9 8 1 7</p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={contactImageSources[4]} alt="Mail Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p>tnbsource.th@gmail.com</p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={contactImageSources[1]} alt="Phone Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p> +66 (0) 948 574 030</p>
                  <p> 0 617 849 898</p>
                  <p> 02-138-9530</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <p className={styles["first-line"]}>Drop Us A Line</p>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-details"]}>
                  <input
                    type="text"
                    placeholder="Name"
                    className={styles["input-field"]}
                  />
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-details"]}>
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles["input-field"]}
                  />
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-details"]}>
                  <textarea
                    placeholder="Message"
                    className={styles["textarea-field"]}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
