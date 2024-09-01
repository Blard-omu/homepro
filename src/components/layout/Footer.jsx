import React from "react";
import ComponentWrapper from "../resusables/ComponentWrapper";
import homepro from "../../assets/icons/home.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto md:h-[351px] bg-dark">
      <ComponentWrapper className="bg-dark h-[159px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 bg-dark">
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
              <p className="text-sm bg-inherit text-slate-300">
                &copy;HomePro 2024 | All rights reserved.
              </p>
              <small className="text-xs bg-inherit text-slate-400">
                DesignedbyMaryam | codedby@Blard
              </small>
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-inherit g-4">
            <div className="h-full bg-inherit w-[90%]">
              <div className="bg-inherit flex flex-col">
                <small className="text-xs bg-inherit text-slate-400">
                  DesignedbyMaryam codedby@Blard
                </small>
                <small className="text-xs bg-inherit text-slate-400">
                  DesignedbyMaryam
                </small>
              </div>
            </div>
            <div className="h-full bg-inherit w-[90%]">
              <div className="bg-inherit flex flex-col ">
                <p className="text-sm bg-inherit text-slate-300">
                  &copy;HomePro 2024
                </p>
                <small className="text-xs bg-inherit text-slate-400">
                  DesignedbyMaryam codedby@Blard
                </small>
              </div>
            </div>
          </div>
          <div className="h-full bg-inherit w-full">
            <form action="" className="bg-inherit w-11/12 mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-inherit px-4 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-inherit mt-4 px-4 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-secondary hover:text-primary hover:border-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </ComponentWrapper>
      <div className="w-full bg-inherit border-t border-t-slate-400 text-sm pt-6 mt-8">
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
