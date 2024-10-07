import React from "react";
import house from "../../assets/images/Rectangle 1.png";
import ComponentWrapper from "../helpers/ComponentWrapper";
import SearchProperty from "./SearchProperty";

const Hero = () => {
  return (
    <div className="w-full py-10 bg-hero mt-16">
      <ComponentWrapper className="bg-inherit">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between">
          <div className="w-full  lg:w-[45%] flex flex-col justify-center items-center lg:items-start my-8">
            <h1 className="text-4xl md:text-[3rem] 2xl:text-[4rem] text-dark font-bold text-center lg:text-left ">
              Find Your Dream <br />
              Home Today!
            </h1>
            <div className="text-dark text-center lg:text-left py-6">
              <p className="p-0  lg:pr-[4rem] font-bold">Your journey to a new home starts here.
              Let's find the perfect place for you.</p>
            </div>
            <div className="">
              <button className="text-secondary bg-primary px-7 py-4 font-medium hover:bg-secondary hover:text-primary hover:border-primary  rounded-full border text-xl">
                Browse Properties
              </button>
            </div>
          </div>
          <div className="lg:w-[45%] flex justify-end items-end">
            <img src={house} alt="house" className=" max-w-full md:w-[98%] h-[300px]  md:h-[402px]" />
          </div>
        </div>
        
        <div className=" my-8 ">
          <SearchProperty />
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Hero;
