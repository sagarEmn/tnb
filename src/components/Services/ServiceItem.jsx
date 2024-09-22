import React from "react";

function ServiceItem({
  firstH4,
  secondH4,
  imageIndex,
  description,
  imageFirst = false,
}) {
  const ContentSection = () => (
    <div className="w-full lg:flex-1 px-1 lg:px-6 mt-4 lg:mt-0">
      <h2 className="font-bold text-2xl lg:text-3xl mb-4">{firstH4}</h2>
      <h3 className="text-xl lg:text-2xl mb-4">{secondH4}</h3>
      <div>
        <p className="text-base lg:text-lg">{description}</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="w-full lg:flex-1 ">
      <img src={imageIndex} alt={firstH4} className="w-full h-auto object-cover" />
    </div>
  );

  return (
    <div 
      data-aos={imageFirst ? "fade-right" : "fade-left"} 
      className="mx-auto my-8 lg:my-16 max-w-6xl"
    >
      <div className={`flex flex-col lg:flex-row gap-4 lg:gap-8 items-center ${
        imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}>
        <ImageSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default ServiceItem;