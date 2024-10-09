import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex justify-center my-8">
      <nav>
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md"
            >
              {"<"}
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === index + 1 ? "bg-primary text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-md"
            >
              {">"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
