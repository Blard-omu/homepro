import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/Frame 37 (1).png";
import img2 from "../../assets/images/emeka.png";
import { RxSpaceBetweenVertically } from "react-icons/rx";
import { PiBed } from "react-icons/pi";
import { PiBathtub } from "react-icons/pi";
import { BsHouseDoor } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { PiCityLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const PropertyDetails = () => {
  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-[1300px] mt-20">
      {/* Title and Address */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Mansion in Asokoro</h1>
        <p className="">No 23, Ajayi Crowther Street</p>
      </div>

      {/* Property Images and Info */}
      <div className="flex flex-col md:flex-row lg:max-h-[465px] w-full gap-3 lg:gap-5">
        {/* Image Grid (Bento layout) */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-5 w-full lg:w-[42%] lg:max-h-[465px] lg:grid-rows-2">
          <div className="w-full h-full lg:max-h-[220px]">
            <img
              src={img1}
              alt="Living Room"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-full h-full lg:max-h-[220px]">
            <img
              src={img1}
              alt="Kitchen"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-full h-full lg:max-h-[220px]">
            <img
              src={img1}
              alt="Bedroom"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-full h-full lg:max-h-[220px]">
            <img
              src={img1}
              alt="Garden"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Main Property Image */}
        <div className="relative w-full md:w-[58.5%] lg:h-[465px]">
          <img
            src={img1}
            alt="Main Mansion"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Property Info */}
      <div className="flex flex-wrap gap-6 lg:gap-[90px] items-center py-10">
        <div>
          <h1 className="font-bold text-xl md:text-[28px]">Property Details</h1>
          <ul className="flex flex-wrap space-x-4 items-center text-lg">
            <li>₦ 455,000,000</li>
            <li className="flex items-center gap-1" ><span><PiBed/></span> 6 bed</li>
            <li className="flex items-center gap-1"><span><PiBathtub /></span>7 bath</li>
            <li className="flex items-center gap-1"><span><RxSpaceBetweenVertically/></span>7500 sq ft</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-[28px]">Property Type</h1>
          <ul className="flex space-x-4 items-center text-lg">
            <li>Single Family Home</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-[28px]">Year Built</h1>
          <ul className="flex space-x-4 items-center text-lg">
            <li>2023</li>
          </ul>
        </div>
      </div>

      {/* Property Overview */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-[28px] font-bold">Property Overview</h2>
        <p className="text-base md:text-lg">
          Discover unparalleled luxury in this stunning Mansion located in the
          heart of Asokoro, Abuja. This exquisite home offers 6 spacious
          bedrooms, 7 modern bathrooms, and a sprawling 7,500 sq ft of living
          space...
        </p>
      </div>

      <div className="flex flex-col lg:flex-row py-10 justify-between">
        {/* Property Features */}
        <div className="max-w-full lg:max-w-[65%] space-y-2">
          <h2 className="text-xl md:text-[28px] font-bold">
            Property Features
          </h2>
          <ul className="space-y-2 text-base md:text-lg">
            <li className="flex gap-1">
              <p className="text-2xl mt-1"><IoLocationOutline /></p>
              <p><strong>Location and Neighborhood:</strong> Situated in a
              prestigious part of the city... dbdgyfghh</p>
            </li>
            <li className="flex gap-1">
              <p className="text-2xl mt-1"><BsHouseDoor /></p>
              <strong>Interior Features:</strong> Gourmet kitchen with
              top-of-the-line appliances...
            </li>
            <li className="flex gap-1">
              <p className="text-2xl mt-1"><FaTreeCity /></p>              <strong>Exterior Features:</strong> Landscaped garden with a
              private pool and hot tub...
            </li>
            <li className="flex gap-1">
              <p className="text-2xl mt-1"><PiCityLight /></p>              <strong>Community Amenities:</strong> Access to a private
              clubhouse, 24-hour security...
            </li>
          </ul>
        </div>

        {/* Agent Information */}
        <div className="bg-gray-100 p-6 rounded-xl mt-8 lg:mt-0 lg:max-w-[38%] grid justify-items-center space-y-4">
          <div className="text-center">
            <h3 className="text-xl md:text-[28px] font-bold">
              Interested in This Property?
            </h3>
            <p className="text-center text-base md:text-lg">
              Don't miss the opportunity to make this stunning mansion your new
              home...
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={img2}
              alt="Agent Samuel"
              className="max-w-[200px] max-h-[200px] rounded-full object-cover"
            />
            <h4 className="font-bold text-lg md:text-xl">Agent Samuel</h4>
            <p className="text-base md:text-lg font-semibold">
              Specialist in luxury properties
            </p>
            <p className="font-semibold text-base md:text-lg">+2349022245661</p>
          </div>

          <button className="bg-primary-foreground text-white py-2 px-4 rounded-full w-full max-w-[340px]">
            Schedule a Viewing
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
