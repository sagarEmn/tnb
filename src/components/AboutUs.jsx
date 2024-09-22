import React from "react";
import globalStyles from "../global.module.css";

const AboutUs = () => {
  return (
    <>
      {/* nav location */}
      <div className={globalStyles["small-grayBackground"]}>
        <div className={globalStyles["display-nav-location-center"]}>
          <div className={globalStyles["first-line"]}>ABOUT US</div>
          <div className={globalStyles["px14-line"]}>HOME {">"} ABOUT US</div>
        </div>
      </div>
      <div className="container mx-auto p-6 bg-white ">
        <h1 className="text-3xl font-bold mb-6 text-center we-design-purple">
          We Design Your Idea into Today's Reality
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <h3 className="text-xl font-medium mb-2">Who is ONERX Thailand?</h3>
          <p className="mb-4">
            Established in 2016, ONERX Thailand specializes in event management
            and manufacturing solutions. We provide high-quality modular
            fixtures, custom-built furniture, and expert manpower for seamless
            event execution. Our manufacturing process is driven by skilled
            craftsmen utilizing advanced professional tools to ensure precision,
            durability, and innovation in every product. With a focus on
            excellence and efficiency, we deliver tailored solutions that
            elevate brands and streamline operations for both local and
            international clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="mb-4">
            ONERX Thailand offers a complete range of services, including event
            management, modular fixtures, and custom furniture manufacturing.
            With skilled craftsmen and advanced tools, we create bespoke
            solutions tailored to your needs. Our professional manpower ensures
            seamless execution, making us the trusted partner for high-quality,
            efficient event and manufacturing services.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-medium mb-2">
            Event Solutions & Execution
          </h3>
          <p className="mb-2">
            Comprehensive event planning and flawless execution tailored to your
            needs.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Planning and concept development</li>
            <li>Space, display, and fixture design</li>
            <li>Visitor paths and experiences</li>
            <li>Custom stand and booth design</li>
            <li>Production, installation, and onsite execution</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-medium mb-2">
            Retail and Commercial/Residential
          </h3>
          <p className="mb-2">
            We design and manufacture custom fixtures and furniture for retail,
            commercial, and residential spaces. From eye-catching retail
            displays to functional and stylish office furniture and bespoke home
            pieces, our solutions elevate environments with flexibility,
            quality, and personalization.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Planning and concept development</li>
            <li>Space, display, and fixture design</li>
            <li>Customer journey & experiences</li>
            <li>Production and installation</li>
            <li>Residential plan and interior fit-out</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-medium mb-2">Production</h3>
          <p className="mb-2">
            Quality mass production of customized furniture, VMD kits, and
            merchandise
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Mass production</li>
            <li>Fixture design and production</li>
            <li>VMD kit design and production</li>
            <li>Goods design and production</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-2">Global Execution</h3>
          <p className="mb-2">
            Seamless global operation for a unified brand experience.
          </p>
          <ul className="list-disc pl-6">
            <li>Global design standards development</li>
            <li>Project management for global operation</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
