import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../assets/icons/home.png";
import { Link, NavLink } from "react-router-dom";
import ComponentWrapper from "../../helpers/ComponentWrapper";
import Register from "../../../pages/auth/AuthForm";
import UserAvatar from "../../helpers/UserAvatar";
import { useModal } from "../../../contexts/ModalContext";
import { useAuth } from "../../../contexts/AuthContext";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal();
  const { auth, logout } = useAuth();

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOpenModal = () => {
    openModal(<Register />);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero">
      <ComponentWrapper className="bg-hero">
        <nav className="flex bg-inherit justify-between items-center h-24 md:h-[5rem]">
          <Link to="/" className="flex items-baseline text-primary">
            <img className="w-[48px] cursor-pointer" src={Logo} alt="Logo" />
            <b className="text-bold ml-2 font-pacifico">HomePro</b>
          </Link>
          <div
            onMouseLeave={closeMenu}
            className={`duration-500 md:static absolute top-0 left-0 w-full ${
              menuOpen ? "block top-[100%]   bg-hero" : "hidden top-[12%]"
            } md:flex md:items-center md:w-auto min-h-fit flex-col md:flex-row`}
          >
            <ul className="flex md:flex-row flex-col md:items-center  gap-8 md:gap-5 lg:gap-8 font-bold text-neutral-grey-300 py-2 pl-4 md:pl-0">
              <li>
                <NavLink
                  onClick={closeMenu}
                  to="/"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive
                        ? "text-primary border-b-primary border-b-2"
                        : "text-dark"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  to="/about"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive
                        ? "text-primary border-b-primary border-b-2"
                        : "text-dark"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  to="/listings"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive
                        ? "text-primary border-b-primary border-b-2"
                        : "text-dark"
                    }`
                  }
                >
                  Listings
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  to="/blog"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive
                        ? "text-primary border-b-primary border-b-2"
                        : "text-dark"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive
                        ? "text-primary border-b-primary border-b-2"
                        : "text-dark"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <div className="md:hidden flex gap-5 mb-8">
                {auth && auth.user ? (
                  <UserAvatar />
                ) : (
                  <button
                    className="md:block text-primary px-4 py-2 rounded-full border border-primary hover:text-secondary hover:bg-primary font-medium text-sm transition-all ease-in-out duration-300"
                    onClick={handleOpenModal}
                  >
                    Get Started
                  </button>
                )}
              </div>
            </ul>
          </div>
          <div className="flex items-center">
            {auth && auth.user ? (
              <div className="hidden md:block">
                <UserAvatar />
              </div>
            ) : (
              <button
                className="hidden md:block text-primary px-4 py-2 rounded-full border border-primary hover:text-secondary hover:bg-primary font-medium text-sm transition-all ease-in-out duration-300"
                onClick={handleOpenModal}
              >
                Get Started
              </button>
            )}
            <div
              onClick={onToggleMenu}
              className="text-2xl cursor-pointer text-primary md:hidden"
            >
              {menuOpen ? (
                <IoMdClose className="text-3xl" />
              ) : (
                <GiHamburgerMenu className="text-3xl" />
              )}
            </div>
          </div>
        </nav>
      </ComponentWrapper>
    </header>
  );
};

export default Menu;
