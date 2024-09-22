import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <div className="bg-gray-200 py-8" data-aos="zoom-in" data-aos-offset="0">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">GALLERY</h1>
          <p className="text-sm text-gray-600">HOME &gt; GALLERY</p>
        </div>
      </div>
      <div className="container mx-auto px-1 lg:px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryImageSources.slice(0, 4).map((src, index) => (
            <div key={index} className="w-full" data-aos="zoom-in">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-4" data-aos="zoom-in">
          <img
            src={galleryImageSources[4]}
            alt="Gallery image 5"
            className="w-full h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
