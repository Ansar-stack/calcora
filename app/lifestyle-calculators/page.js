import React from "react";
import { metadata } from "./metadata";
import WhyOurTools from "@/app/components/WhyOurTools";
import {MdHome, MdLightbulb, MdPhoneIphone, MdSpeed } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import LifeStyle from "./Components/LifeStyle";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
 const cardArray = [
  {
    icon: <MdHome className="text-blue-600 text-2xl" />,
    title: "Smart Lifestyle Planning",
    para: "Easily calculate expenses for trips, parties, weddings, and more.",
  },
  {
    icon: <MdSpeed className="text-green-600 text-2xl" />,
    title: "Quick & Convenient",
    para: "Get lifestyle cost estimates instantly without any hassle.",
  },
  {
    icon: <MdLightbulb className="text-yellow-500 text-2xl" />,
    title: "User-Friendly Interface",
    para: "Simple design lets you plan and manage costs easily.",
  },
  {
    icon: <MdPhoneIphone className="text-orange-500 text-2xl" />,
    title: "Mobile Optimized",
    para: "Use all lifestyle calculators smoothly on phones and tablets.",
  },
];
  return (
    <div className="flex flex-col items-center">
      <CatagoryHeroSection
        heading={`Lifestyle Calculators – Plan and Manage Daily Expenses`}
        para={`Our lifestyle calculators are designed to make your life easier by helping you estimate costs for weddings, parties, trips, and household expenses. These free tools give you accurate results in seconds so you can plan and manage your budget with confidence.
`}
          path={`life-styleCalculators`}
      />
      <WhyOurTools title={`Why Use Our Life Style Calculators?`} cardArr={cardArray}/>
      <LifeStyle />
      <ToolFAQs FAQs={FAQs} classes={`self-start mt-15 ms-5`}/>
    </div>
  );
};

export default page;
