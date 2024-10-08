// import React, { useState, useEffect } from "react";
// import image1 from "../../assets/images/pana.png";
// import image2 from "../../assets/images/Frame 239.png";
// import image3 from "../../assets/images/Frame 239 (1).png";
// import { useAuth } from "../../contexts/AuthContext";
// import { capitalize } from "../../components/helpers/ScrollToTop";
// import UserAvatar from "../../components/helpers/UserAvatar";

// const Dashboard = () => {
//   const { auth } = useAuth();
//   const [username, setUsername] = useState("Moyo Maryam");

  
//   useEffect(() => {
//     if(auth){
//       setUsername(auth?.user?.username);
//     }
//   }, []);
//   return (
//     <div className=" mt-16 lg:min-w-[1128px] lg:max-w-[1440px] min-h-[100vh]">
//       {/* Dashboard Title */}
//       <div className="w-full flex justify-between items-center py-6 bg-white">
//         <div className="flex justify-between w-9/12">
//           <h1 className="text-[#000000] font-bold text-xl">Dashboard</h1>
//           <form className="w-[417px]">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="h-[44px] w-full p-[10px] border border-gray-300 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#00000033]"
//             />
//           </form>
//         </div>
//         <UserAvatar/>
//       </div>

//       {/* Search Form */}

//       {/* Welcome Section */}
//       <div className="mt-16 bg-[#FFFEF9] p-6 flex items-center space-x-6 ">
//         <div className="w-[609px] h-[279px] flex items-center space-x-6">
//           {/* Text Section */}
//           <div className="w-1/2">
//             <h2 className="text-2xl font-bold mb-4">Welcome {username}</h2>
//             <p className="text-gray-700 font-[Avenir LT Std] text-lg leading-6">
//               Manage your property searches, saved listings, and more from your
//               personalized dashboard. Whether you're actively looking to buy or
//               just browsing, we’ve got everything you need to stay organized and
//               make informed decisions.
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="w-[214px] h-[187px]">
//             <img
//               src={image1}
//               alt="Dashboard illustration"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//         {/* Recent Activities Section */}
//         <div className="w-full max-w-[466px] bg-[#FFFEF9] p-4 rounded-md shadow-md">
//           <div className="flex justify-between items-center mb-4 w-[600px]">
//             <h1 className="text-[#1F1F1F] text-[28px] font-[Avenir LT Std]">
//               Recent Activities
//             </h1>
//           </div>

//           <div className="flex items-start space-x-4  p-2">
//             <div className="w-4 h-4 bg-red-500"></div>

//             <div className="flex flex-row justify-between w-[388px] h-[66px]">
//               <h2 className="text-[#000000] mt-1 max-w-[212px] font-[Avenir LT Std] text-[18px] leading-[21.6px]">
//                 Your property, Standard Bungalow is being processed.
//               </h2>
//               <span className="text-[12px] text-[#1F1F1F99] mt-1">
//                 12 August, 2024 8:00 AM
//               </span>
//             </div>
//           </div>
//           <div className=" mt-5 p-2 flex items-start space-x-4">
//             <div className="w-6 h-4 bg-green-300"></div>
//             <div className="flex flex-row justify-between text-[#000000]  ">
//               <h2 className="font-[Avenir LT Std] text-[18px] leading-[21.6px] ">
//                 You recently added a property to your favorites.
//               </h2>
//               <span className="text-[12px] text-[#1F1F1F99]">
//                 10th August, 2024 5:00pm
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-7 w-full min-h-full flex justify-start items-center">
//         <div className="font-[Avenir LT Std] text-[#1F1F1FD9]">
//           <h2 className="text[24px] text-[#000000] font-[Avenir LT Std] w-[700px]">
//             properties purchased so far
//           </h2>
//           <p className="text-[18px] w-[600px]">
//             here are the properties you have purchased,review them so far
//           </p>
//         </div>
//       </div>
//       <div className="bg-[#FFFEF9] w-full max-w-[1125px] h-[604px] mt-7 p-6 overflow-hidden">
//         <div className="bg-[#F8F3DD] flex flex-row justify-between items-center w-full h-[80px] px-6 text-[18px] text-[#000000]">
//           <span className="font-semibold">Listing Title</span>
//           <span className="font-semibold">Date Purchased</span>
//           <span className="font-semibold">Status</span>
//         </div>

