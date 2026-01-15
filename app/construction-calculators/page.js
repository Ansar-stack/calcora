import React from "react";
import { metadata } from "./metadata";
import WhyOurTools from "@/app/components/WhyOurTools";
import { MdConstruction, MdLightbulb, MdPhoneIphone, MdSpeed } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import ContructionUi from "./components/ContructionUi";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
 const cardArray = [
  {
    icon: <MdConstruction className="text-orange-600 text-2xl" />,
    title: "Precise Construction Calculations",
    para: "Calculate bricks, concrete, tiles, and road materials accurately.",
  },
  {
    icon: <MdSpeed className="text-green-600 text-2xl" />,
    title: "Fast & Efficient",
    para: "Get construction estimates instantly with zero delays.",
  },
  {
    icon: <MdLightbulb className="text-yellow-500 text-2xl" />,
    title: "Easy to Use",
    para: "Simple interface makes planning construction projects effortless.",
  },
  {
    icon: <MdPhoneIphone className="text-blue-500 text-2xl" />,
    title: "Mobile Optimized",
    para: "Use all construction calculators smoothly on phones and tablets.",
  },
];
  return (
    <div className="flex flex-col items-center">
      <CatagoryHeroSection
        heading={`Construction Calculators – Plan and Estimate Building Projects`}
        para={`Got a building project in mind? Whether you're a professional contractor or a weekend DIYer, our construction calculators make planning simple. Need to know how many bricks for that garden wall? Our brick calculator gives you the number. Pouring a concrete slab? The concrete volume calculator tells you exactly how much mix to order. Planning a driveway? The road construction cost calculator helps you budget. Plus, we've got tools for tiles and paint too. These free tools help you get accurate estimates so you can buy the right amount of materials, avoid waste, and stay on budget.`}
        path={`constructionsCalcualtor`}
      />
      <WhyOurTools title={`Why Use Our Construction Calculators?`} cardArr={cardArray}/>
      <ContructionUi />
      <ToolFAQs FAQs={FAQs} classes={`self-start mt-15 ms-5`} />
    </div>
  );
};

export default page;