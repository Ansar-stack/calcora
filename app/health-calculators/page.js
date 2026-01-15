import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import WhyOurTools from "@/app/components/WhyOurTools";
import {MdFavorite, MdPhoneIphone, MdSecurity, MdSpeed } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import ExploreBtn from "@/app/components/ExploreBtn";
import Health from "./Components/Health";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
 const cardArray = [
  {
    icon: <MdFavorite className="text-red-500 text-2xl" />,
    title: "Accurate Health Metrics",
    para: "Calculate BMI, BMR, and heart rate zones with precise results.",
  },
  {
    icon: <MdSpeed className="text-green-600 text-2xl" />,
    title: "Quick & Easy",
    para: "Get your health results instantly without any complicated steps.",
  },
  {
    icon: <MdSecurity className="text-zinc-900 text-2xl" />,
    title: "Privacy You Can Trust",
    para: "Your personal health data stays private and is never stored.",
  },
  {
    icon: <MdPhoneIphone className="text-blue-500 text-2xl" />,
    title: "Fully Mobile Compatible",
    para: "Use any health calculator seamlessly on phones and tablets.",
  },
];

  return (
    <div className="flex flex-col items-center">
      <CatagoryHeroSection
        heading={`Health Calculators – Track Fitness and Wellness`}
        para={`Curious about your health numbers? Our collection of health calculators gives you clear answers. Check your BMI to see if your weight is healthy for your height. Calculate your BMR to know how many calories your body burns at rest. Figure out exactly how much water you should drink daily. Find your optimal heart rate zones for better workouts. Plus, calculate your exact age down to the day. These free, easy-to-use tools provide accurate results to help you understand your body better and support your fitness and wellness goals every day.`}
        path={`healthCalculators`}
      />
      <WhyOurTools title={`Why Use Our Health Calculators?`} cardArr={cardArray}/>
      <Health />
      <ToolFAQs FAQs={FAQs} classes={`self-start ps-5 mt-15`}/>
    </div>
  );
};

export default page;