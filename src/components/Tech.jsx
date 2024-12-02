import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { technologies } from '../constant'
const Tech = () => {
  return (
   <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((tech)=>(
      <div className='w-28 h-28 flex flex-col justify-center' key={tech.name}>
        <BallCanvas icon={tech.icon} name={tech.name} />
        <p className=' text-center'>{tech.name}</p>
        </div>
    ))}
   </div>
  )
}

export default SectionWrapper(Tech,"")