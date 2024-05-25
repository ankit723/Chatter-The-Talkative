import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { div, exp } from 'three/examples/jsm/nodes/Nodes.js';

const ExperienceCard=({experience})=>{
  return(
    <VerticalTimelineElement
      contentStyle={{background:"#1d1836", color:"#fff"}}
      contentArrowStyle={{borderRight:"7px solid #232631"}}
      date={experience.date}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt="" className='w-[60%] h-[60%] object-contain'/>
        </div>
      }
    >
      <div className="">
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold'>{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index)=>(
          <li 
            key={index}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What have I done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((exp, index)=>(
          <ExperienceCard key={index} experience={exp} />
        ))}
      </VerticalTimeline>
    </div>
    </>
    
  )
}

export default SectionWrapper(Experience, 'work')