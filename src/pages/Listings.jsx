import React, { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import PropertyCard from "../components/cards/PropertyCard";
import { featureDb } from "../components/db/home";
import axios from "axios";
import Pagination from "../components/listing/Pagination";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);
  const [location, setLocation] = useState(""); 
  const [bedrooms, setBedrooms] = useState(""); 
  const [propertyType, setPropertyType] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/properties?page=${currentPage}`);
        if (response?.data?.success) {
          setData(response.data.properties);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/search?location=${location}&propertyType=${propertyType}&bedrooms=${bedrooms}`
    );
  };
  // console.log(data);
  

  return (
    <div className="mt-16">
      <Jumbotron
        title="Find the Best Properties"
        subtitle="Discover a wide range of exclusive properties tailored to your unique preferences."
      />

      <div className="w-full flex justify-center bg-accent">
        <div className="flex flex-col lg:flex-row gap-8 mt-12 max-w-[1280px]  px-4 lg:px-4 xl:px-0">
          {/* Search */}
          <div className="w-full lg:w-auto max-w-full lg:max-w-[300px] xl:max-w-[400px]">
            <div className="space-y-4 p-8 bg-[#CCCCCC80]/50 rounded-2xl">
              {/* Location Filter */}
              <select
                className="w-full p-2 rounded-[10px] bg-[#F6F8FA]"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Location</option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
                <option value="Kano">Kano</option>
                <option value="Ogun">Ogun</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Porharcourt">Porharcourt</option>
                <option value="Enugu">Enugu</option>
                <option value="Others">Others</option>
              </select>

              {/* Bedrooms Filter */}
              <select
                className="w-full p-2 rounded-[10px] bg-[#F6F8FA]"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              >
                <option value="">Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5 Bedrooms</option>
                <option value="6">6 Bedrooms</option>
                <option value="7">7 Bedrooms</option>
                <option value="8">8 Bedrooms</option>
              </select>

              {/* Property Type Filter */}
              <select
                className="w-full p-2 rounded-[10px] bg-[#F6F8FA]"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Property type</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Duplex">Duplex</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Land">Land</option>
                <option value="House">House</option>
                <option value="Mansion">Mansion</option>
                <option value="Villa">Villa</option>
                <option value="Office">Office</option>
              </select>

              <button
                className="w-full bg-primary-foreground rounded-full text-white p-2"
                onClick={handleSubmit}
              >
                Search Property
              </button>
            </div>

            {/* Featured Properties */}
            <div className="mt-8 hidden lg:inline-block">
              <h3 className=" text-xl sm:text-2xl font-semibold">
                Featured properties
              </h3>
              <ul className="mt-4 space-y-8">
                {featureDb.map((property) => (
                  <li key={property.id} className="flex space-x-4 items-center">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-[115px] h-[96px] object-cover rounded-[10px]"
                    />
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        {property.title}
                      </h4>
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
              {data.length > 0 && data.map((property) => (
                <PropertyCard
                  key={property._id}
                  _id={property._id}
                  title={property.title}
                  image={property.images.length > 0 && property.images[0].url}
                  price={property.price}
                  bed={property.bedrooms}
                  bath={property.bathrooms}
                  size={property.sqm}
                />
              ))}
            </div>
            {/* Pagination */}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
            {/* Pagination ends */}

            <div className="mt-8 inline-block lg:hidden">
              <h3 className=" text-xl sm:text-2xl font-semibold">
                Featured properties
              </h3>
              <ul className="mt-4 space-y-8">
                {featureDb.map((property) => (
                  <li key={property.id} className="flex space-x-4 items-center">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-[115px] h-[96px] object-cover rounded-[10px]"
                    />
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        {property.title}
                      </h4>
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
