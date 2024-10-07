import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Menu from "./components/navs/Menu";
import PropertyDetails from "./components/listing/PropertyDetail";
import Blog from "./pages/Blog";
import HelmetWrapper from "./components/helpers/HelmetAsync";
import Footer from "./components/layout/Footer";
import { ModalProvider } from "./contexts/ModalContext";
import ModalWrapper from "./contexts/ModalContextWrapper";
import { ScrollToTop } from "./components/helpers/ScrollToTop";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <ModalProvider>
      <HelmetWrapper>
        <BrowserRouter>
        <ModalWrapper/>
          <Menu />
          <ToastContainer autoClose={5000} style={{width: "400px"}} />
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/detail" element={<PropertyDetails />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetWrapper>
    </ModalProvider>
  );
};

export default App;
