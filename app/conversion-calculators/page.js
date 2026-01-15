import React from "react";
import { metadata } from "./metadata";
import WhyOurTools from "@/app/components/WhyOurTools";
import {MdLightbulb, MdPhoneIphone, MdSpeed, MdSwapHoriz } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import ExploreBtn from "@/app/components/ExploreBtn";
import Math from "./Components/Conversion";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
  const cardArray = [
    {
      icon: <MdSwapHoriz className="text-blue-600 text-2xl" />,
      title: "Accurate Conversions",
      para: "Convert numbers between binary, decimal, and hexadecimal instantly.",
    },
    {
      icon: <MdSpeed className="text-green-600 text-2xl" />,
      title: "Fast & Reliable",
      para: "Get precise conversion results in seconds with no delays.",
    },
    {
      icon: <MdLightbulb className="text-yellow-500 text-2xl" />,
      title: "Easy to Use",
      para: "Simple interface makes complex conversions effortless.",
    },
    {
      icon: <MdPhoneIphone className="text-orange-500 text-2xl" />,
      title: "Mobile-Friendly Design",
      para: "Access all conversion calculators conveniently on any device.",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <CatagoryHeroSection
        heading={`Conversion Calculators – Fast Number Base Conversions`}
        para={`Need to switch between number systems? Our conversion calculators make it easy. Whether you're a computer science student working on binary homework, a programmer debugging hex values, or an engineer dealing with different number bases, these tools help you convert between binary, decimal, and hexadecimal quickly and accurately. Just pick the conversion you need, enter your number, and get the result instantly—no complex math required. Perfect for learning, coding, or any technical work.`}
        path={`conversionCalculator`}
      />

      <WhyOurTools
        title={`Why Use Our Conversion Calculators?`}
        cardArr={cardArray}
      />
      <Math />
      <ToolFAQs FAQs={FAQs} classes={`self-start mt-15 ms-5`} />
    </div>
  );
};

export default page;