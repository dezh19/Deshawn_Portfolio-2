import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, description, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -6 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(145,94,255,0.35)]"
    >
      <div className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[220px] flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#915eff]/15 border border-[#915eff]/40 flex items-center justify-center">
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        </div>
        <h3 className="text-white text-[17px] font-bold">{title}</h3>
        <p className="text-secondary text-[13px] leading-[20px]">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate full-stack developer based in Linden, Guyana, with a diverse
        skill set in problem-solving. I thrive on creating impactful solutions that make
        a meaningful difference in society, and I enjoy learning new languages, design
        concepts, and frameworks along the way. I'm fluent in JavaScript, TypeScript, and
        C++, and I build with Node.js and modern libraries and frameworks like React.js
        and Next.js — alongside hands-on experience in network systems and IT support.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
