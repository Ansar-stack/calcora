"use client";
import React, { useEffect } from "react";

const ToolsHero = ({ heading, para, headingClasses }) => {
  return (
    <div className="flex  md:w-[50vw] w-[95vw] flex-col gap-3 mt-5 md:mt-10">
      <h1 className={`heading ${headingClasses}`}>
        {heading} 
      </h1>
      <p className="px-1 text-last text-justify ParaFontSize text-[#555555] tracking-tight max-w-3xl">
        {para}
      </p>
    </div>
  );
};

export default ToolsHero;