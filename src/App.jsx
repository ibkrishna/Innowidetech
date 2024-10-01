import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SoftwareDevelopment from "./components/itServices/SoftwareDevelopment";
import WebDevelopment from "./components/itServices/WebDevelopment";
import AppDevelopment from "./components/itServices/AppDevelopment";
import Blockchain from "./components/itServices/Blockchain";
import SearchEngineopti from "./components/digitalMedia/SearchEngineopti";
import SocialMedia from "./components/digitalMedia/SocialMedia";
import EmailMarketing from "./components/digitalMedia/EmialMarket";
import AffilateMarketing from "./components/digitalMedia/AffilateMarketing";
import MobileMarketing from "./components/digitalMedia/MobileMarketing";
import Privacy from "./components/Privacy";
import TermsandConditions from "./components/TermsandConditions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products/>}/> */}
        <Route path="/contactus" element={<Contact />} />
        <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/appdevelopment" element={<AppDevelopment />} />
        <Route path="/blockchaindevelopment" element={<Blockchain />} />
        <Route path="/seo" element={<SearchEngineopti />} />
        <Route path="/socialmarketing" element={<SocialMedia />} />
        <Route path="/emailmarketing" element={<EmailMarketing />} />
        <Route path="/affilatemarketing" element={<AffilateMarketing />} />
        <Route path="/mobilemarketing" element={<MobileMarketing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsandcondition" element={<TermsandConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
