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
import Register from "./pages/auth/Register";
import AdminLayout from "./components/dashboard/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Agents from "./pages/admin/Agents";
import Properties from "./pages/admin/Properties";
import Settings from "./pages/admin/Settings";

const App = () => {
  return (
    <HelmetWrapper>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="agents" element={<Agents />} />
            <Route path="settings" element={<Settings />} />
            <Route path="properties" element={<Properties />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetWrapper>
  );
};

export default App;
