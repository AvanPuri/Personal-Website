import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import {styles} from '../styles';



const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h1 className={styles.sectionHeadText}>Overview</h1>
      
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
    I am a second-year Bachelor of Technology student at McMaster University, 
    specializing in Automation Engineering Technology. I am eager to learn 
    and grow in the field of engineering, I am currently building a strong 
    foundation in C++, JavaScript, HTML and CSS and am planning to expand 
    my skills to include frameworks like React, Node.js, and Three.js. I am 
    passionate about contributing to the engineering and business industry and 
    am actively seeking opportunities to further my knowledge and expertise in 
    this field. Outside of academics, I have a keen interest in sports, particularly 
    basketball and football, and I am also passionate about investing. In my free time, 
    I enjoy walking my dog and being in the outdoors.
    
   </motion.p>
    </>
  )
}

export default SectionWrapper (About, "about")