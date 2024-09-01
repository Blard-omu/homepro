import React from "react";


const TestimonialCard = ({ _id, author, image, content }) => {
  return (
    <>
      <div
        className="flex flex-col justify-between mt-16 items-center rounded-2xl bg-secondary-foreground max-w-[372px] h-[206px] text-dark relative p-6"
        key={_id}
      >
          <div className="w-full flex justify-center items-center relative -top-8">
          <img src={image} alt="" className="w-24 h-24 rounded-full absolute z-20" />
          </div>
        <div className="bg-inherit text-center">
            <p className="bg-inherit text-sm font-semibold">{`"${content}"`}</p>
            <p className="bg-inherit text-sm mt-2 font-bold">{author}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
