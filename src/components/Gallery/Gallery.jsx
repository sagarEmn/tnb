import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

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
  // Function to chunk the array into smaller arrays
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  // Chunk the imageUrls array into arrays of size 3
  const chunkedUrls = chunkArray(galleryImageSources, 3);

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

          {/* Loop through the chunkedUrls array and render each galleryRow */}
          {chunkedUrls.map((chunk, index) => (
            <div
              key={index}
              className={globalStyles.galleryRow}
              data-aos="zoom-in"
            >
              {/* Loop through the images in the current chunk */}
              {chunk.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`Image ${index * 3 + idx + 1}`}
                  border="0"
                  className={globalStyles.gallerySectionImage}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
