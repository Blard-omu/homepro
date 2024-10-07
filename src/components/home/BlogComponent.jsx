import React from "react";
import { blogDb } from "../db/home/index";
import BlogCard from "../cards/BlogCard";
import ComponentWrapper from "../helpers/ComponentWrapper";

const BlogComponent = () => {
  return (
    <ComponentWrapper className="my-4">
      <h1 className="text-3xl text-center lg:text-start md:text-4xl font-bold py-8">
        Latest News and Resources
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
        {blogDb &&
          blogDb.length > 0 &&
          blogDb.map((blog) => {
            return (
              <div key={blog._id}>
                <BlogCard {...blog} key={blog._id} />
              </div>
            );
          })}
      </div>
    </ComponentWrapper>
  );
};

export default BlogComponent;
