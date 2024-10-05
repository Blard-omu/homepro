// /* eslint-disable react/prop-types */
// import React from "react";
// import { Link } from "react-router-dom";
// import GoogleBtn from "../resusables/googleBtn";

// const FormCard = ({
//   inputData,
//   title,
//   subtitle,
//   link,
//   toPage,
//   isLoginBtn = true,
// }) => {
  
//   return (
//     <div className="">
//       <h1 className="text-center font-bold text-3xl lg:text-5xl text-dark">{title}</h1>
//       <p className="text-center text-dark">
//         {subtitle}
//         <Link to={`/${link}`} className="text-primary font-semibold pl-2">
//           {toPage}
//         </Link>
//       </p>
//       <form>
//         {inputData?.map((data) => {
//             return (
//               <div className="mt-4" key={data._id}>
//               <label className="text-slate-400">{data.label}<sup className="text-primary font-semibold text-lg">*</sup>
//               </label>
//               <input
//                 type={data.type}
//                 placeholder={data.placeholderText}
//                 className="w-full text-slate-600 placeholder:text-slate-500 bg-slate-200 p-3 rounded-xl border outline-none mt-2 focus:border-primary"
//               />
//             </div>
//             )
//           })}
//         {isLoginBtn && (
//           <div className="w-full flex justify-between pt-4">
//             <div className=" flex items-center">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 accent-dark -slate-200 mr-2"
//               />
//               <span className="font-semibold text-sm md:text-lg">
//                 Remember me
//               </span>
//             </div>
//             <Link className="text-dark underline font-semibold hover:text-primary text-sm md:text-lg">
//               Forgot password?
//             </Link>
//           </div>
//         )}

//         <div className="py-4">
//           <button className="w-full text-secondary bg-primary py-3 font-medium hover:bg-secondary hover:text-primary hover:border-primary  rounded-full border text-xl">
//             {isLoginBtn ? "Login" : "Sign Up"}
//           </button>
//         </div>
//         {<GoogleBtn isLogin={isLoginBtn} />}
//       </form>
//     </div>
//   );
// };

// export default FormCard;

/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "../resusables/googleBtn";

const FormCard = ({
  inputData,
  title,
  subtitle,
  link,
  toPage,
  isLoginBtn = true,
  toggleForm, // Added toggleForm prop
}) => {

  return (
    <div className="">
      <h1 className="text-center font-bold text-3xl lg:text-5xl text-dark">{title}</h1>
      <p className="text-center text-dark">
        {subtitle}
        {/* Modified to use onClick for toggling form */}
        <span onClick={toggleForm} className="text-primary font-semibold pl-2 cursor-pointer">
          {toPage}
        </span>
      </p>
      <form>
        {inputData?.map((data) => {
            return (
              <div className="mt-4" key={data._id}>
              <label className="text-slate-400">{data.label}<sup className="text-primary font-semibold text-lg">*</sup>
              </label>
              <input
                type={data.type}
                placeholder={data.placeholderText}
                className="w-full text-slate-600 placeholder:text-slate-500 bg-slate-200 p-3 rounded-xl border outline-none mt-2 focus:border-primary"
              />
            </div>
            )
          })}
        {isLoginBtn && (
          <div className="w-full flex justify-between pt-4">
            <div className=" flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 accent-dark -slate-200 mr-2"
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
          <button className="w-full text-secondary bg-primary py-3 font-medium hover:bg-secondary hover:text-primary hover:border-primary  rounded-full border text-xl">
            {isLoginBtn ? "Login" : "Sign Up"}
          </button>
        </div>
        {<GoogleBtn isLogin={isLoginBtn} />}
      </form>
    </div>
  );
};

export default FormCard;
