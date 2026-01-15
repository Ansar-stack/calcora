import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import WhyOurTools from "@/app/components/WhyOurTools";
import { MdCalculate, MdLightbulb, MdPhoneIphone, MdSpeed } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import ExploreBtn from "@/app/components/ExploreBtn";
import Math from "./Components/Math";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
const cardArray = [
  {
    icon: <MdCalculate className="text-blue-600 text-2xl" />,
    title: "Precise Math Solutions",
    para: "Get accurate results for any math problem, from basic arithmetic to advanced calculations. Our math calculators deliver reliable answers for percentages, equations, roots, and more.",
  },
  {
    icon: <MdSpeed className="text-green-600 text-2xl" />,
    title: "Fast & Efficient",
    para: "Solve complex calculations instantly without manual work. Our tools process your inputs quickly, saving valuable time on homework, work projects, or daily tasks.",
  },
  {
    icon: <MdLightbulb className="text-yellow-500 text-2xl" />,
    title: "Easy to Use",
    para: "Simple interface designed for all skill levels. Whether you're a student or professional, our calculators make even the most advanced math straightforward.",
  },
  {
    icon: <MdPhoneIphone className="text-orange-500 text-2xl" />,
    title: "Mobile Friendly",
    para: "Access all math calculators conveniently on any device. Perfect for on-the-go calculations whether you're in class, at work, or anywhere else.",
  },
];
  return (
    <div className="flex flex-col items-center">
      <CatagoryHeroSection
        heading={`Math Calculators – Quick and Accurate Solutions for Every Problem`}
        para={`Need reliable math solutions? Our comprehensive collection of math calculators provides instant answers for percentages, equations, square roots, prime numbers, and much more. Designed with students, teachers, professionals, and everyday users in mind, these tools deliver precise results that help simplify complex mathematical challenges. Whether you're checking homework, preparing for exams, or solving real-world problems, our calculators ensure accuracy and save valuable time on manual calculations.`}
        path={`mathCalculators`}
      />
      <WhyOurTools title={`Why Use Our Math Calculators?`} cardArr={cardArray}/>
      <Math />
      <div className="self-start ms-5 mt-20">
      <ToolFAQs FAQs={FAQs}/>
      </div>
    </div>
  );
};

export default page;