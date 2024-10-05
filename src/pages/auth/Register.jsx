// import React from "react";
// import FormCard from "../../components/cards/FormCard";
// import { signUpDb, loginDb } from "../../components/db/authForm";

// const Register = () => {
//   return (
//     <div className="">
//       <FormCard
//         inputData={signUpDb}
//         title="REGISTER!"
//         subtitle="Already have an account?"
//         link="login"
//         toPage="Login"
//       />
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import FormCard from "../../components/cards/FormCard";
import { signUpDb, loginDb } from "../../components/db/authForm"; 

const Register = () => {
  const [isLogin, setIsLogin] = useState(false); // State to track form mode

  // Toggle between Login and Register
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="">
      <FormCard
        inputData={isLogin ? loginDb : signUpDb}
        title={isLogin ? "WELCOME BACK" : "REGISTER!"}
        subtitle={isLogin ? "Don't have an account?" : "Already have an account?"}
        link={isLogin ? "register" : "login"}
        toPage={isLogin ? "Sign Up" : "Login"}
        isLoginBtn={isLogin}
        toggleForm={toggleForm}
      />
    </div>
  );
};

export default Register;