//         <div className="flex flex-row justify-between items-start w-full h-[107px] mt-4 p-4 bg-white shadow-md rounded-md">
//           <div className="flex flex-row gap-4">
//             <img
//               src={image2}
//               alt="Standard Bungalow"
//               className="w-[94px] h-[75px] rounded-md"
//             />
//             <div className="flex flex-col justify-between">
//               <h2 className="text-[18px] text-[#000000] font-[Avenir LT Std]">
//                 Standard Bungalow
//               </h2>
//               <p className="text-[#000000] text-[16px] leading-[19.2px]">
//                 No 3, Jaja Crescent, Gwarimpa, Abuja.
//               </p>
//               <span className="text-[14px] font-[Avenir LT Std] text-[#9DA008] leading-[16.8px]">
//                 ₦95,000,000
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-row gap-2.5 justify-between text-right">
//             <span className="text-[#000000] text-[16px] leading-[19.2px]">
//               31st July, 2024
//             </span>
//             <span className="text-[#E1772A33] font-medium">Processing</span>
//           </div>
//         </div>
//         <div className="flex flex-row justify-between items-start p-4 bg-white shadow-md rounded-md">
//           <div className="flex flex-row gap-4">
//             <img
//               src={image3}
//               alt="Hotel"
//               className="w-[94px] h-[75px] rounded-md"
//             />
//             <div className="flex flex-col justify-between">
//               <h2 className="text-lg font-semibold">Hotel</h2>
//               <p className="text-gray-600 text-sm">
//                 No 1, Ogeneruwe Gra, Benin.
//               </p>
//               <span className="text-xl font-bold text-gray-800">
//                 ₦500,000,000
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-col justify-between text-right">
//             <span className="text-gray-500">19th June, 2024</span>
//             <span className="text-yellow-600 font-medium">
//               Awaiting approval
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/pana.png";
import image2 from "../../assets/images/Frame 239.png";
import image3 from "../../assets/images/Frame 239 (1).png";
import { useAuth } from "../../contexts/AuthContext";
import { capitalize } from "../../components/helpers/ScrollToTop"; // Your capitalize function
import UserAvatar from "../../components/helpers/UserAvatar";

const Dashboard = () => {
  const { auth } = useAuth();
  const [username, setUsername] = useState("");  // Initially empty

  // Capitalize username when it's available
  useEffect(() => {
    if (auth?.user?.username) {
      setUsername(capitalize(auth.user.username));  // Capitalize the username
    }
  }, [auth]);  // Rerun when `auth` changes

  return (
    <div className="mt-16 lg:min-w-[1128px] lg:max-w-[1440px] min-h-[100vh]">
      {/* Dashboard Title */}
      <div className="w-full flex justify-between items-center py-6 bg-white">
        <div className="flex justify-between w-9/12">
          <h1 className="text-[#000000] font-bold text-xl">Dashboard</h1>
          <form className="w-[417px]">
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
      <div className="mt-16 bg-[#FFFEF9] p-6 flex items-center space-x-6 ">
        <div className="w-[609px] h-[279px] flex items-center space-x-6">
          {/* Text Section */}
          <div className="w-1/2">
            {/* Conditionally render username */}
            <h2 className="text-2xl font-bold mb-4">
              Welcome {username ? username : "Guest"} 
            </h2>
            <p className="text-gray-700 font-[Avenir LT Std] text-lg leading-6">
              Manage your property searches, saved listings, and more from your
              personalized dashboard. Whether you're actively looking to buy or
              just browsing, we’ve got everything you need to stay organized and
              make informed decisions.
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

      <div className="mt-7 w-full min-h-full flex justify-start items-center">
        <div className="font-[Avenir LT Std] text-[#1F1F1FD9]">
          <h2 className="text[24px] text-[#000000] font-[Avenir LT Std] w-[700px]">
            Properties purchased so far
          </h2>
          <p className="text-[18px] w-[600px]">
            Here are the properties you have purchased, review them so far.
          </p>
        </div>
      </div>

      <div className="bg-[#FFFEF9] w-full max-w-[1125px] h-[604px] mt-7 p-6 overflow-hidden">
        <div className="bg-[#F8F3DD] flex flex-row justify-between items-center w-full h-[80px] px-6 text-[18px] text-[#000000]">
          <span className="font-semibold">Listing Title</span>
          <span className="font-semibold">Date Purchased</span>
          <span className="font-semibold">Status</span>
        </div>

        <div className="flex flex-row justify-between items-start w-full h-[107px] mt-4 p-4 bg-white shadow-md rounded-md">
          <div className="flex flex-row gap-4">
            <img
              src={image2}
              alt="Standard Bungalow"
              className="w-[94px] h-[75px] rounded-md"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-[18px] text-[#000000] font-[Avenir LT Std]">
                Standard Bungalow
              </h2>
              <p className="text-[#000000] text-[16px] leading-[19.2px]">
                No 3, Jaja Crescent, Gwarimpa, Abuja.
              </p>
              <span className="text-[14px] font-[Avenir LT Std] text-[#9DA008] leading-[16.8px]">
                ₦95,000,000
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-2.5 justify-between text-right">
            <span className="text-[#000000] text-[16px] leading-[19.2px]">
              31st July, 2024
            </span>
            <span className="text-[#E1772A33] font-medium">Processing</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-start p-4 bg-white shadow-md rounded-md">
          <div className="flex flex-row gap-4">
            <img
              src={image3}
              alt="Hotel"
              className="w-[94px] h-[75px] rounded-md"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-lg font-semibold">Hotel</h2>
              <p className="text-gray-600 text-sm">No 1, Ogeneruwe Gra, Benin.</p>
              <span className="text-xl font-bold text-gray-800">₦500,000,000</span>
            </div>
          </div>

          <div className="flex flex-col justify-between text-right">
            <span className="text-gray-500">19th June, 2024</span>
            <span className="text-yellow-600 font-medium">Awaiting approval</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
