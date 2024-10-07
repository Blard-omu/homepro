import React,{useEffect,useState} from 'react';
import axios from 'axios'
import img1 from '../../assets/images/Frame 37 (1).png'
const PropertyDetails = () => {
useEffect(()=>{
  console.log();
  
},[])

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-[1300px] mt-20">
      {/* Title and Address */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Mansion in Asokoro</h1>
        <p className="text-gray-600">No 23, Ajayi Crowther Street</p>
      </div>

      {/* Property Images and Info */}
      <div className="flex max-h-[465px] w-full gap-5">
        {/* Image Grid */}
        <div className="flex flex-wrap gap-5 max-h-[465px] w-[40%]">
          <img src={img1} alt="Living Room" className="max-w-[233px] w-full h-auto rounded-2xl object-cover" />
          <img src={img1} alt="Kitchen" className="w-full max-w-[233px] h-auto rounded-2xl object-cover" />
          <img src={img1} alt="Bedroom" className="w-full h-auto rounded-2xl object-cover max-w-[233px]" />
          <img src={img1} alt="Garden" className="w-full h-auto rounded-2xl object-cover max-w-[233px]" />
        </div>

        {/* Main Property Image */}
        <div className="relative w-[58.5%]">
          <img src={img1} alt="Main Mansion" className="w-full h-full rounded-xl object-cover" />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-lg">
              <span className="material-icons">play_arrow</span>
            </button>
          </div> */}
        </div>
      </div>

      {/* Property Info */}
      <div className="flex flex-wrap gap-[90px] items-center py-10">
        <div>
          <h1 className='font-bold text-[28px]'>Property Details</h1>
          <ul className='flex space-x-4 items-center text-lg'>
          <li>₦ 455,000,000</li>
          <li>• 6 bed</li>
          <li>• 7 bath</li>
          <li>• 7500 sq ft</li>
          </ul>
        </div>
        <div>
        <h1 className='font-bold text-[28px]'>Property Type</h1>
        <ul className='flex space-x-4 items-center text-lg'>
          <li>Single Family Home</li>
        </ul>
        </div>
        <div>
        <h1 className='font-bold text-[28px]'>Year Built</h1>
        <ul className='flex space-x-4 items-center text-lg'>
          <li>2023</li>
        </ul>
        </div>
      </div>

      {/* Property Overview */}
      <div className="">
        <h2 className="text-[28px] font-bold">Property Overview</h2>
        <p className="text-lg mt-4">
          Discover unparalleled luxury in this stunning Mansion located in the heart of Asokoro, Abuja.
          This exquisite home offers 6 spacious bedrooms, 7 modern bathrooms, and a sprawling 7,500 sq ft of living space...
        </p>
      </div>

<div className='flex py-10'>
      {/* Property Features */}
      <div className="">
        <h2 className="text-[28px] font-bold ">Property Features</h2>
        <ul className="list-disc list-inside space-y-2 mt-4 text-lg ">
          <li><strong>Location and Neighborhood:</strong> Situated in a prestigious part of the city...</li>
          <li><strong>Interior Features:</strong> Gourmet kitchen with top-of-the-line appliances...</li>
          <li><strong>Exterior Features:</strong> Landscaped garden with a private pool and hot tub...</li>
          <li><strong>Community Amenities:</strong> Access to a private clubhouse, 24-hour security...</li>
        </ul>
      </div>

      {/* Agent Information */}
      <div className="bg-gray-100 p-6 rounded-md">
        <h3 className="text-xl font-semibold">Interested in This Property?</h3>
        <p className="text-gray-700 mt-4">Don't miss the opportunity to make this stunning mansion your new home...</p>

        <div className="flex items-center mt-6">
          <img src={img1} alt="Agent Samuel" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h4 className="font-semibold">Agent Samuel</h4>
            <p className="text-gray-600">Specialist in luxury properties</p>
            <p className="text-gray-600">+2349022245661</p>
          </div>
        </div>

        <button className="mt-4 bg-primary-foreground text-white py-2 px-4 rounded-md">
          Schedule a Viewing
        </button>
      </div>
</div>
    </div>
  );
};

export default PropertyDetails;
