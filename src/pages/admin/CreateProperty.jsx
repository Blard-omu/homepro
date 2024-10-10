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
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(3);
  const [sqm, setSqm] = useState(3000);
  const [state, setState] = useState("LAGOS");
  const [address, setAddress] = useState({ street: "", city: "" });
  const [propertyType, setPropertyType] = useState("apartment");
  
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
        const {data} = await axios.get("users/agents");
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const propertyData = new FormData();
    propertyData.append("title", title);
    propertyData.append("description", description);
    propertyData.append("price", price);
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
      <div className="lg:w-[1228px] min-h-[100vh] flex justify-center items-center">
        <div className="w-full lg:w-1/2 mx-auto">
          <div className="p-3 my-2 h4 bg-light text-start font-bold">Create Property</div>

          <form className="w-full" onSubmit={handleFormSubmit}>
            {/* Image Upload Section */}
            <div className=" w-full mb-3 flex justify-start" >
              {images &&
                images.map((image, index) => (
                  <div key={index} className="relative">
                      <span
                        className="text-rose-600 bg-white rounded-full text-center cursor-pointer absolute z-10 right-2"
                        key={index}
                        onClick={() => handleDeleteImage(index)}
                      >
                        <TiDelete />
                      </span>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index + 1}`}
                      className="img-thumbnail mr-2 mx-2 relative"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                ))}
              {images && images.length > 0 && (
                <span className="text-center p-2 flex items-center text-sm">
                  Add
                  <FaPlus className="ms-2 w-2 h-2" onClick={handleAddMoreImages} />
                </span>
              )}
            </div>

            <label className=" flex w-40 items-center justify-between text-primary border hover:border-primary text-sm rounded-2xl mb-3 p-4 bg-slate-200">
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
            <div className="form-group">
              <label>Title<span className="text-primary">*</span></label>
              <div className="">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Property title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              </div>
            </div>

            <div className="form-group">
              <label>Description<span className="text-primary">*</span></label>
              <div className="">
              <textarea
                className="form-control mb-3"
                placeholder="Property description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              </div>
            </div>

            <div className="form-group">
            <label>Price<span className="text-primary">*</span></label>
              <div className="">
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Price"
                value={price}
                min={20000000}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="w-[31%]">
                <input
                  type="number"
                  className="form-control mb-3 w-full"
                  placeholder="Bedrooms"
                  min={1}
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                />
              </div>
              <div className="w-[31%]">
                <input
                  type="number"
                  className="form-control mb-3 w-full"
                  placeholder="Bathrooms"
                  min={1}
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                />
              </div>
              <div className="w-[31%]">
                <input
                  type="number"
                  className="form-control mb-3 w-full"
                  placeholder="Square Meters"
                  value={sqm}
                  min={1000}
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
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  required
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  required
                />
              </div>
              <div className="">
                <label className="block">Select State</label>
                <select
                  className="form-select mb-3"
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
            </div>

            <div className="form-group">
            <label className="block">Property Type</label>
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

            {/* Property Features Section */}
            <div className="mb-3">
              <h5>Property Features</h5>
              <div className="">
              <input
                type="text"
                placeholder="Location"
                value={propertyFeatures.location}
                onChange={(e) => setPropertyFeatures({ ...propertyFeatures, location: e.target.value })}
                className="form-control mb-2"
              />
              </div>
              <div className="">
              <input
                type="text"
                placeholder="Area"
                value={propertyFeatures.area}
                onChange={(e) => setPropertyFeatures({ ...propertyFeatures, area: e.target.value })}
                className="form-control mb-2"
              />
              </div>
              <div className="">
              <input
                type="text"
                placeholder="Interior"
                value={propertyFeatures.interior}
                onChange={(e) => setPropertyFeatures({ ...propertyFeatures, interior: e.target.value })}
                className="form-control mb-2"
              />
              </div>
              <div className="">
              <input
                type="text"
                placeholder="Security"
                value={propertyFeatures.security}
                onChange={(e) => setPropertyFeatures({ ...propertyFeatures, security: e.target.value })}
                className="form-control mb-2"
              />
              </div>

              {/*Map throught agents array and setAgentId */}
              <div className="form-group">
                <label className="block">Select Agent</label>
              <select
                className="form-select mb-3"
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                required
              >
                {/* <option value="" disabled>Select an Agent</option> */}
                {agents.length > 0 && agents.map(agent => (
                  <option key={agent._id} value={agent._id}>
                    {agent.userName}
                  </option>
                ))}
              </select>
            </div>

            </div>

            <button type="submit" className="bg-primary text-white rounded-full py-3 px-6 my-3" disabled={loading}>
              {loading ? "Creating..." : "Create Property"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProperty;
