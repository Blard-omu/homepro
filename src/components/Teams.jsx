import React from 'react'
import TeamCard from './cards/TeamCard'
import { teams } from './db/home'

const Teams = () => {
  return (
    <div className='container mx-auto space-y-9'>
        <div className="text-center">
            <h1 className='font-bold text-[40px]'>Meet The Team</h1>
            <p className='font-semibold text-lg'>Behind our success is a team of experienced, dedicated, and friendly professionals. Each team member brings a wealth of knowledge and a unique perspective to the table, ensuring that we can meet all your real estate needs. Get to know the people who make it all happen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {teams &&
          teams.length > 0 &&
          teams.map((team) => {
            return (
              <div key={team._id}>
                <TeamCard {...team} key={team._id}/>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Teams