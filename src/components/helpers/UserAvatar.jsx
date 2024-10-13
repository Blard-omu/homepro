
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/icons/humprofile.png";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext";
import { VscAccount } from "react-icons/vsc";


const UserAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();


  // Toggle dropdown visibility
  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      setIsOpen(true);
      startInactivityTimer();
    }
  };
  const handleLogout = () => {
    logout();
    navigate("/")
  }

  // Close dropdown
  const closeDropdown = () => {
    setIsOpen(false);
    clearTimeout(timeoutId);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".user-avatar-dropdown")) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Start timer to close dropdown after 10 seconds of inactivity
  const startInactivityTimer = () => {
    const id = setTimeout(() => {
      closeDropdown();
    }, 10000);
    setTimeoutId(id);
  };

  // Handle navigation on selecting an option
  const handleNavigation = (option) => {
    switch (option) {
      case "Dashboard":
        navigate("/admin/dashboard");
        break;
      case "Properties":
        navigate("/admin/properties");
        break;
      case "Settings":
        navigate("/admin/settings");
        break;
      case "Logout":
        navigate("/logout");
        break;
      default:
        break;
    }
    closeDropdown();
  };

  return (
    <div className="relative user-avatar-dropdown">
      <div
        className="flex items-center cursor-pointer p-2 "
        onClick={toggleDropdown}
      >
        <div className="bg-primary text-white p-1 rounded-full">
        <VscAccount size={24} className="text-white" />
        </div>
        <div className="ml-2">
          {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute -right-12 md:right-0 top-full z-50 mt-2 w-[160px] rounded-2xl bg-white shadow-xl border">
          <ul className="py-2 text-sm text-primary-200">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-primary/50 hover:text-white"
              onClick={() => handleNavigation("Dashboard")}
            >
              Dashboard
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-primary/50 hover:text-white"
              onClick={() => handleNavigation("Properties")}
            >
              Properties
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-primary/50 hover:text-white"
              onClick={() => handleNavigation("Settings")}
            >
              Settings
            </li>
            <li
              className="px-4 py-2 cursor-pointer text-rose-600"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
