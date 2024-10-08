// src/components/Layout.js
import React from "react";
import SideNav from "./AdminSideNav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex justify-between min-h-screen">
      <div className="z-30 min-w-3/9">
      <SideNav />
      </div>
      <div className="overflow-auto  p-6 bg-gray-100">
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;
