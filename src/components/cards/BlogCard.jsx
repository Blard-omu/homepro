import React from "react";
import calendar from "../../assets/icons/CalendarDots.png";
import pen from "../../assets/icons/Pen.png";
import link from "../../assets/icons/ArrowBendUpRight.png";
import { Link } from "react-router-dom";

const BlogCard = ({ _id, title, image, description, author, date }) => {
  return (
    <>
      <div
        className="rounded-xl border border-slate-300 w-full md:max-w-[380px] h-[490px] text-dark hover:shadow-lg shadow-primary hover:border-primary"
        key={_id}
      >
        <img src={image} alt="" className="w-full h-[285px] rounded-t-xl" />
        <div className="p-4 h-[204px] rounded-xl border-b border-slate-300 hover:border-primary">
          <div className="flex text-[#1F1F1F] justify-between pt-2">
            <div className="flex items-center ">
              <img src={pen} alt="pen" className="w-[20px] h-[20px] mr-2" />
              <span className="text-sm">{author}</span>
            </div>
            <div className="flex items-center">
              <img
                src={calendar}
                alt="vector"
                className="w-[20px] h-[20px] mr-2"
              />
              <span className="text-sm">{date}</span>
            </div>
          </div>
          <div className="text-[#1F1F1F] weight-[700] text-lg font-bold">
            <h3>{title}</h3>
          </div>
          <div className="w-full text-sm">
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex justify-start bg-inherit border-inherit py-2 rounded-xl">
            <img src={link} alt="pen" className="w-[20px] h-[20px] mr-2" />
            <Link to="/blog" className="text-primary text-sm underline">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
