import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Menu from "./components/navs/Menu";
import Blog from "./pages/Blog";
import HelmetWrapper from "./components/helpers/HelmetAsync";
import Footer from "./components/layout/Footer";
import { ModalProvider } from "./contexts/ModalContext";
import ModalWrapper from "./contexts/ModalContextWrapper";
import { ScrollToTop } from "./components/helpers/ScrollToTop";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./components/dashboard/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Agents from "./pages/admin/Agents";
import Properties from "./pages/admin/Properties";
import Settings from "./pages/admin/Settings";
import CreateProperty from "./pages/admin/CreateProperty";

const App = () => {
  return (
    <ModalProvider>
      <HelmetWrapper>
        <BrowserRouter>
          <ModalWrapper />
          <Menu />
          <ToastContainer autoClose={5000} style={{ width: "400px" }} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="agents" element={<Agents />} />
              <Route path="settings" element={<Settings />} />
              <Route path="create" element={<CreateProperty/>} />
              <Route path="properties" element={<Properties />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetWrapper>
    </ModalProvider>
  );
};

export default App;
