"use client";
import React from "react";
import BlueBtn from "./blueBtn";
import { useRouter } from "next/navigation";
const ToolCard = ({ title, desc, path }) => {
  const router = useRouter();
  return (
    <div className="w-[18rem] group h-[200px] hover:translate-y-[-2px] hover:scale-[1.01] duration-300 hover:shadow-lg relative px-3 py-6 bg-white shadow-sm rounded-md flex flex-col  gap-2">
      <h2 className="font-semibold  text-[19px] whitespace-nowrap tracking-tight  text-blue-600">
        {title}
      </h2>
      <div className="w-full h-[80px]">
        <p className="tracking-tighter leading-5 text-[#555555] text-[16px]">{desc}</p>
      </div>
      <BlueBtn
        btnText={<a href={`${path}`}>Try Calculator</a>}
        classes="relative self-start"
      />
    </div>
  );
};

export default ToolCard;
