// import React from "react";
// import { Link } from "react-router-dom";

// const AdminSideNav = () => {
//   return (
//     <aside className="w-64  text-[#1F1F1F] h-screen bg-[#FFFEF9]">
//       <div className="p-4 text-2xl font-bold">Admin Panel</div>
//       <nav>
//         <ul>
//           <li className="p-4 hover:bg-gray-700">
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-700">
//             <Link to="/properties">Property Alert</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-700">
//             <Link to="/favourite">My Favourite</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-700">
//             <Link to="/viewed">Recently Viewed</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-700">
//             <Link to="/message">Messages</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-700">
//             <Link to="/settings">Account Settings</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-700">
//             <Link to="/logout">Logout</Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default AdminSideNav;


// AdminSideNav.jsx
import React from "react";
import { Link } from "react-router-dom";

const AdminSideNav = () => {
  return (
    <aside className="w-64 text-[#1F1F1F] h-screen bg-[#FFFEF9]">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/dashboard">Dashboard</Link> {/* Updated */}
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/properties">Property Alert</Link> {/* Updated */}
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/favourite">My Favourite</Link> {/* Add route */}
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/viewed">Recently Viewed</Link> {/* Add route */}
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/message">Messages</Link> {/* Add route */}
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/settings">Account Settings</Link> {/* Updated */}
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideNav;
