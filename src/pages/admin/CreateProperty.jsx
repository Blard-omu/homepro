import React, { useState, useRef, useEffect } from "react";
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
  const [year, setYear] = useState("");
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(3);
  const [sqm, setSqm] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState({ street: "", city: "" });
  const [propertyType, setPropertyType] = useState("apartment");
  const [keyFeatures, setkeyFeatures] = useState([{ key: "", feature: "" }]);

  // Updated to a single object
  const [propertyFeatures, setPropertyFeatures] = useState({
    location: "",
    area: "",
    interior: "",
    security: "",
    gated: "Yes",
  });
  
  const [images, setImages] = useState([]);
  const [agents, setAgents] = useState([]);
  const [agentId, setAgentId] = useState("6703f422db324e5b8b0b4da5");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // fetch agents
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const {data} = await axios.get("/users/agents");
        if (data?.success) {
          console.log("Agents fetched successfully", data.agents);
          setAgents(data.agents);
        } else {
          console.error("Failed to fetch agents", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch agents", error);
      }
    };
    fetchAgents();
  }, []);
  console.log(agents);
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const propertyData = new FormData();
    propertyData.append("title", title);
    propertyData.append("description", description);
    propertyData.append("price", price);
    propertyData.append("year", year);
    propertyData.append("bedrooms", bedrooms);
    propertyData.append("bathrooms", bathrooms);
    propertyData.append("sqm", sqm);
    propertyData.append("state", state);
    propertyData.append("address[street]", address.street);
    propertyData.append("address[city]", address.city);
    propertyData.append("propertyType", propertyType);
    propertyData.append("agentId", agentId);

    propertyData.append("propertyFeatures[location]", propertyFeatures.location);
    propertyData.append("propertyFeatures[area]", propertyFeatures.area);
    propertyData.append("propertyFeatures[interior]", propertyFeatures.interior);
    propertyData.append("propertyFeatures[security]", propertyFeatures.security);
    propertyData.append("propertyFeatures[gated]", propertyFeatures.gated);

     // Append property features as objects
     keyFeatures.forEach((feature) => {
      // Create an object and append it to FormData
      propertyData.append("keyFeatures[]", JSON.stringify(feature));
  });

    // Append all the images
    images.forEach((image) => {
      propertyData.append("images", image);
    });

    try {
      setLoading(true);
      const { data } = await axios.post("/property/create", propertyData);
      if (data?.success) {
        // Reset form fields
        setTitle("");
        setDescription("");
        setPrice("");
        setBedrooms(3);
        setBathrooms(3);
        setSqm(3000);
        setState("LAGOS");
        setAddress({ street: "", city: "" });
        setPropertyType("apartment");
        setkeyFeatures([{ key: "", feature: "" }]);
        setPropertyFeatures({
          location: "",
          area: "",
          interior: "",
          security: "",
          gated: "Yes",
        });
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

  const handleAddFeature = () => {
    setkeyFeatures([...keyFeatures, { key: "", feature: "" }]);
  };

  const handleFeatureChange = (index, e) => {
    const newFeatures = [...keyFeatures];
    newFeatures[index][e.target.name] = e.target.value;
    setkeyFeatures(newFeatures);
  };

  const handleDeleteFeature = (index) => {
    const newFeatures = keyFeatures.filter((_, i) => i !== index);
    setkeyFeatures(newFeatures);
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
    <div className="mt-16 lg:min-w-[1175px] min-h-[100vh]">
      <div className="w-full">
        <div className="p-3 my-2 text-2xl bg-gray-200 text-center font-bold">
          Create Property
        </div>
  
        <form className="w-full" onSubmit={handleFormSubmit}>
          {/* Image Upload Section */}
          <p><strong>Note: </strong>min of 5 images and max of 10 images</p>
          <div className="w-full mb-3 flex justify-start items-center">
            {images &&
              images.map((image, index) => (
                <div key={index} className="relative mx-2">
                  <span
                    className="text-red-600 bg-white rounded-full text-center cursor-pointer absolute top-2 right-2"
                    onClick={() => handleDeleteImage(index)}
                  >
                    <TiDelete />
                  </span>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    className="rounded-lg border border-gray-300 shadow-sm"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              ))}
            {images && images.length > 0 && (
              <span className="text-center p-2 flex items-center text-sm cursor-pointer">
                Add <FaPlus className="ml-2 w-4 h-4" onClick={handleAddMoreImages} />
              </span>
            )}
          </div>
  
          <label className="w-1/4 flex items-center justify-between border hover:border-primary text-sm rounded-lg mb-3 p-4 bg-gray-100 cursor-pointer">
            <IoImages /> Upload images
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setImages([...images, ...Array.from(e.target.files)])}
              multiple
              hidden
              ref={fileInputRef}
            />
          </label>
  
          {/* Property Fields */}
          <div className="mb-3">
            <input
              type="text"
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Property title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
  
          <div className="mb-3">
            <textarea
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Property description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="number"
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="text"
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
  
          <div className="grid grid-cols-3 gap-3 mb-3">
            <input
              type="number"
              className="border p-3 rounded-lg"
              placeholder="Bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
            <input
              type="number"
              className="border p-3 rounded-lg"
              placeholder="Bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
            <input
              type="number"
              className="border p-3 rounded-lg"
              placeholder="Sqm"
              value={sqm}
              onChange={(e) => setSqm(e.target.value)}
            />
          </div>
  
          <div className="grid grid-cols-3 gap-3 mb-3">
            <input
              type="text"
              className="border p-3 rounded-lg"
              placeholder="Street Address"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              required
            />
            <input
              type="text"
              className="border p-3 rounded-lg"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              required
            />
            <select
              className="border p-3 rounded-lg"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="LAGOS">Lagos</option>
              <option value="IBADAN">Ibadan</option>
              <option value="ABUJA">Abuja</option>
              <option value="OGUN">Ogun</option>
              <option value="KANO">Kano</option>
              <option value="ENUGU">Enugu</option>
            </select>
          </div>
  
          <div className="mb-3">
            <select
              className="w-full border p-3 rounded-lg"
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
  
          {/* Property Features Section */}
          <div className="mb-3">
            <h5 className="font-semibold mb-2">Property Features</h5>
            <input
              type="text"
              placeholder="Location"
              value={propertyFeatures.location}
              onChange={(e) =>
                setPropertyFeatures({ ...propertyFeatures, location: e.target.value })
              }
              className="w-full border p-3 rounded-lg mb-2"
            />
            <input
              type="text"
              placeholder="Area"
              value={propertyFeatures.area}
              onChange={(e) =>
                setPropertyFeatures({ ...propertyFeatures, area: e.target.value })
              }
              className="w-full border p-3 rounded-lg mb-2"
            />
            <input
              type="text"
              placeholder="Interior"
              value={propertyFeatures.interior}
              onChange={(e) =>
                setPropertyFeatures({ ...propertyFeatures, interior: e.target.value })
              }
              className="w-full border p-3 rounded-lg mb-2"
            />
            <input
              type="text"
              placeholder="Security"
              value={propertyFeatures.security}
              onChange={(e) =>
                setPropertyFeatures({ ...propertyFeatures, security: e.target.value })
              }
              className="w-full border p-3 rounded-lg mb-2"
            />
          </div>
  
          <div className="mb-3">
            <select
              className="w-full border p-3 rounded-lg"
              value={agentId}
              onChange={(e) => setAgentId(e.target.value)}
              required
            >
              <option value="" disabled>
                Select an Agent
              </option>
              {agents.length > 0 &&
                agents.map((agent) => (
                  <option key={agent._id} value={agent._id}>
                    {agent.userName}
                  </option>
                ))}
            </select>
          </div>
  
          <div className="mb-3">
            <label className="font-semibold mb-2 block">Key Features</label>
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  name="key"
                  placeholder="Feature Key"
                  value={feature.key}
                  onChange={(e) => handleFeatureChange(index, e)}
                  className="w-1/2 border p-3 rounded-lg mr-2"
                  required
                />
                <input
                  type="text"
                  name="feature"
                  placeholder="Feature Value"
                  value={feature.feature}
                  onChange={(e) => handleFeatureChange(index, e)}
                  className="w-1/2 border p-3 rounded-lg mr-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleDeleteFeature(index)}
                  className="text-red-500 ml-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddFeature}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add Feature
            </button>
          </div>
  
          <button
            type="submit"
            className={`bg-green-500 text-white px-4 py-2 rounded-lg mt-3 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Property"}
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default CreateProperty;