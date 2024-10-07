import React from "react";
import line from "../../assets/icons/Line 3.png";

const Jumbotron = ({
  title = "Welcome to HomePro",
  subtitle = "Discover our world-class homes, luxurious apartments, and unique properties.",
}) => {
  return (
    <div
      className="h-[300px] bg-primary md:bg-cover md:bg-no-repeat"
      style={{
        backgroundImage: `url(${line})`,
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-transparent">
        <div className="text-center w-full lg:max-w-[50%] mx-auto bg-transparent">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-foreground bg-transparent">
            {title}
          </h1>
          <p className="text-lg text-secondary-foreground font-semibold bg-transparent pt-4 md:mt-0 px-4">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
