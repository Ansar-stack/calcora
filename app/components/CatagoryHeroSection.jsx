"use client";
import React from "react";
import ExploreBtn from "./ExploreBtn";

const CatagoryHeroSection = ({heading, para, headingClasses, path} ) => {
  return (
    <div className="w-full px-5 sm:px-8 md:px-10 flex flex-col items-center justify-center gap-3 md:gap-6 mt-14">
      <h1 className={`text-[#2563eb] max-w-[800px] break-words HeadingFontSize font-bold text-center leading-tight ${headingClasses}`}>
        {heading}
      </h1>

      <p className="ParaFontSize text-justify  text-last text-[#555555] font-normal tracking-tight max-w-3xl">
        {para}
      </p>
      <ExploreBtn btnText={`Explore Calulators`} path={`#${path}`}/>
    </div>
  );
};

export default CatagoryHeroSection;

