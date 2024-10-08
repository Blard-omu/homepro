import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "../helpers/googleBtn";

const FormCard = ({
  inputData,
  title,
  subtitle,
  toPage,
  isLoginBtn = true,
  toggleForm,
  onSubmitForm, 
  loading,
}) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e, name) => {
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      onSubmitForm(formValues);
    }
    console.log(formValues);
  };

  return (
    <div className="">
      <h1 className="text-center font-bold text-3xl lg:text-5xl text-dark">{title}</h1>
      <p className="text-center text-dark">
        {subtitle}
        <span onClick={toggleForm} className="text-primary font-semibold pl-2 cursor-pointer">
          {toPage}
        </span>
      </p>
      <form onSubmit={handleSubmit}>
        {inputData?.map((data) => (
          <div className="mt-4" key={data._id}>
            <label className="text-slate-400">
              {data.label}
              <sup className="text-primary font-semibold text-lg">*</sup>
            </label>
            <input
              type={data.type}
              name={data.name}
              placeholder={data.placeholderText}
              value={formValues[data.name] || ""}
              onChange={(e) => handleInputChange(e, data.name)}
              className="w-full text-slate-600 placeholder:text-slate-500 bg-slate-200 p-3 rounded-xl border outline-none mt-2 focus:border-primary"
              disabled={loading}
            />
          </div>
        ))}
        {isLoginBtn && (
          <div className="w-full flex justify-between pt-4">
            <div className=" flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 accent-dark -slate-200 mr-2"
                disabled={loading}
              />
              <span className="font-semibold text-sm md:text-lg">
                Remember me
              </span>
            </div>
            <Link className="text-dark underline font-semibold hover:text-primary text-sm md:text-lg">
              Forgot password?
            </Link>
          </div>
        )}

        <div className="py-4">
          <button
            type="submit"
            className="w-full text-secondary bg-primary py-3 font-medium hover:bg-secondary hover:text-primary hover:border-primary rounded-full border text-xl"
            disabled={loading}
          >
            {loading ? "Loading..." : isLoginBtn ? "Login" : "Sign Up"}
          </button>
        </div>
        <GoogleBtn isLogin={isLoginBtn} />
      </form>
    </div>
  );
};

export default FormCard;
