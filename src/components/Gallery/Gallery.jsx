import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import globalStyles from "../../global.module.css";
import galleryImageSources from "./GalleryImageSources";

function Gallery() {
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
          {/* nav location */}
          <div
            className={globalStyles["small-grayBackground"]}
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            <div className={globalStyles["display-nav-location-center"]}>
              <div className={globalStyles["first-line"]}>GALLERY</div>
              <div className={globalStyles["px14-line"]}>
                HOME {">"} GALLERY
              </div>
            </div>
          </div>

          <div
            className={globalStyles.galleryRow}
            data-aos="zoom-in"
          >
            <img
              src={galleryImageSources[0]}
              border="0"
              className={globalStyles.gallerySectionImage}
            />
             <img
              src={galleryImageSources[1]}
              border="0"
              className={globalStyles.gallerySectionImage}
            />
          </div>
          <div
            className={globalStyles.galleryRow}
            data-aos="zoom-in"
          >
           
         
       
            <img
              src={galleryImageSources[2]}
              border="0"
              className={globalStyles.gallerySectionImage}
            />
      
            <img
              src={galleryImageSources[3]}
              border="0"
              className={globalStyles.gallerySectionImage}
            />
          </div>
          <div
            className={globalStyles.galleryRowCenter}
            data-aos="zoom-in"
          >
            <img
              src={galleryImageSources[4]}
              border="0"
              className={globalStyles.gallerySectionImageCenter}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
