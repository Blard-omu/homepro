import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import PropertyCard from "../components/cards/PropertyCard";
import { featureDb, listingsDb } from "../components/db/home";

const Listings = () => {
  return (
    <div className="mt-16">
      <Jumbotron
        title="Find the Best Properties"
        subtitle="Discover a wide range of exclusive properties tailored to your unique preferences."
      />

      <div className="w-full flex justify-center bg-accent">
        <div className="flex flex-col lg:flex-row gap-8 mt-12 max-w-[1280px]  px-4 lg:px-4 xl:px-0">
          {/* Filters */}
          <div className="w-full lg:w-auto max-w-full lg:max-w-[300px]  xl:max-w-[400px]">
            <div className="space-y-4 p-8 bg-[#CCCCCC80]/50 rounded-2xl">
              <select className="w-full p-2 rounded-[10px] bg-[#F6F8FA]">
                <option className="text-dark text-lg font-semibold">Location</option>
                <option className="text-dark text-lg font-semibold">Abuja</option>
                <option className="text-dark text-lg font-semibold">Lagos</option>
                <option className="text-dark text-lg font-semibold">Kano</option>
              </select>
              <select className="w-full p-2 rounded-[10px] bg-[#F6F8FA]">
                <option className="text-dark text-lg font-semibold">Bedrooms</option>
                <option className="text-dark text-lg font-semibold">1 Bedroom</option>
                <option className="text-dark text-lg font-semibold">2 Bedrooms</option>
                <option className="text-dark text-lg font-semibold">3 Bedrooms</option>
                <option className="text-dark text-lg font-semibold">4 Bedrooms</option>
                {/* Add bedroom options */}
              </select>
              <select className="w-full p-2 rounded-[10px] bg-[#F6F8FA]">
                <option className="text-dark text-lg font-semibold">Property type</option>
                <option className="text-dark text-lg font-semibold">Bungalow</option>
                <option className="text-dark text-lg font-semibold">Duplex</option>
                <option className="text-dark text-lg font-semibold">Penthouse</option>
                <option className="text-dark text-lg font-semibold">Studio</option>
                {/* Add property type options */}
              </select>
              <select className="w-full p-2 rounded-[10px] bg-[#F6F8FA]">
                <option className="text-dark text-lg font-semibold">Price range</option>
                <option className="text-dark text-lg font-semibold">10M - 30M</option>
                <option className="text-dark text-lg font-semibold">30M - 50M</option>
                <option className="text-dark text-lg font-semibold">50M - 100M</option>
                <option className="text-dark text-lg font-semibold">100M - 300M</option>
              </select>
              <button className="w-full bg-primary-foreground rounded-full text-white p-2">
                Search Property
              </button>
            </div>

            {/* Featured Properties */}
            <div className="mt-8 hidden lg:inline-block">
              <h3 className=" text-xl sm:text-2xl font-semibold">Featured properties</h3>
              <ul className="mt-4 space-y-8">
                {featureDb.map((property) => (
                  <li key={property.id} className="flex space-x-4 items-center">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-[115px] h-[96px] object-cover rounded-[10px]"
                    />
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">{property.title}</h4>
                      <p className=" text-sm sm:text-base text-primary-foreground">
                        &#x20A6;{property.price.toLocaleString("en-us")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Property Listings */}
          <div className="w-full lg:w-2/3 max-w-[820px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {listingsDb.map((property) => (
                <PropertyCard
                  key={property._id}
                  _id={property._id}
                  title={property.title}
                  image={property.image}
                  price={property.price}
                  bed={property.bed}
                  bath={property.bath}
                  size={property.size}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex mt-8">
              <nav>
                <ul className="flex space-x-2">
                  <li>
                    <button className="px-3 py-1 border rounded-md">1</button>
                  </li>
                  <li>
                    <button className="px-3 py-1 border rounded-md">2</button>
                  </li>
                  <li>
                    <button className="px-3 py-1 border rounded-md">10</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mt-8 inline-block lg:hidden">
            <h3 className=" text-xl sm:text-2xl font-semibold">Featured properties</h3>
              <ul className="mt-4 space-y-8">
                {featureDb.map((property) => (
                  <li key={property.id} className="flex space-x-4 items-center">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-[115px] h-[96px] object-cover rounded-[10px]"
                    />
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">{property.title}</h4>
                      <p className=" text-sm sm:text-base text-primary-foreground">
                        &#x20A6;{property.price.toLocaleString("en-us")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
