import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoImages } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const CreateProperty = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(3);
  const [sqm, setSqm] = useState(3000);
  const [location, setLocation] = useState("LAGOS");
  const [address, setAddress] = useState({ street: "", city: "" });
  const [propertyType, setPropertyType] = useState("apartment");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const propertyData = new FormData();
    propertyData.append("title", title);
    propertyData.append("description", description);
    propertyData.append("price", price);
    propertyData.append("bedrooms", bedrooms);
    propertyData.append("bathrooms", bathrooms);
    propertyData.append("sqm", sqm);
    propertyData.append("location", location);
    propertyData.append("address[street]", address.street);
    propertyData.append("address[city]", address.city);
    propertyData.append("propertyType", propertyType);
    
    // Append all the images/videos
    images.forEach((image) => {
      propertyData.append("images", image);
    });

    try {
      setLoading(true);
      const { data } = await axios.post("/property/create", propertyData);
      if (data?.success) {
        setTitle("");
        setDescription("");
        setPrice("");
        setBedrooms(3);
        setBathrooms(3);
        setSqm(3000);
        setLocation("LAGOS");
        setAddress({ street: "", city: "" });
        setPropertyType("apartment");
        setImages([]);
        toast.success("Property created successfully!");
        navigate("/admin/properties");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Property creation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddMoreImages = () => {
    fileInputRef.current.click();
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div>
      <div className="container w-full bg-lime-500 mt-md-4">
        {/* <div className="row"> */}
          <div className="w-full">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Create Property</div>

            <form className="w-full" onSubmit={handleFormSubmit}>
              {/* Image Upload Section */}
              <div className="mb-3" style={{ position: "relative" }}>
                {images &&
                  images.map((image, index) => (
                    <div key={index}>
                      {images.length > 0 && (
                        <span
                          className="bg-danger text-light p-1 rounded-5 text-center"
                          style={{
                            position: "absolute",
                            left: "13%",
                            width: "20px",
                            height: "20px",
                            fontSize: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDeleteImage(index)}
                        >
                          <TiDelete />
                        </span>
                      )}
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index + 1}`}
                        className="img-thumbnail mr-2 mx-2"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                  ))}
                {images && images.length > 0 && (
                  <span className="text-center text-dark p-2">
                    Add
                    <FaPlus className="ms-1" onClick={handleAddMoreImages} />
                  </span>
                )}
              </div>

              <label className="bg-rose-400 mb-3">
                <IoImages /> Upload images
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) =>
                    setImages([...images, ...Array.from(e.target.files)])
                  }
                  multiple
                  hidden
                  ref={fileInputRef}
                />
              </label>

              {/* Property Fields */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Property title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control mb-3"
                  placeholder="Property description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="row">
                <div className="">
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Sqm"
                    value={sqm}
                    onChange={(e) => setSqm(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Street Address"
                    value={address.street}
                    onChange={(e) =>
                      setAddress({ ...address, street: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="">
                  <select
                    className="form-select mb-3"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="LAGOS">Lagos</option>
                    <option value="IBADAN">Ibadan</option>
                    <option value="ABUJA">Abuja</option>
                    <option value="OGUN">Ogun</option>
                    <option value="KANO">Kano</option>
                    <option value="Enugu">Enugu</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <select
                  className="form-select mb-3"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="office">Office</option>
                  <option value="villa">Villa</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Property"}
                </button>
              </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default CreateProperty;
