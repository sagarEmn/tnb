import React from "react";
import Slider from "./Slider/Slider";
import Gallery1 from "./Gallery1/Gallery1";
import VideoSection from "./Video-Section/VideoSection";
import InHouseProd from "./InHouseProd/InHouseProd";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import ThreeImageGrid from "./ThreeImageGrid/ThreeImageGrid";
import TenYearsExp from "./TenYearsExp/TenYearsExp";
import AutoPlay from "./AutoPlay/AutoPlay";
import BeforeAfterSlider from "./BeforeAfterSlider/BeforeAfterSlider";
import ContactUs from "./ContactUs/ContactUs";
import { homeThreeFirst, homeThreeSecond } from "./ThreeImageGrid/imageSources";

export default function Home() {
  return (
    <>
      <Slider />
      <Gallery1 />
      <VideoSection />
      <InHouseProd />
      <WhatWeOffer />
      <ThreeImageGrid imageSources={homeThreeFirst} />
      <TenYearsExp />
      <ThreeImageGrid imageSources={homeThreeSecond} />
      <AutoPlay />
      <BeforeAfterSlider />
      <ContactUs />
    </>
  );
}
