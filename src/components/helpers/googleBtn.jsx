import React from 'react'
import icon from "../../assets/icons/google.png"

const GoogleBtn = ({isLogin=true}) => {
  return (
    <div>
        <div className=" w-full flex justify-between items-center">
            <div className="w-2/5 border-b border-dark"></div>
            <span className='font-semibold'>Or</span>
            <div className="w-2/5 border-b border-slate-400"></div>
        </div>
        <div className="py-4">
            
              <button className="w-full flex justify-center items-center text-dark py-3 hover:bg-secondary  hover:text-primary hover:border-primary  rounded-2xl border border-slate-400">
              <img src={icon} alt="google-icon"  className='w-6 h-6 mr-2'/>
                {isLogin ? "Continue with google" : "sign up with google"}
              </button>
            </div>
    </div>
  )
}

export default GoogleBtn