import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const glowColors = ["#a2e9ff", "#66e0b6", "#a2e9ff", "#66e0b6", "#a2e9ff"];

const ServiceCard = ({ index, title, description, icon }) => {
  const glow = glowColors[index % glowColors.length];

  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        whileHover={{ y: -6 }}
        style={{ border: `1px solid ${glow}`, boxShadow: `0 0 15px 0 ${glow}55` }}
        className="w-full h-full rounded-[16px] sm:rounded-[24px] transition-shadow duration-300"
      >
        <div className="bg-tertiary rounded-[15px] sm:rounded-[23px] py-4 px-2 sm:py-8 sm:px-6 h-full min-h-[180px] sm:min-h-[260px] flex flex-col items-center justify-end text-center gap-2 sm:gap-4">
          <div
            className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#915eff]/15 flex items-center justify-center"
            style={{ border: `1px solid ${glow}88` }}
          >
            <img src={icon} alt={title} className="w-4 h-4 sm:w-7 sm:h-7 object-contain" />
          </div>
          <h3 className="text-white text-[11px] sm:text-[18px] font-bold leading-tight">{title}</h3>
          <p className="hidden sm:block text-secondary text-[13px] leading-[20px]">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

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

      <div className="mt-20 grid grid-cols-5 gap-2 sm:gap-5 md:gap-7">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
