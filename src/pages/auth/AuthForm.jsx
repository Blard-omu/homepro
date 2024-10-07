// import React, { useState } from "react";
// import FormCard from "../../components/cards/FormCard";
// import { signUpDb, loginDb } from "../../components/db/authForm"; 

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(false); 

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="">
//       <FormCard
//         inputData={isLogin ? loginDb : signUpDb}
//         title={isLogin ? "WELCOME BACK" : "REGISTER!"}
//         subtitle={isLogin ? "Don't have an account?" : "Already have an account?"}
//         link={isLogin ? "register" : "login"}
//         toPage={isLogin ? "Sign Up" : "Login"}
//         isLoginBtn={isLogin}
//         toggleForm={toggleForm}
//       />
//     </div>
//   );
// };

// export default AuthForm;


import React, { useState } from "react";
import FormCard from "../../components/cards/FormCard";
import { signUpDb, loginDb } from "../../components/db/authForm";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  // Toggle between Login and Register
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle form submission
  const handleFormSubmit = async (formData) => {
    setLoading(true);
    try {
      if (isLogin) {
        const response = await login(formData.identifier, formData.password);
        if (response) {
          toast.success("Login successful! Redirecting...");
          navigate("/dashboard"); 
        }
      } else {
        const response = await signup(formData);
        if (response) {
          toast.success("Signup successful! Redirecting...");
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <ToastContainer />
      <FormCard
        inputData={isLogin ? loginDb : signUpDb}
        title={isLogin ? "WELCOME BACK" : "REGISTER!"}
        subtitle={isLogin ? "Don't have an account?" : "Already have an account?"}
        link={isLogin ? "register" : "login"}
        toPage={isLogin ? "Sign Up" : "Login"}
        isLoginBtn={isLogin}
        toggleForm={toggleForm}
        onSubmitForm={handleFormSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AuthForm;
