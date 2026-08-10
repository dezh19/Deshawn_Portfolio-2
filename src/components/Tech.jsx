import React, { lazy, Suspense, useRef } from "react";
import { useInView } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies, tools } from "../constants";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const TechBall = ({ icon }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div className="w-28 h-28" ref={ref}>
      {inView && (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="canvas-loader" />
            </div>
          }
        >
          <BallCanvas icon={icon} />
        </Suspense>
      )}
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <TechBall key={technology.name} icon={technology.icon} />
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
