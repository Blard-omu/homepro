// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const UpdateProperty = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   console.log(id);
  

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     year: '',
//     bedrooms: 3,
//     bathrooms: 3,
//     sqm: 3000,
//     state: 'LAGOS',
//     street: '',
//     city: '',
//     propertyType: 'Apartment',
//     propertyFeatures: {
//       location: '',
//       area: '',
//       interior: '',
//       security: '',
//       gated: 'Yes',
//     },
//     keyFeatures: [{ key: '', feature: '' }],
//     images: [{ url: '', imagePublicId: '' }],
//   });

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const loadProperty = async () => {
//       try {
//         const { data } = await axios.get(`/property/${id}`);
//         if (data.success) {
//           setFormData({
//             ...data.property,
//             street: data.property.address.street,
//             city: data.property.address.city,
//           });
//         }
//       } catch (error) {
//         console.error("Error loading property details:", error);
//       }
//     };

//     loadProperty();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleNestedChange = (e, parentKey) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [parentKey]: {
//         ...prevData[parentKey],
//         [name]: value,
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.put(`/properties/${propertyId}`, formData);
//       if (data.success) {
//         navigate(`/properties/${propertyId}`);
//       }
//     } catch (error) {
//       console.error("Error updating property:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6">Update Property</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Basic property details */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="form-group">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="price">Price</label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6 mt-4">
//             <div className="form-group">
//               <label htmlFor="year">Year</label>
//               <input
//                 type="text"
//                 id="year"
//                 name="year"
//                 value={formData.year}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="state">State</label>
//               <select
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               >
//                 <option value="LAGOS">Lagos</option>
//                 <option value="IBADAN">Ibadan</option>
//                 <option value="ABUJA">Abuja</option>
//                 <option value="OGUN">Ogun</option>
//                 <option value="KANO">Kano</option>
//                 <option value="Enugu">Enugu</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6 mt-4">
//             <div className="form-group">
//               <label htmlFor="bedrooms">Bedrooms</label>
//               <input
//                 type="number"
//                 id="bedrooms"
//                 name="bedrooms"
//                 value={formData.bedrooms}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="bathrooms">Bathrooms</label>
//               <input
//                 type="number"
//                 id="bathrooms"
//                 name="bathrooms"
//                 value={formData.bathrooms}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Address fields */}
//           <div className="grid grid-cols-2 gap-6 mt-4">
//             <div className="form-group">
//               <label htmlFor="street">Street</label>
//               <input
//                 type="text"
//                 id="street"
//                 name="street"
//                 value={formData.street}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Property Features */}
//           <div className="mt-4">
//             <h3 className="font-bold text-lg">Property Features</h3>
//             <div className="grid grid-cols-2 gap-6 mt-2">
//               <div className="form-group">
//                 <label htmlFor="location">Location</label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={formData.propertyFeatures.location}
//                   onChange={(e) => handleNestedChange(e, 'propertyFeatures')}
//                   className="w-full border p-2 rounded-md"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="area">Area</label>
//                 <input
//                   type="text"
//                   id="area"
//                   name="area"
//                   value={formData.propertyFeatures.area}
//                   onChange={(e) => handleNestedChange(e, 'propertyFeatures')}
//                   className="w-full border p-2 rounded-md"
//                 />
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 px-4 rounded-md mt-6"
//             disabled={loading}
//           >
//             {loading ? "Updating..." : "Update Property"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProperty;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    year: '',
    bedrooms: 3,
    bathrooms: 3,
    sqm: 3000,
    state: 'LAGOS',
    street: '',
    city: '',
    propertyType: 'Apartment',
    propertyFeatures: {
      location: '',
      area: '',
      interior: '',
      security: '',
      gated: 'Yes',
    },
    keyFeatures: [{ key: '', feature: '' }],
    images: [{ url: '', imagePublicId: '' }],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        const { data } = await axios.get(`/property/${id}`);
        if (data.success) {
          setFormData({
            ...data.property,
            street: data.property.address.street || '',
            city: data.property.address.city || '',
            keyFeatures: data.property.keyFeatures || [{ key: '', feature: '' }],
            propertyFeatures: {
              location: data.property.propertyFeatures.location || '',
              area: data.property.propertyFeatures.area || '',
              interior: data.property.propertyFeatures.interior || '',
              security: data.property.propertyFeatures.security || '',
              gated: data.property.propertyFeatures.gated || 'Yes',
            },
          });
        }
      } catch (error) {
        console.error("Error loading property details:", error);
      }
    };

    loadProperty();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, parentKey) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [parentKey]: {
        ...prevData[parentKey],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.patch(`/update/${id}`, formData);
      if (data.success) {
        console.log(data);
        
        navigate(`admin/properties`);
      }
    } catch (error) {
      console.error("Error updating property:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Update Property</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic property details */}
          <div className="grid grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                value={formData.state || 'LAGOS'}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
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

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms || 3}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms || 3}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>
          </div>

          {/* Address fields */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>
          </div>

          {/* Property Features */}
          <div className="mt-4">
            <h3 className="font-bold text-lg">Property Features</h3>
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.propertyFeatures.location || ''}
                  onChange={(e) => handleNestedChange(e, 'propertyFeatures')}
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="area">Area</label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.propertyFeatures.area || ''}
                  onChange={(e) => handleNestedChange(e, 'propertyFeatures')}
                  className="w-full border p-2 rounded-md"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-6"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Property"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
