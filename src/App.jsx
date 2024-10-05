import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Menu from "./components/navs/Menu";
import Blog from "./pages/Blog";
import HelmetWrapper from "./components/resusables/HelmetAsync";
import Login from "./pages/auth/Login";
import Register from "./pages/Register";
import Footer from "./components/layout/Footer";
import { ModalProvider } from "./contexts/ModalContext";
import ModalWrapper from "./contexts/ModalContextWrapper";

const App = () => {
  return (
    <ModalProvider>
      <HelmetWrapper>
        <BrowserRouter>
        <ModalWrapper/>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetWrapper>
    </ModalProvider>
  );
};

export default App;
