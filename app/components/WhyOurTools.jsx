"use client";
import React from "react";

const WhyOurTools = ({ title, cardArr = [] }) => {
  return (
    <div className="mt-20 px-5 w-full flex flex-col items-center">
      <h2 className="border-b-[2.5px] border-blue-700 self-start text-[5vw] md:text-[3vw] font-semibold tracking-tighter text-blue-700">
        {title}
      </h2>
      <div className="mt-8 grid gap-y-10 gap-x-0 place-items-center sm:gap-x-[10vw] grid-cols-1 sm:grid-cols-2 md:max-w-[70vw] lg:max-w-[50vw]">
        {cardArr.map((elem, index) => (
          <div
            key={index}
            className="w-[18rem] whyNotCard flex flex-col items-center justify-center group hover:scale-[1.03] hover:translate-y-[-5px] hover:shadow-lg ease duration-200 p-3 h-[180px] border rounded-md border-gray-200 bg-white shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#f5f9ff] flex items-center justify-center">
              {elem.icon}
            </div>
            <h6 className="font-semibold mt-2 text-center text-lg">
              {elem.title}
            </h6>
            <p className="text-sm text-center mt-1 text-zinc-700">
              {elem.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOurTools;