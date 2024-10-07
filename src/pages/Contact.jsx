import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="mt-32">
      <Jumbotron
        title="Have any Questions?"
        subtitle="We are available, contact us"
      />
      <div className=" py-[85px] space-y-14 container mx-auto">
        <div className="flex justify-center items-start md:items-center  flex-col gap-2.5 px-6 lg:px-[152px] xl:px-[182px] text-start md:text-center">
        <h1 className='font-bold text-2xl md:text-3xl lg:text-[40px]'>Get in Touch with Us</h1>
        <p className="font-semibold  text-base md:text-lg lg:text-xl">We’re here to help you with all your real estate needs. Whether you have questions about buying or selling a property, need advice on the market, or want to schedule a viewing, our team is ready to assist you. Please fill out the form below or reach out to us directly through the provided contact information.</p>
        </div>
        <div className='px-2 md:px-5 lg:px-[163px]'>
        <ContactForm />
        </div>
        
      </div>
    </div>
    
  );
};

export default Contact;
