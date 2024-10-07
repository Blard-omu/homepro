import React from 'react'
import Jumbotron from '../components/cards/Jumbotron'
import OurStory from '../components/OurStory'
import OurValues from '../components/OurValues'
import AbHero from '../components/AbHero'
import WhoWe from '../components/WhoWe'
import Teams from '../components/Teams'

const About = () => {
  return (
    <div className='mt-20'>
      {/* <Jumbotron/> */}
      <AbHero/>
      <div className="space-y-12 lg:space-y-14 xl:space-y-[85px] px-2 md:px-4 lg:px-[75px] xl:px-[95px] 2xl:px-[114px]">
      <WhoWe/>
      <OurStory/>
      <OurValues/>
      <Teams/>
      </div>
    </div>
  )
}

export default About