import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constant";
import { fadeIn, textVariant } from "../motion";
import { SectionWrapper } from "./hoc";

const ServiceCard = ({ i, title, icon }) => {
  return (
    // <p>{title}</p>
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * i, 0.75)}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col px-12 py-5"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center font-bold text-white text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17 px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I m a skilled Software Engineer with 3 years of experience in javascript
        and expertise in frameworks like React, React Native.I m a quick learner
        and collaborate closely with clients to create efficient,scalable and
        user-friendly solutions that solve real world problems.Lets work
        together to bring your ideas to life !
      </motion.p>
      {/* <div className='mt-20 flex flex-wrap gap-10'>
{services.map((service,i)=>(
  <ServiceCard key={i}  {...service} />
))}
   </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
