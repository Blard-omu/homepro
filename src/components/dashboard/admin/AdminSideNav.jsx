import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminSideNav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/")
  }
  return (
    <aside className=" text-[#1F1F1F] min-h-[50vh] bg-[#FFFEF9]">
      <div className="flex justify-between items-center mb-4 full bg-slate-400">
        <h1 className="text-[#1F1F1F] text-[28px] font-[Avenir LT Std]">
          Admin Panel
        </h1>
      </div>
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/create">Create Property</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/viewed">Agents</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/properties">Property Alert</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/favourite">My Favourite</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/message">Messages</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/settings">Account Settings</Link>
          </li>
          <li onClick={handleLogout} className="p-4 hover:bg-gray-700">
            <Link className="text-rose-600">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideNav;
