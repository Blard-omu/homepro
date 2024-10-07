import React from 'react'

const ComponentWrapper = ({children}) => {
  return (
    <div className='2xl:container w-[96%] lg:w-[85%] mx-auto'>
        {children}
    </div>
  )
}

export default ComponentWrapper