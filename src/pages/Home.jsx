import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedProperty from "@/components/home/Featured";
import HowItWorks from "@/components/home/HowItWork";
import Listings from "../components/home/Listing";
import OurAgents from "@/components/home/OurAgents";
import BlogComponent from "@/components/home/BlogComponent";
import TestimonialWrapper from "@/components/home/TestimonialWrapper";
import Cta from "@/components/home/cta";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <div className="bg-[#fffffe]">
      <Hero />
      <div className="my-16 ">
      <FeaturedProperty />
      </div>
      <div className="mt-16 ">
        <HowItWorks />
      </div>
      <div className="mt-16">
        <Listings/>
      </div>
      <div className="mt-16" >
        <OurAgents/>
      </div>
      <div className="mt-16">
        <BlogComponent/>
      </div>
      <div className="mt-16">
        <TestimonialWrapper/>
      </div>
      <div className="my-16">
        <Cta/>
      </div>
    </div>
  );
};

export default Home;
