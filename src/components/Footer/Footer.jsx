import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-purple-600 text-white p-8">
      <div
        className="container mx-auto flex justify-between items-start"
        data-aos="zoom-in"
      >
        <nav className="w-1/4">
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">HOME</Link></li>
            <li><Link to="/about-us" className="hover:underline">ABOUT US</Link></li>
            <li><Link to="/services" className="hover:underline">OUR WORK</Link></li>
            <li><Link to="/contactpage" className="hover:underline">CONTACT</Link></li>
          </ul>
        </nav>
        
        <div className="w-2/4 text-center">
          <h2 className="text-lg font-bold mb-2">Factory Location</h2>
          <p className="text-sm">
            8/4 Moo 4 Khlong Udom chonlajorn,<br />
            Mueng Chachoengsao, Chachoengsao 24000
          </p>
        </div>
        
        <div className="w-1/4 text-right">
          <h3 className="font-bold mb-2">Global Office</h3>
          <p className="text-sm">Dubai, UAE</p>
          <p className="text-sm">Istanbul, Türkiye</p>
          <p className="text-sm">Seoul, Korea</p>
          <Link to="/contactpage" className="inline-block mt-2 underline hover:text-gray-200">
            Get in Touch
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;