import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard=({title, index, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full" options={{
      max:45,
      scale:1.1,
      speed:450
    }}>
      <motion.div
        variants={fadeIn("right", 'spring', 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

          </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Inroduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary tex-[17px] max-w-3xl leading-[30px]'>
      I'm chatter, An AI Chatbot which is not a Large Language Model rather it is something which chats specific to your needs, In simple words I'm some thing where you can choose your need from several pre-trained topics or even can createand train my model on your own custom data set according to your personal needs where I self-rectify after each session of chat and re-train my model
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")