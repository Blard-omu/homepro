import React from 'react'
import Story from '../assets/images/Rectangle 2.png'
import Mission from '../assets/images/Rectangle 3.png'

const OurStory = () => {
  return (
    <div className=' container mx-auto space-y-12 lg:space-y-14 xl:space-y-[85px] '>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-14 lg:gap-20 lg:h-[401px] items-center">
            <div className="text-center lg:text-start">
                <h3 className='font-bold text-[40px]'>Our Story</h3>
                <p className='text-base font-semibold'>Our journey began with a simple goal: to transform the property buying and selling experience. Founded by a group of passionate real estate experts, our company has grown to become a trusted name in the industry. Over the years, we have expanded our services, embracing new technologies and market trends, while staying true to our core values. Today, we are proud to have helped thousands of families find their perfect home and countless investors make profitable decisions.</p>
            </div>
            <img src={Story} alt="" className='w-[500px] lg:w-[420px] xl:w-[500px] 2xl:w-[520px]'/>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-14 lg:gap-20 lg:h-[401px] items-center">
            <div className="text-center lg:text-start">
                <h3 className='font-bold text-[40px]'>Our Mission</h3>
                <p className='text-[18.5px] font-semibold'>Our mission is to connect people with their perfect properties. We believe in transparency, trust, and going the extra mile to ensure that every client finds a place they can truly call home. We strive to make the property buying process as straightforward and stress free as possible.</p>
            </div>
            <img src={Mission} alt="" className='w-[500px] lg:w-[420px] xl:w-[500px] 2xl:w-[520px]'/>
        </div>
    </div>
  )
}

export default OurStory