import React from "react";
import { Link } from "react-router-dom";

const AdminSideNav = () => {
  return (
    <aside className="w-64 text-[#1F1F1F] min-h-[50vh] bg-[#FFFEF9]">
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
          <li className="p-4 hover:bg-gray-700">
            <Link className="text-rose-600">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideNav;
