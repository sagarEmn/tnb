import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProgressBar from "react-scroll-progress-bar"; //Add this line

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./index.css";
import Portfolio from "./components/Portfolio/Portfolio";
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
