import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/pana.png";
import image2 from "../../assets/images/Frame 239.png";
import image3 from "../../assets/images/Frame 239 (1).png";
import { capitalize } from "../../components/helpers/ScrollToTop"; 
import { useAuth } from "../../contexts/AuthContext";
import UserAvatar from "../../components/helpers/UserAvatar";

const UserDashboard = () => {
  const { auth } = useAuth();
  const [username, setUsername] = useState("");  

  useEffect(() => {
    if (auth?.user?.username) {
      setUsername(capitalize(auth.user.username)); 
    }
  }, [auth]); 

  return (
    <div className="lg:min-w-[1128px] lg:max-w-[1440px] min-h-[100vh]">
      <div className="w-full flex justify-between items-center py-6 bg-white px-4">
        <div className="flex justify-between w-9/12">
          <h1 className="text-[#000000] font-bold text-xl">User Dashboard</h1>
          <form className="lg:w-1/3 ">
            <input
              type="text"
              placeholder="Search..."
              className="h-[44px] w-full p-[10px] border border-gray-300 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#00000033]"
            />
          </form>
        </div>
        <UserAvatar />
      </div>

      {/* Welcome Section */}
      <div className="bg-[#FFFEF9] p-6 flex items-center space-x-6 ">
        <div className="w-[609px] h-[279px] flex items-center space-x-6">
          {/* Text Section */}
          <div className="w-1/2">
            {/* Conditionally render username */}
            <h2 className="text-2xl font-bold mb-4 ">
              Welcome <span className="text-primary">{username ? username : "Guest"}</span> 
            </h2>
            <p className="text-gray-700 font-[Avenir LT Std] text-lg leading-6">
              It's great to have you on board <b className="text-primary font-semibold">{username ? username : "Guest"}</b>. Manage your property searches, saved listings, and more from your
              personalized dashboard. 
            </p>
          </div>

          {/* Image Section */}
          <div className="w-[214px] h-[187px]">
            <img
              src={image1}
              alt="Dashboard illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="w-full max-w-[466px] bg-[#FFFEF9] p-4 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4 w-[600px]">
            <h1 className="text-[#1F1F1F] text-[28px] font-[Avenir LT Std]">
              Recent Activities
            </h1>
          </div>

          <div className="flex items-start space-x-4 p-2">
            <div className="w-4 h-4 bg-red-500"></div>
            <div className="flex flex-row justify-between w-[388px] h-[66px]">
              <h2 className="text-[#000000] mt-1 max-w-[212px] font-[Avenir LT Std] text-[18px] leading-[21.6px]">
                Your property, Standard Bungalow is being processed.
              </h2>
              <span className="text-[12px] text-[#1F1F1F99] mt-1">
                12 August, 2024 8:00 AM
              </span>
            </div>
          </div>

          <div className="mt-5 p-2 flex items-start space-x-4">
            <div className="w-6 h-4 bg-green-300"></div>
            <div className="flex flex-row justify-between text-[#000000]">
              <h2 className="font-[Avenir LT Std] text-[18px] leading-[21.6px]">
                You recently added a property to your favorites.
              </h2>
              <span className="text-[12px] text-[#1F1F1F99]">10th August, 2024 5:00pm</span>
            </div>
          </div>
        </div>
      </div>

     

      
    </div>
  );
};

export default UserDashboard;
