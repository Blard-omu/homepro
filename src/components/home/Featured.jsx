import React from "react";
import { featureDb } from "../db/home/index";
import PropertyCard from "../cards/PropertyCard";
import ComponentWrapper from "../helpers/ComponentWrapper";

const FeaturedProperty = () => {
  return (
    <ComponentWrapper className="my-64">
      <h1 className="text-3xl text-center lg:text-start md:text-4xl font-bold py-8">Featured Properties</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl-gap-8 justify-between place-items-center">
        {featureDb &&
          featureDb.length > 0 &&
          featureDb.map((property) => {
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

export default FeaturedProperty;
