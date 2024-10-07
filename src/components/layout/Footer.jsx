import React from "react";
import ComponentWrapper from "../helpers/ComponentWrapper";
import homepro from "../../assets/icons/home.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto md:h-[351px] lg:h-[251px] bg-dark">
      <ComponentWrapper className="bg-dark h-[159px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 bg-dark gap-8">
          <div className="h-full bg-inherit">
            <div className="bg-inherit flex flex-col">
              <Link to="/" className="bg-inherit">
                <div className="bg-inherit flex items-baseline">
                  <img src={homepro} alt="logo" className="bg-inherit" />
                  <span className="font-pacifico  text-primary bg-inherit">
                    HomePro
                  </span>
                </div>
              </Link>
              <p className="text-xs bg-inherit text-slate-400">
                Best place to find properties that suits your person.
              </p>
              <div className="grid grid-cols-3 bg-inherit w-1/2 py-4">
                <Link className="bg-slate-500  w-8 h-8 rounded-full "></Link>
                <Link className="bg-slate-500 w-8 h-8 rounded-full"></Link>
                <Link className="bg-slate-500 w-8 h-8 rounded-full"></Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-inherit g-4">
            <div className="h-full bg-inherit w-[90%]">
              <div className="bg-inherit flex flex-col">
                <small className="text-xs bg-inherit text-slate-400">
                  About Us
                </small>
                <small className="text-xs bg-inherit text-slate-400">
                  Contact Information
                </small>
              </div>
            </div>
            <div className="h-full bg-inherit w-[90%]">
              <div className="bg-inherit flex flex-col ">
                <p className="text-xs bg-inherit text-slate-400">
                  Privacy Policy
                </p>
                <small className="text-xs bg-inherit text-slate-400">
                  Terms of Service
                </small>
              </div>
            </div>
          </div>
          <div className="h-full bg-inherit w-full">
            <form action="" className="bg-inherit">
            <p className="text-slate-400 text-sm">Subscribe to our newsletter for latest updates</p>
              <div className="w-full flex rounded-lg">
              <input
                type="email"
                placeholder="Your Email"
                className="w-8/12 rounded-l-xl  bg-inherit mt-4 px-4 py-2 text-xs border text-slate-300 pl-4 border-slate-300 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-4/12 mt-4 px-4 py-2 text-sm bg-primary text-white rounded-r-xl hover:bg-secondary hover:text-primary hover:border-primary"
              >
                Subscribe
              </button>
              </div>
            </form>
          </div>
        </div>
      </ComponentWrapper>
      <div className="w-full bg-inherit border-t border-t-slate-400 text-sm pt-6">
        <div className="bg-inherit flex flex-col justify-center items-center">
          <p className="text-center text-sm bg-inherit text-slate-300">
            &copy;HomePro 2024 | All rights reserved.
          </p>
          <small className="text-center text-xs bg-inherit text-slate-400">
            DesignedbyMaryam | codedby@Blard
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
