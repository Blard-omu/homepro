import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import PropertyDetails from "./components/listing/PropertyDetail";
import Blog from "./pages/Blog";
import HelmetWrapper from "./components/helpers/HelmetAsync";
import ModalWrapper from "./contexts/ModalContextWrapper";
import { ScrollToTop } from "./components/helpers/ScrollToTop";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./components/dashboard/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Agents from "./pages/admin/Agents";
import Settings from "./pages/admin/Settings";
import CreateProperty from "./pages/admin/CreateProperty";
import PageNotFound from "./pages/PageNotFound";
import { useAuth  } from "./contexts/AuthContext";
import UserDashboard from "./pages/user/UserDashboard";
import AdminProperties from "./pages/admin/AdminProperties";


import SearchPage from "./components/listing/SearchPage";
import UpdateProperty from "./pages/admin/UpdateProperty";

const App = () => {
  const { PrivateRoutes, AdminRoutes} = useAuth();

  return (
    <HelmetWrapper>
      <ModalWrapper />
      <ToastContainer autoClose={5000} style={{ width: "400px" }} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/detail/:id" element={<PropertyDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/*" element={<PageNotFound />} />

        <Route path="/" element={<PrivateRoutes />}>
        {/* Private Routes for authenticated users */}
        <Route path="/user" element={<UserDashboard />} />
          {/* Admin Routes for admin-only access */}
          <Route path="" element={<AdminRoutes />}>
            <Route path="admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="agents" element={<Agents />} />
              <Route path="settings" element={<Settings />} />
              <Route path="create" element={<CreateProperty />} />
              <Route path="update/:id" element={<UpdateProperty/>} />
              <Route path="properties" element={<AdminProperties />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </HelmetWrapper>
  );
};

export default App;
