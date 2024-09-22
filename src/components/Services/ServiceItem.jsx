import React from "react";

function ServiceItem({
  firstH4,
  secondH4,
  imageIndex,
  description,
  imageFirst = false,
}) {
  const ContentSection = () => (
    <div className="flex-1 px-6">
      <h2 className="font-bold text-3xl mb-4">{firstH4}</h2>
      <h3 className="text-2xl mb-4">{secondH4}</h3>
      <div>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="flex-1">
      <img src={imageIndex} alt={firstH4} className="w-full h-auto object-cover" />
    </div>
  );

  return (
    <div 
      data-aos={imageFirst ? "fade-right" : "fade-left"} 
      className="mx-auto my-16 max-w-6xl"
    >
      <div className={`flex ${imageFirst ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}>
        <ImageSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default ServiceItem;