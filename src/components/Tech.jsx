import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, tools } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="text-secondary text-center text-[15px] tracking-wide uppercase mb-6">
          Tools I Use
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {tools.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 bg-tertiary rounded-xl px-5 py-4 w-24"
            >
              <Icon className="text-white" size={32} />
              <span className="text-white-100 text-[12px] text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
