import React from "react";
import FormCard from "../../components/cards/FormCard";
import { loginDb } from "../../components/db/authForm";

// console.log(loginDb);

const Login = () => {
  return (
    <div className="">
      <div className="mt-16 w-11/12 md:w-9/12 lg:w-6/12 mx-auto">
        <FormCard
          inputData={loginDb}
          title="WELCOME BACK"
          subtitle="Don't have an account?"
          link="register"
          toPage="Sign Up"
          showGoogleBtn={true}
        />
      </div>
    </div>
  );
};

export default Login;
