import React from "react";
import { metadata } from "./metadata";
import Geometry from "./Components/Geometry";
import WhyOurTools from "@/app/components/WhyOurTools";
import { MdLightbulb, MdPhoneIphone, MdSpeed, MdSquareFoot } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
const cardArray = [
  {
    icon: <MdSquareFoot className="text-blue-600 text-2xl" />,
    title: "Accurate Geometry Calculations",
    para: "Compute areas, perimeters, midpoints, and more with precision.",
  },
  {
    icon: <MdSpeed className="text-green-600 text-2xl" />,
    title: "Quick & Efficient",
    para: "Get complex geometric results instantly without any delays.",
  },
  {
    icon: <MdLightbulb className="text-yellow-500 text-2xl" />,
    title: "User-Friendly Interface",
    para: "Simple design makes solving geometry problems fast and easy.",
  },
  {
    icon: <MdPhoneIphone className="text-orange-500 text-2xl" />,
    title: "Mobile Optimized",
    para: "Use all geometry calculators smoothly on any phone or tablet.",
  },
];
  return (
    <div className="flex flex-col items-center">
      <CatagoryHeroSection
        heading={`Geometry Calculators – Solve Shapes with Ease`}
        para={`Stuck on a geometry problem? Our collection of calculators is here to help. Need to find the area of a circle or trapezium? Calculate the perimeter? Find the midpoint of a line segment or the hypotenuse of a right triangle? We have tools for all of that and more. Whether you're a student tackling homework, a teacher preparing lessons, or someone working on a DIY project, these free tools provide quick, accurate, and understandable solutions for all kinds of shapes and geometric challenges.`}
        path={`geometryCalculator`}
      />
      <WhyOurTools title={`Why Use Our Geometry Calculators?`} cardArr={cardArray}/>
      <Geometry />
       <ToolFAQs FAQs={FAQs} classes={`self-start mt-15 ms-5`}/>
    </div>
  );
};

export default page;