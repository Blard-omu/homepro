import React from 'react';
import { BsCheck2Square } from "react-icons/bs";

const OurValues = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-5">
      {/* Our Values Section */}
      <div className="bg-dark text-white rounded-[80px] px-5 lg:px-10 xl:pl-[70px] xl:pr-[100px] py-[47px] w-full lg:w-1/2 shadow-lg">
        <h1 className="font-bold text-3xl xl:text-4xl mb-5 text-center lg:text-start">Our Values</h1>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-semibold text-lg xl:text-xl">We operate with honesty and transparency in all our dealings.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-medium text-lg xl:text-xl">Our clients are at the heart of everything we do.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-medium text-lg xl:text-xl">We are committed to delivering the highest quality service.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-medium text-lg xl:text-xl">We leverage the latest technology to provide a seamless experience.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-medium text-lg xl:text-xl">We believe in contributing positively to the communities we serve.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-dark text-white rounded-[80px] px-5 lg:px-10 xl:pl-[70px] xl:pr-[82px] py-[47px] w-full lg:w-1/2 shadow-lg">
        <h1 className="font-bold text-3xl xl:text-4xl mb-5 text-center lg:text-start">Why Choose Us?</h1>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-semibold text-lg xl:text-xl">With years of experience in the real estate market, we have the knowledge and skills to guide you through any transaction.</p>
          </div>
          <div className="flex  gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-semibold text-lg xl:text-xl ">We have an in-depth understanding of the local property market and can offer insights that others can’t.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-[30px] flex-shrink-0">
              <BsCheck2Square className="text-primary" size={30} />
            </div>
            <p className="font-semibold text-lg xl:text-xl ">We are skilled negotiators, committed to getting you the best deal possible. From the first consultation to closing the deal, we are with you every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
