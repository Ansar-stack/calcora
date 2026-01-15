import React from "react";
import { metadata } from "./metadata";
import WhyOurTools from "@/app/components/WhyOurTools";
import {  MdApps, MdLightbulb, MdPhoneIphone, MdSpeed } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import GeneralUi from "./components/GeneralUi";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
 const cardArray = [
  {
    icon: <MdApps className="text-blue-600 text-2xl" />,
    title: "Versatile Calculators",
    para: "From twin flame connections to fuel cost and restaurant bills, solve a variety of everyday problems.",
  },
  {
    icon: <MdSpeed className="text-green-600 text-2xl" />,
    title: "Fast & Reliable",
    para: "Get instant results for all general-purpose calculations easily.",
  },
  {
    icon: <MdLightbulb className="text-yellow-500 text-2xl" />,
    title: "Easy to Use",
    para: "User-friendly design makes all calculations straightforward and simple.",
  },
  {
    icon: <MdPhoneIphone className="text-orange-500 text-2xl" />,
    title: "Mobile Optimized",
    para: "Access all general calculators smoothly on any device or screen size.",
  },
];

  return (
    <div className="flex flex-col items-center">
      <CatagoryHeroSection
        heading={`General Calculators – Easy Tools for Everyday Life`}
        para={`Our general calculators provide fast and accurate solutions for common daily calculations. Whether you need to split a restaurant bill, estimate fuel costs for a road trip, calculate crypto returns, or explore twin flame connections, these free tools make life easier with precise results in seconds. Perfect for personal use and quick decision-making.`}
        path={`generalCalculators`}
      />
      <WhyOurTools title={`Why Use Our General Calculators?`} cardArr={cardArray}/>
      <GeneralUi />
      <div className="self-start mt-20 ms-5">
      <ToolFAQs FAQs={FAQs}/>
      </div>
    </div>
  );
};

export default page;