// HomeItem.jsx
import React from "react";
import globalStyles from "../../global.module.css";

function HomeItem({
  title,
  subtitle,
  description,
  imageIndex,
  imageFirst = false,
}) {
  const ContentSection = () => (
    <div className={globalStyles["title-description"]}>
      <h2 className={globalStyles["first-line"]}>{title}</h2>
      <h3 className={globalStyles["third-line"]}>{subtitle}</h3>
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
      <img src={imageIndex} alt={title} />
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

export default HomeItem;