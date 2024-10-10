import React from "react";
import SideNav from "./AdminSideNav";
import { Outlet, Link } from "react-router-dom";
import UserAvatar from "../../helpers/UserAvatar";
import logo from "../../../assets/icons/home.png"

const AdminLayout = () => {
  return (
    <div className="relative h-screen w-full flex">
      <div className="hidden md:block md:w-[30%] lg:w-[20%] h-full bg-white z-30 shadow-lg fixed top-8 left-0">
        <SideNav />
      </div>

      <div className="w-full flex flex-col bg-gray-100">
        <div className="flex justify-between items-center py-6 bg-white fixed top-0 z-40 w-full">
          <div className="w-1/5 flex justify-center items-center">
            <Link to="/" className="flex items-baseline">
            <img src={logo} alt="" />
            <span className="hidden md:block font-pacifico text-primary">HomePro</span>
            </Link>

          </div>
          <div className="w-4/5 flex justify-between items-center px-4">
            <h1 className="text-[#000000] font-bold text-xl">Dashboard</h1>

            <div className="mx-4 hidden md:block">
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-[44px] w-full p-[10px] border border-gray-300 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#00000033]"
                />
              </form>
            </div>

              <UserAvatar />
          </div>
        </div>

        <div className="flex overflow-auto pt-[150px] px-4 no-scroll-bar">
          <div className="md:pl-[30%] lg:pl-[20%] lg:px-6"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
