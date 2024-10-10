import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import { TbCurrencyNaira } from "react-icons/tb";

const AdminProperties = () => {
  // state
  const [properties, setProperties] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [productCount, setProductCount] = useState(null);
  const [limit, setLimit] = useState(() => {
    const savedLimit = localStorage.getItem("currentLimit");
    return savedLimit ? parseInt(savedLimit) : 4;
  });
  const [currentPageFromAPI, setCurrentPageFromAPI] = useState(1);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage) : 1;
  });

  useEffect(() => {
    loadProducts();
  }, [page, limit]);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`/properties?page=${page}&limit=${limit}`);
      if (data.success) {
        setProperties(data.properties);
        setTotalPages(data.totalPages);
        setProductCount(data.totalItems);
        setCurrentPageFromAPI(data.currentPage);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setPage(parseInt(savedPage));
    }

    const savedLimit = localStorage.getItem("currentLimit");
    if (savedLimit) {
      setLimit(parseInt(savedLimit));
    }

    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);

  useEffect(() => {
    localStorage.setItem("currentLimit", limit);
    loadProducts();
  }, [limit]);

  return (
    <div className="lg:min-w-[960px] lg:max-w-[1440px] min-h-screen px-4 text-white">
      <div className="my-6 bg-primary/50 p-4 text-black rounded-lg flex justify-between items-center">
        <h4 className="font-semibold text-lg">
          All Properties <span>({productCount || 0})</span>
        </h4>
        <div>
          <select
            className="px-3 text-sm py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
          >
            <option value={limit}>{limit} per page</option>
            <option className="text-sm" value="4">4 per page</option>
            <option className="text-sm" value="6">6 per page</option>
            <option className="text-sm" value="10">10 per page</option>
            <option className="text-sm" value="20">20 per page</option>
          </select>
        </div>
        <p className="px-4 py-2 bg-yellow-400 text-black rounded-lg">
          Page {currentPageFromAPI}/{totalPages}
        </p>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-black">
          <thead className="bg-primary/50">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Photo</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Created At</th>
              <th className="py-2 px-4 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 &&
              properties.map((property, i) => (
                <tr key={property._id} className="border-t">
                  <td className="py-3 px-4">{(page - 1) * limit + i + 1}</td>
                  <td className="py-3 px-4">
                    {property?.images && (
                      <img
                        src={property.images.length > 0 && property.images[0].url}
                        alt={property.images.length > 0 && property.images[0].imagePublicId}
                        className="w-20 h-20 rounded-md object-cover"
                      />
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm">{property.title}</td>
                  <td className="py-3 px-4"><div className="flex items-center">
                  <TbCurrencyNaira/><span className="text-sm">{property.price.toLocaleString()}</span></div></td>
                  <td className="py-3 px-4 text-sm">
                    {moment(property.createdAt).format("MMMM Do YYYY")}
                  </td>
                  <td className="py-3 px-4">
                    <Link
                      to={`/dashboard/admin-product/detail/${property.slug}`}
                      className="text-primary-foreground text-sm hover:underline"
                    >
                      View Detail
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center my-6">
        <button
          className="w-32 px-4 py-2 mx-2 bg-primary text-white hover:text-primary rounded-full hover:bg-white border hover:border-primary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-black">
          (page {currentPageFromAPI}/{totalPages})
        </span>
        <button
          className="w-32 px-4 py-2 mx-2 bg-primary text-white hover:text-primary rounded-full hover:bg-white border hover:border-primary"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminProperties;
