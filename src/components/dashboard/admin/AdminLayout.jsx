// src/components/Layout.js
import React from "react";
import SideNav from "./AdminSideNav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex justify-between">
      <div className="z-30">
      <SideNav />
      </div>
      <div className="overflow-y-auto  p-6 bg-gray-100">
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;
