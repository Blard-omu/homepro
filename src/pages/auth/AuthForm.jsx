import React, { useState } from "react";
import FormCard from "../../components/cards/FormCard";
import { signUpDb, loginDb } from "../../components/db/authForm";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useModal } from "../../contexts/ModalContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const { closeModal } = useModal();

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
        console.log(response);
        
        if (response.success) {
          toast.success("Login successful! Redirecting...");
          navigate("/"); 
          closeModal(); 

        }
      } else {
        const response = await signup(formData);
        if (response) {
          toast.success("Signup successful! Redirecting...");
          toggleForm();
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
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
        onSubmitForm={handleFormSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AuthForm;
