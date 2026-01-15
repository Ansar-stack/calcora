"use client";
import React from "react";
import Link from "next/link";

const Card = ({ catagory, tools, id }) => {
  return (
    <div
      id={id}
      className="bg-white border catCard border-gray-100 p-5 rounded-2xl shadow-md shadow-blue-100 flex flex-col w-[18rem] hover:translate-y-[-5px] hover:scale-[1.03] transition-all duration-150 hover:shadow-2xl ease"
    >
      <h2 className="text-lg font-semibold tracking-tight text-[#2563eb]">
        {catagory}
      </h2>
      <div className="flex mt-2.5 flex-col gap-3 shrink-0 w-full">
        {tools.map((elem, index) => (
          <div
            key={index}
            role="button"
            className="bg-[#e0f2fe] hover:bg-[#2563eb] active:scale-95 hover:text-white text-[#2563eb] px-5 py-2 font-medium text-[0.95rem] rounded-full cursor-pointer shadow-md select-none transition-all duration-300 hover:scale-[1.02] ease shrink-0 whitespace-nowrap"
          >
            <Link href={elem.path}>{elem.toolName}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;