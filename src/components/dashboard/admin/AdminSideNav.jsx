import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { CiBoxes } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaPeopleLine } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const AdminSideNav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="text-[#1F1F1F] min-h-[50vh] bg-[#FFFEF9]">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav>
        <ul>
          <li className="p-4 hover:text-primary-foreground flex items-center">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "text-primary" : ""}`
              }
            >
              <LuLayoutDashboard />
              <span className="pl-2">Dashboard</span>
            </NavLink>
          </li>
          <li className="p-4 hover:text-primary-foreground flex items-center">
            <NavLink
              to="/admin/create"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "text-primary" : ""}`
              }
            >
              <CiBoxes />
              <span className="pl-2">Create Property</span>
            </NavLink>
          </li>
          <li className="p-4 hover:text-primary-foreground flex items-center">
            <NavLink
              to="/admin/properties"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "text-primary" : ""}`
              }
            >
              <CiBoxes />
              <span className="pl-2">Manage Properties</span>
            </NavLink>
          </li>
          <li className="p-4 hover:text-primary-foreground flex items-center">
            <NavLink
              to="/admin/agents"
              className={({ isActive }) =>
                `flex items-center ${isActive ? "text-primary" : ""}`
              }
            >
              <FaPeopleLine />
              <span className="pl-2">Agents</span>
            </NavLink>
          </li>
          <li className="p-4 hover:text-primary-foreground flex items-center">
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                ` flex items-center ${isActive ? "text-primary" : ""}`
              }
            >
              <IoSettingsOutline />
              <span className="pl-2">Settings</span>
            </NavLink>
          </li>
          <li
            onClick={handleLogout}
            className="p-4 text-rose-600 flex items-center"
          >
            <TbLogout2 />
            <NavLink className="text-rose-600 pl-2">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideNav;
