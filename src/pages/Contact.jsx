import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import FormCard from "../components/cards/FormCard";

const Contact = () => {
  return (
    <div className="mt-16">
      <Jumbotron
        title="Have any Questions?"
        subtitle="We are available, contact us"
      />
      <div className="mt-16 w-11/12 md:w-9/12 lg:w-6/12 mx-auto">
        <FormCard/>
      </div>
    </div>
  );
};

export default Contact;
