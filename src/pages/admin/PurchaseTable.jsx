import React from "react";
import image1 from "../../assets/images/Frame 239.png";
import image2 from "../../assets/images/Frame 239 (1).png";
import image3 from "../../assets/images/Frame 239 (2).png";

const PurchaseTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="md:min-w-full table-fixed bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 w-1/3 text-left">Listings</th>
            <th className="py-2 px-4 w-1/3 text-left">Date Purchase</th>
            <th className="py-2 px-4 w-1/3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-2 px-4 w-1/3">
            <div className="flex items-center">
            <img src={image1} alt="listing-image" className="mr-2" />
              <div className="text-sm">
                <h3>Standard Bungalow</h3>
                <p className="text-sm">No 3, Jaja Crescent, Gwarimpa Abuja.</p>
                <h4>95,000,000</h4>
              </div>
            </div>
              
            </td>
            <td className="py-2 px-4 w-1/3">2024-10-08</td>
            <td className="py-2 px-4 w-1/3">Active</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 w-1/3">
            <div className="flex items-center">
            <img src={image2} alt="listing-image" className="mr-2" />
              <div className="text-sm">
                <h3>Standard Bungalow</h3>
                <p className="text-sm">No 3, Jaja Crescent, Gwarimpa Abuja.</p>
                <h4>95,000,000</h4>
              </div>
            </div>
              
            </td>
            <td className="py-2 px-4 w-1/3">2024-10-05</td>
            <td className="py-2 px-4 w-1/3">Sold</td>
          </tr>
          <tr className="w-full border-t">
            <td className="py-2 px-4 w-1/3">
              <div className="flex items-center">
              <img src={image3} alt="listing-image" className="mr-2" />
              <div className="text-sm">
                <h3>Standard Bungalow</h3>
                <p className="text-sm">No 3, Jaja Crescent, Gwarimpa Abuja.</p>
                <h4>95,000,000</h4>
              </div>
              </div>
            </td>
            <td className="py-2 px-4 w-1/3">2024-09-20</td>
            <td className="py-2 px-4 w-1/3">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseTable;
