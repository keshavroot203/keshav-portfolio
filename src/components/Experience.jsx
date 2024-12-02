import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement,VerticleTinelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constant'
import { SectionWrapper } from './hoc'
import { textVariant } from '../motion'
const ExperienceCard =({exp})=>{
 return  <VerticalTimelineElement 
contentStyle={{background:'#1d1836',color:'#fff'}}
contentArrowStyle={{borderRight:'7px solid #232631'}}
date={exp.date}
 iconStyle={{background:exp.iconBg}}
// icon={
//   <div className='flex justify-center items-center w-full h-full'>
//     <img src={exp.icon}  
//     alt={exp.company_name}
//     className='w-[60%] h-[60%] object-contain'
//     />
//   </div>
  
// }
>
  <div>
   <h3 className='text-white text-[24px] font-bold'>
     {exp.title}
   </h3>
   <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>
    {exp.company_name}
   </p>
  </div>
  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {exp.points.map((point,index)=>(
      <li>
        {point}
      </li>
    ))}
  </ul>


</VerticalTimelineElement>
}
const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done</p>
    <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((exp,index)=>(
          <ExperienceCard key={index} exp={exp} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')