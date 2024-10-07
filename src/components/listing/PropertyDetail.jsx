import React from 'react';

const PropertyDetails = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Title and Address */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Mansion in Asokoro</h1>
        <p className="text-gray-600">No 23, Ajayi Crowther Street</p>
      </div>

      {/* Property Images and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Image Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-2">
          <img src="image1.jpg" alt="Living Room" className="w-full h-auto rounded-md object-cover" />
          <img src="image2.jpg" alt="Kitchen" className="w-full h-auto rounded-md object-cover" />
          <img src="image3.jpg" alt="Bedroom" className="w-full h-auto rounded-md object-cover" />
          <img src="image4.jpg" alt="Garden" className="w-full h-auto rounded-md object-cover" />
        </div>

        {/* Main Property Image */}
        <div className="relative">
          <img src="main_image.jpg" alt="Main Mansion" className="w-full h-auto rounded-md object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-lg">
              <span className="material-icons">play_arrow</span>
            </button>
          </div>
        </div>
      </div>

      {/* Property Info */}
      <div className="flex flex-wrap justify-between items-center py-6 border-b">
        <div className="flex space-x-4 items-center text-lg">
          <p>₦ 455,000,000</p>
          <p>• 6 bed</p>
          <p>• 7 bath</p>
          <p>• 7500 sq ft</p>
        </div>
        <div className="flex space-x-8 text-lg">
          <p>Property Type: Single Family Home</p>
          <p>Year Built: 2023</p>
        </div>
      </div>

      {/* Property Overview */}
      <div className="py-6">
        <h2 className="text-2xl font-semibold">Property Overview</h2>
        <p className="text-gray-700 mt-4">
          Discover unparalleled luxury in this stunning Mansion located in the heart of Asokoro, Abuja.
          This exquisite home offers 6 spacious bedrooms, 7 modern bathrooms, and a sprawling 7,500 sq ft of living space...
        </p>
      </div>

      {/* Property Features */}
      <div className="py-6">
        <h2 className="text-2xl font-semibold">Property Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li><strong>Location and Neighborhood:</strong> Situated in a prestigious part of the city...</li>
          <li><strong>Interior Features:</strong> Gourmet kitchen with top-of-the-line appliances...</li>
          <li><strong>Exterior Features:</strong> Landscaped garden with a private pool and hot tub...</li>
          <li><strong>Community Amenities:</strong> Access to a private clubhouse, 24-hour security...</li>
        </ul>
      </div>

      {/* Agent Information */}
      <div className="bg-gray-100 p-6 rounded-md mt-8">
        <h3 className="text-xl font-semibold">Interested in This Property?</h3>
        <p className="text-gray-700 mt-4">Don't miss the opportunity to make this stunning mansion your new home...</p>

        <div className="flex items-center mt-6">
          <img src="agent_image.jpg" alt="Agent Samuel" className="w-16 h-16 rounded-full object-cover mr-4" />
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
  );
};

export default PropertyDetails;
