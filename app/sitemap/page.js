import React from "react";
import { metadata } from "./metadata";
import Sitemap from "./components/Sitemap";
import { CardData } from "@/app/CardData";
export { metadata };
const page = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col items-center mt-10 mb-20">
      <div className="w-[90vw] md:w-[50vw]  h-full">
        <h1 className="heading mb-10">Calcora Sitemap</h1>
        {CardData.map((element, index)=>{
          return <Sitemap key={index} arr={element.tools} heading={element.catagory}/>
        })}
      </div>
    </div>
  );
};

export default page;
