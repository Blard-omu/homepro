import React from "react";
import { listingsDb } from "../db/home/index";
import ComponentWrapper from "../resusables/ComponentWrapper";
import PropertyCard from "../cards/PropertyCard";

const Listings = () => {
  return (
    <ComponentWrapper className="">
      <h1 className="text-3xl text-center lg:text-start md:text-4xl font-bold py-8">Our Listings</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl-gap-8 justify-between">
        {listingsDb &&
          listingsDb.length > 0 &&
          listingsDb.map((property) => {
            return (
              <div className="" key={property._id}>
                <PropertyCard {...property} key={property._id} />
              </div>
            );
          })}
      </div>
    </ComponentWrapper>
  );
};

export default Listings;
