import React from "react";
import TeamSection from "./PortfolioComponents/TeamSection";
import globalStyles from "../../global.module.css";
import ProductsShowcase from "./PortfolioComponents/ProductsShowcase";

function Portfolio() {
  const samsungProducts = [
    {
      src: "/img/product/samsung store1.1.png",
      title: "Samsung Store 1-01",
    },
    {
      src: "/img/product/samsung sodex exhibition 3.1.png",
      title: "Samsung Store 2-01",
    },
    {
      src: "/img/product/samsung store1.2.png",
      title: "Samsung Sodex Exhibition 3-01",
    },
    {
      src: "/img/product/samsung IR counter 4.1.png",
      title: "Samsung IR Counter 4-01",
    },
  ];

  const builtInFurnitureProducts = [
    {
      src: "/img/product/built on furniture 1.1.png",
      title: "Built In Furniture 1-01",
    },
    {
      src: "/img/product/built on furniture 2.1.png",
      title: "Built In Furniture 2-01",
    },
  ];
  const creativeDesignProducts = [
    {
      src: "/img/product/samsung galexy studio 3.1.png",
      title: "Samsung Galaxy Studio 3-01",
    },
    {
      src: "/img/product/pelephone-samsung kiosk 4.1.png",
      title: "Pelephone-Samsung Kisok 4-01",
    },
    {
      src: "/img/product/dynamic-samsung kiosk5.1.png",
      title: "Dynamica-Samsung Kiosk 5-01",
    },
    {
      src: "/img/product/mobile outfitters 6.1.png",
      title: "mobile outfitters",
    },
    {
      src: "/img/product/line 9.1.png",
      title: "Line",
    },
    {
      src: "/img/product/nandos 10.1.png",
      title: "Nandos",
    },
  ];

  return (
    <>
          {/* nav location */}
          <div
            className={globalStyles["small-grayBackground"]}
            data-aos="zoom-in"
            data-aos-offset="0"
          >
            <div className={globalStyles["display-nav-location-center"]}>
              <div className={globalStyles["first-line"]}>PORTFOLIO</div>
              <div className={globalStyles["px14-line"]}>
                HOME {">"} PORTFOLIO
              </div>
            </div>
          </div>
      <TeamSection />
      <ProductsShowcase
        subTitle={"Interior Construction"}
        products={samsungProducts}
      />
      <ProductsShowcase
        subTitle={"Built In Furniture"}
        products={builtInFurnitureProducts}
      />
      <ProductsShowcase
        subTitle={"Creative Design"}
        products={creativeDesignProducts}
      />
    </>
  );
}

export default Portfolio;
