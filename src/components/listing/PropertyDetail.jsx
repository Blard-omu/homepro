import React, { useEffect, useState } from "react";
import noImage from "../../assets/images/noImage.jpg";
import { RxSpaceBetweenVertically } from "react-icons/rx";
import { PiBed } from "react-icons/pi";
import { PiBathtub } from "react-icons/pi";
import { BsHouseDoor } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { PiCityLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import noProfile from "../../assets/images/NoProfile.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const [data, setData] = useState(null);
  const [agentid, setAgentid] = useState("");
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true); // For property loading
  const [agentLoading, setAgentLoading] = useState(true); // For agent loading
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch property details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/property/${id}`);
        if (response?.data?.success) {
          setData(response?.data?.property);
          setAgentid(response?.data?.property?.agentId); // Set agent ID after fetching the property
          setLoading(false);
          setAgentLoading(true); // Start agent loading
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  // console.log(data);

  // Fetch agent details when agentid is set
  useEffect(() => {
    if (!loading) {
      const fetchAgent = async () => {
        try {
          const res = await axios.get(`/users/${agentid}`);
          if (res?.data?.success) {
            setAgent(res.data);
          }
          setAgentLoading(false);
        } catch (error) {
          console.log(error);
          setAgentLoading(false); // End agent loading on error
        }
      };
      fetchAgent();
    }
  }, [agentid]);

  // Display loading states
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading property details...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Property not found.
      </div>
    );
  }
  const imagesFromBackend = data.images || [
    noImage,
    noImage,
    noImage,
    noImage,
    noImage,
    noImage,
    noImage,
    noImage,
    noImage,
  ];

  // Open modal and set the selected image index for the preview
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  // Display only the first 5 images (4 on the left and 1 on the right)
  const imagesToShow = data?.images || imagesFromBackend.slice(0, 5);
  const remainingImagesCount =
    data.images.length - 5 || imagesFromBackend.length - 5;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-[1300px] mt-20">
      {/* Title and Address */}
      <div className="mb-6">
        {/* <h1 className="text-2xl md:text-3xl font-bold">{`${data.propertyType} in ${data.address.city}`}</h1> */}
        <h1 className="text-2xl md:text-3xl font-bold">{data?.title}</h1>
        <p className="">{`${data?.address?.street}, ${data?.address?.city}.`}</p>
      </div>

      {/* Property Images and Info */}
      <div className="flex flex-col md:flex-row lg:max-h-[465px] w-full gap-3 lg:gap-5">
        {/* Image Grid (Bento layout) */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-5 w-full lg:w-[42%] lg:max-h-[465px] lg:grid-rows-2">
          {imagesToShow.length > 0 &&
            imagesToShow.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="relative w-full h-full lg:max-h-[220px] cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={img.url || null}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full rounded-2xl object-cover"
                />
                {/* Display +X on the last image */}
                {index === 3 && remainingImagesCount > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl text-white font-bold text-2xl">
                    +{remainingImagesCount}
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Main Property Image */}
        <div
          className="relative w-full md:w-[58.5%] lg:h-[465px] cursor-pointer"
          onClick={() => openModal(4)}
        >
          <img
            src={imagesToShow[0].url || noImage}
            alt="Main Image"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Modal for Image Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ">
          <div className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-[10px]">
            <button
              className="absolute top-2 right-2 text-white bg-black px-2 rounded-full"
              onClick={closeModal}
            >
              x
            </button>
            <div className="flex items-center justify-center h-[80vh] rounded-lg bg-white ">
              <img
                src={data?.images[selectedImageIndex].url || noImage}
                alt="Preview"
                className="w-full h-full object-contain rounded-[10px]"
              />
            </div>

            {/* Image navigation buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black px-2"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex > 0 ? prevIndex - 1 : imagesFromBackend.length - 1
                )
              }
            >
              &lt;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black px-2"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex < imagesFromBackend.length - 1 ? prevIndex + 1 : 0
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
      )}

      {/* Property Info */}
      <div className="flex flex-wrap gap-6 lg:gap-[90px] items-center py-10">
        <div>
          <h1 className="font-bold text-xl md:text-[28px]">Property Details</h1>
          <ul className="flex flex-wrap space-x-4 items-center text-lg">
            <li>₦ {data?.price?.toLocaleString("en-us")} </li>
            <li className="flex items-center gap-1">
              <span>
                <PiBed />
              </span>{" "}
              {data?.bedrooms} bed
            </li>
            <li className="flex items-center gap-1">
              <span>
                <PiBathtub />
              </span>
              {data?.bathrooms} bath
            </li>
            <li className="flex items-center gap-1">
              <span>
                <RxSpaceBetweenVertically />
              </span>
              {data?.sqm} sq ft
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-[28px]">Property Type</h1>
          <ul className="flex space-x-4 items-center text-lg">
            <li>{data?.propertyType}</li>
          </ul>
        </div>
        {data?.year && (
          <div>
            <h1 className="font-bold text-xl md:text-[28px]">Year Built</h1>
            <ul className="flex space-x-4 items-center text-lg">
              <li>{data?.year}</li>
            </ul>
          </div>
        )}
      </div>

      {/* Property Overview */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-[28px] font-bold">Property Overview</h2>
        <p className="text-base md:text-lg">{data?.description}</p>
      </div>

      <div className="">
      <Link to={`/admin/update/${id}`} target="_blank">
            <button className="bg-primary-foreground text-white py-2 px-4 rounded-full w-full max-w-[340px]">
              Update
            </button>
          </Link>
      </div>

      <div className="flex flex-col lg:flex-row py-10 justify-between">
        {/* Property Features */}
        <div className="max-w-full lg:max-w-[65%] space-y-2">
          <h2 className="text-xl md:text-[28px] font-bold">
            Property Features
          </h2>
          <ul className="space-y-2 text-base md:text-lg">
            <li className="flex gap-1">
              <p className="text-2xl mt-1">
                <IoLocationOutline />
              </p>
              <p>
                <strong>Location and Neighborhood:</strong>{" "}
                {data.propertyFeatures.location}
              </p>
            </li>
            <li className="flex gap-1">
              <p className="text-2xl mt-1">
                <BsHouseDoor />
              </p>
              <strong>Interior Features:</strong>{" "}
              {data.propertyFeatures.interior}
            </li>
            <li className="flex gap-1">
              <p className="text-2xl mt-1">
                <FaTreeCity />
              </p>{" "}
              <strong>Exterior Features:</strong> {data.propertyFeatures.area}
            </li>
            <li className="flex gap-1">
              <p className="text-2xl mt-1">
                <PiCityLight />
              </p>{" "}
              <strong>Community Amenities:</strong>
              {data.propertyFeatures.security}
            </li>
          </ul>
          {data.keyFeatures && (
            <ul className="space-y-2 text-base md:text-lg list-disc">
              {data.keyFeatures.map((kf, i) => (
                <li className="flex gap-1" key={i}>
                  <strong>{kf.key}:</strong>
                  {kf.feature}
                </li>
              ))}
            </ul>
          )}
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

          {agentLoading ? (
            <p>Loading agent details...</p>
          ) : (
            agent && (
              <div className="flex flex-col items-center justify-center">
                <img
                  src={agent?.img || noProfile}
                  alt="Agent"
                  className="max-w-[200px] max-h-[200px] rounded-full object-cover"
                />
                <h4 className="font-bold text-lg md:text-xl">
                  Agent {agent?.data?.firstName}
                </h4>
                <p className="text-base md:text-lg font-semibold">
                  {agent?.data?.phoneNumber}
                </p>
              </div>
            )
          )}

          <Link to="https://calendly.com/blardcodes/30min" target="_blank">
            <button className="bg-primary-foreground text-white py-2 px-4 rounded-full w-full max-w-[340px]">
              Schedule a Viewing
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
