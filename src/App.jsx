import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProgressBar from "react-scroll-progress-bar"; 

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./index.css";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import ScrollToTop from "./ScrollToTop";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  return (
    <Router scrollToTop={true}>
      <ScrollToTop />
      <ProgressBar bgcolor="#DA2337" height="10px" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
