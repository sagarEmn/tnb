import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProgressBar from "react-scroll-progress-bar"; //Add this line

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import InHouseProd from "./components/InHouseProd/InHouseProd";
import Gallery from "./components/Gallery/Gallery";
import ContactPage from "./components/ContactPage/ContactPage";
import KVKK from "./components/Footer/KVKK";
import KVKK2 from "./components/Footer/KVKK2";
import Quality from "./components/Footer/Quality";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router scrollToTop={true}>
      <ScrollToTop />
      <ProgressBar bgcolor="#DA2337" height="10px" />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/inHouseProd" element={<InHouseProd />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/KVKK" element={<KVKK />} />
        <Route path="/KVKK2" element={<KVKK2 />} />
        <Route path="/QualityCertificates" element={<Quality />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
