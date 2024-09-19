// ServiceItem.jsx
import React from "react";
import globalStyles from "../../global.module.css";

function ServiceItem({
  firstH4,
  secondH4,
  imageIndex,
  description,
  imageFirst = false,
}) {
  const ContentSection = () => (
    <div className={globalStyles["title-description"]}>
      <p className={globalStyles["first-line"]}>{firstH4}</p>
      <p className={globalStyles["third-line"]}>{secondH4}</p>
      <div
        className={
          globalStyles[imageFirst ? "description-one-small" : "description-one"]
        }
      >
        <p>{description}</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className={globalStyles["image"]}>
      <img src={imageIndex} alt={firstH4} />
    </div>
  );

  return (
    <div
      className={globalStyles["padding-group-middle"]}
      data-aos={imageFirst ? "fade-right" : "fade-left"}
    >
      <div className={globalStyles["title-description-image-container"]}>
        {imageFirst ? (
          <>
            <ImageSection />
            <ContentSection />
          </>
        ) : (
          <>
            <ContentSection />
            <ImageSection />
          </>
        )}
      </div>
    </div>
  );
}

export default ServiceItem;
