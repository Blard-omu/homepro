import React from 'react';
import ComponentWrapper from '../resusables/ComponentWrapper';
import { howitworksDb } from '../db/home/index';

const Howitworks = () => {
  return (
    <ComponentWrapper>
        <div>
            <h1 className='text-3xl text-center lg:text-start md:text-4xl font-bold py-8'>How It Works</h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl-gap-8  items-center lg:justify-between ">
        {howitworksDb && howitworksDb.map((item, index)=>{
            return (
                <div className='text-center lg:text-start' key={index}>
                    <div className='flex justify-center lg:block mt-2 md:mt-0'>
                        <img src={item.icon} alt="icon1" className='' />
                    </div>
                    <div className='py-4'>
                        <h2 className='text-2xl font-semibold'>{item.title}</h2>
                        <p className='text-sm'>{item.description}</p>
                    </div>
                </div>
            )
        })}
        </div>
    </ComponentWrapper>
  )
}
export default Howitworks