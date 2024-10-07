import React from 'react'
import '../css/index.css'

const AbHero = () => {
  return (
    <div className='about h-[578px] flex flex-col justify-center items-center '>
        <div className="space-y-5">
            <h1 className='font-bold text-[40px] text-white text-center'>About Homepro</h1>
            <div className="flex flex-col lg:flex-row  gap-[38px] ">
                <div className="flex items-center gap-4">
                    <span className='w-4 h-4 bg-[#F8F3DD] rounded-full'></span>
                    <p className='font-semibold text-lg md:text-2xl lg:text-lg text-white'>5,000+ homes sold</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className='w-4 h-4 bg-[#F8F3DD] rounded-full'></span>
                    <p className='font-semibold text-lg md:text-2xl lg:text-lg text-white'>800 billion naira in sales</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className='w-4 h-4 bg-[#F8F3DD] rounded-full'></span>
                    <p className='font-semibold text-lg md:text-2xl lg:text-lg text-white'>4,500+ satisfied customers</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AbHero