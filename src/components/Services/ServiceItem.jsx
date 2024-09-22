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
    <div className="max-w-2xl mx-auto text-left">
      <h2 className="font-bold text-3xl">{firstH4}</h2>
      <h3 className="text-2xl">{secondH4}</h3>
      <div>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div>
      <img src={imageIndex} alt={firstH4} />
    </div>
  );

  return (
    <div data-aos={imageFirst ? "fade-right" : "fade-left"} className="mx-auto">
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

export default ServiceItem;
