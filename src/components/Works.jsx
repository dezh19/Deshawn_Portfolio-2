import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../constants";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ReadmeModal from "./ReadmeModal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  is_private,
  readme,
}) => {
  const [readmeOpen, setReadmeOpen] = useState(false);
  const showReadme = is_private && readme;
  const openSource = () =>
    showReadme ? setReadmeOpen(true) : window.open(source_code_link, "_blank");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            onClick={live_demo_link ? () => window.open(live_demo_link, "_blank") : undefined}
            className={`w-full h-full object-cover rounded-2xl ${live_demo_link ? "cursor-pointer" : ""}`}
          />

          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Live demo"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                </svg>
              </div>
            )}
            {source_code_link && (
            <div
              onClick={openSource}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title={showReadme ? "View README (private repo)" : "Source code"}
            >
              <img
                src={github}
                alt={showReadme ? "view README" : "source code"}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            )}
          </div>

          {is_private && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/70 text-white text-[11px] font-medium tracking-wide">
              Private
            </span>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color} ${showReadme ? "cursor-pointer hover:opacity-80" : ""}`}
              onClick={showReadme ? () => setReadmeOpen(true) : undefined}
              title={showReadme ? "View README" : undefined}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {showReadme && (
          <button
            onClick={() => setReadmeOpen(true)}
            className="mt-4 text-[13px] text-secondary hover:text-white underline underline-offset-4"
          >
            Private repo — read the README
          </button>
        )}
      </Tilt>

      {showReadme && (
        <ReadmeModal
          open={readmeOpen}
          onClose={() => setReadmeOpen(false)}
          title={name}
          readme={readme}
        />
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A few recent projects that reflect my work across frontend, backend, and design —
          click the icons to view source or a live demo. Private projects open their README instead.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
