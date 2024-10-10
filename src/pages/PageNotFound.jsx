import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-primary-foreground w-full min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-white">404 | Page Not Found</h1>
        <div className="mt-4">
      <Link to="/">
        <button className="bg-yellow-50 text-primary rounded-full px-3">
          Back to Home
        </button>
      </Link>
      </div>
      </div>

     
    </div>
  );
};

export default PageNotFound;
