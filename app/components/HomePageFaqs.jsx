"use client";
import React, { useState } from "react";

const HomePageFaqs = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`py-2 px-3  transition-all 
        duration-500 ease-in-out relative bg-white shadow-sm w-full rounded-md flex
         flex-col gap-2`}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center"
      >
        <h3 className="cursor-pointer text-md">{question}</h3>
        <li
          className={`list-none cursor-pointer font-light ${isOpen?`rotate-45`:`rotate-0`} text-md md:text-2xl`}
        >
          +
        </li>
      </div>
      <div className={`${isOpen?`flex`:`hidden`}`}>
        <p className="text-[#555555] ">{answer}</p>
      </div>
    </div>
  );
};

export default HomePageFaqs;
