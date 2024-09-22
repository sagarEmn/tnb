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
    <div className="max-w-2xl mx-auto text-left">
      <h2 className="font-bold text-3xl">{title}</h2>
      <h3 className="text-2xl">{subtitle}</h3>
      <div>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className={globalStyles["image"]}>
      <img src={imageIndex} alt={title} />
    </div>
  );

  return (
    <div data-aos={imageFirst ? "fade-right" : "fade-left"}>
      <div className="flex gap-2 items-center">
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
