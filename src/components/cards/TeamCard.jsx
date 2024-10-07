import React from 'react'
import Team from '../../assets/images/Frame 138.png'

const TeamCard = ({ _id, name, image, role}) => {
  return (
  
        <div className='relative flex justify-center' key={_id}>
        <img src={image} alt="" className='h-full rounded-[20px] object-fit'/>
        <div className="absolute bottom-5 text-white text-center">
            <h3 className='font-semibold text-[28px]'>{name}</h3>
            <p className='font-bold text-lg'>{role}</p>
        </div>
        </div>
   
  )
}

export default TeamCard