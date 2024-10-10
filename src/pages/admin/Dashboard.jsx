import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/pana.png";
import { useAuth } from "../../contexts/AuthContext";
import { capitalize } from "../../components/helpers/ScrollToTop"; 
import PurchaseTable from "./PurchaseTable";

const Dashboard = () => {
  const { auth } = useAuth();
  const [username, setUsername] = useState("");  

  useEffect(() => {
    if (auth?.user?.username) {
      setUsername(capitalize(auth.user.username)); 
    }
  }, [auth]); 

  return (
    <div className="lg:min-w-[960px] lg:max-w-[1440px] min-h-[100vh]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
        <div className="lg:w-[55%] bg-[#FFFEF9] flex items-center space-x-6 h-[279px] p-3 rounded-2xl">
          <div className="w-full lg:w-1/2 h-full">
            <h2 className="md:text-2xl  font-bold">
              Welcome <span className="text-primary md:text-2xl">{username ? username : "Guest"}</span> 
            </h2>
            <p className="text-gray-700  text-sm leading-6">
              Manage your property searches, saved listings, and more from your
              personalized dashboard. Whether you're actively looking to buy or
              just browsing, we’ve got everything you need to stay organized and
              make informed decisions.
            </p>
          </div>

          <div className="w-1/2 h-[187px]">
            <img
              src={image1}
              alt="Dashboard illustration"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full lg:w-[44%] space-x-6 h-[279px] p-3 rounded-2xl bg-white">
          <div className="w-full h-full">
            <h2 className="md:text-2xl font-bold">Saved Listings</h2>
            <p className="text-gray-700 text-sm leading-6">
              Keep track of your favorite properties and easily access them when
              you're ready to move.
            </p>
          </div>
        </div>
      </div>

      <div className="my-6">
      <PurchaseTable/>
      </div>

     

     
    </div>
  );
};

export default Dashboard;
