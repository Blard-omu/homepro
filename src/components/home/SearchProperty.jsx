import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchProperty = () => {
  return (
    <div
      className="w-full md:h-[118px] bg-dark rounded-full flex justify-between items-center p-6
    md:p-8 md:px-12"
    >
      <div className="w-[30%] lg:w-[13%] bg-dark text-secondary hidden md:block">
        <label className="block text-sm font-semibold bg-inherit pb-2">
          LOCATION
        </label>
        <select
          id="options"
          name="options"
          className=" filter block  w-[60%] border-1 border-secondary bg-inherit py-2 text-secondary sm:text-sm rounded-lg"
        >
          <option className="bg-inherit hover:bg-primary" value="option1">
            Option 1
          </option>
          <option className="bg-inherit" value="option2">
            Option 2
          </option>
          <option className="bg-inherit" value="option3">
            Option 3
          </option>
        </select>
      </div>
      <div className="w-[1px] h-full hidden lg:block border border-l-slate-600"></div>
      <div className="w-[13%] bg-dark text-secondary hidden lg:block">
        <label
          for="options"
          className="block font-semibold text-sm bg-inherit pb-2"
        >
          BEDROOMS
        </label>
        <div className=" filter w-full border-1 border-secondary bg-inherit py-2 text-secondary sm:text-sm rounded-lg">
          Counter here
        </div>
      </div>
      <div className="w-[1px] h-full hidden lg:block border border-l-slate-600"></div>
      <div className="w-[13%] bg-dark text-secondary hidden lg:block">
        <label
          for="options"
          className="block font-semibold text-sm bg-inherit pb-2"
        >
          PROPERTY TYPE
        </label>
        <select
          id="options"
          name="options"
          className=" filter block   w-[60%] border-1 border-secondary bg-inherit py-2 text-secondary sm:text-sm rounded-lg"
        >
          <option className="bg-inherit hover:bg-primary" value="option1">
            Option 1
          </option>
          <option className="bg-inherit" value="option2">
            Option 2
          </option>
          <option className="bg-inherit" value="option3">
            Option 3
          </option>
        </select>
      </div>
      <div className="w-[1px] hidden md:block h-full border border-l-slate-600"></div>
      <div className="w-[30%] lg:w-[13%] bg-dark text-secondary  hidden md:block">
        <label
          for="options"
          className="block font-semibold text-sm bg-inherit pb-2"
        >
          PRICE RANGE
        </label>
        <select
          id="options"
          name="options"
          className=" filter block  w-[60%] border-1 border-secondary bg-inherit py-2 text-secondary sm:text-sm rounded-lg"
        >
          <option className="bg-inherit hover:bg-primary" value="option1">
            Option 1
          </option>
          <option className="bg-inherit" value="option2">
            Option 2
          </option>
          <option className="bg-inherit" value="option3">
            Option 3
          </option>
        </select>
      </div>
      <div className="w-[1px] hidden md:block h-full border border-l-slate-600"></div>
      <div className="w-[30%] lg:w-[13%] bg-dark text-secondary  hidden md:block">
        <div className="bg-dark">
          <button className="w-full flex items-center justify-center text-secondary bg-primary text-md p-3 hover:border hover:border-primary  hover:bg-secondary hover:text-primary  rounded-full">
            <CiSearch className="bg-inherit hover:bg-inherit hover:text-inherit" />{" "}
            &nbsp; Search
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full bg-dark md:hidden flex justify-between items-center">
        <input
          type="text"
          className="w-[80%] bg-dark py-2 text-secondary border-1 focus:outline-none border border-slate-400 focus:border-secondary text-sm rounded rounded-r-none px-4"
          placeholder="Search by keyword..."
        />
        <button className="w-[20%] flex items-center justify-center p-2 rounded rounded-l-none text-primary bg-secondary hover:bg-primary hover:text-secondary">
          <CiSearch className=" text-2xl bg-inherit text-inherit font-bold" />
        </button>
      </div>
    </div>
  );
};

export default SearchProperty;
