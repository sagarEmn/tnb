import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="text-white p-8">
      <div className="container footer-padding mx-auto flex justify-between" data-aos="zoom-in">
        <nav>
          <ul className="space-y-2">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/contactpage">ABOUT US</Link></li>
            <li><Link to="/services">OUR WORK</Link></li>
            <li><Link to="/contactpage">CONTACT</Link></li>
          </ul>
        </nav>
        <div className="text-right">
          <h3 className="font-bold mb-2">Global Office</h3>
          <p>Dubai, UAE</p>
          <p>Istanbul, Türkiye</p>
          <p>Seoul, Korea</p>
          <Link to="/contactpage" className="inline-block mt-2 underline">Get in Touch</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;