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
    <div className="w-full lg:max-w-2xl mx-auto text-left lg:px-0 mt-4 lg:mt-0">
      <h2 className="font-bold text-2xl lg:text-3xl mb-2 lg:mb-4">{title}</h2>
      <h3 className="text-xl lg:text-2xl mb-2 lg:mb-4">{subtitle}</h3>
      <div>
        <p className="text-base lg:text-lg">{description}</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="w-full lg:w-auto flex content-center justify-center">
      <img
        src={imageIndex}
        alt={title}
        className="w-full h-auto object-cover"
      />
    </div>
  );

  return (
    <div
      data-aos={imageFirst ? "fade-right" : "fade-left"}
      className="my-8 lg:my-16"
    >
      <div
        className={`flex flex-col lg:flex-row gap-4 lg:gap-8 items-center ${
          imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <ImageSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default HomeItem;
