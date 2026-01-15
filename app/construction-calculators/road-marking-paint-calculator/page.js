import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";
import Marking from "./components/Marking";

export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="Calculate Paint Needed with Our Road Marking Paint Calculator"
        para={`Planning a road marking project and need to know how much paint to buy? Our road marking paint calculator takes the guesswork out of estimating. Simply enter the total length of lines you need to paint and the width of each line. The calculator does the rest, giving you a reliable estimate of paint volume required. It works perfectly as a line marking calculator for parking lots, streets, or highways, helping you budget accurately and avoid last-minute shortages or expensive extra purchases.`}
      />
      <Marking />
      <HowToUse heading={`How to Use the Road Marking Paint Calculator for Accurate Results`} para={`Using our calculator is quick and easy. Start by measuring the total length of all the lines you plan to paint—this could be center lines, edge lines, or parking stalls. Enter this total length into the first field. Next, select or enter the standard width of your lines (common widths are 4 inches or 100mm). Then, choose the type of paint you'll be using, as different paints have different coverage rates per gallon or liter. Once you input these details, click calculate. The tool instantly works as a road line paint estimator, showing you the total paint volume needed. It functions like a comprehensive road paint usage calculator, helping you plan your material purchase efficiently. You can adjust the numbers for different sections, making it also act as a precise street marking paint calculator or road striping paint calculator for complex projects. This process ensures you get accurate results every time, saving you both time and money on your marking project.`}/>
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[95vw]`} />
    </div>
  );
};

export default page;