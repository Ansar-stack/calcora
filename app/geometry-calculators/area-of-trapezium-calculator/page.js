import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import AreaOfTrapeziumUI from "./components/AreaOfTrapeziumUI";
import HowToUse from "@/app/components/HowToUse";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Trapezium Area Calculator - Solve Trapezoid Area Quickly`}
        para={`Need to find the area of a trapezium for your geometry homework or a project? Our area of trapezium calculator makes it easy. Just measure and enter the lengths of the two parallel sides (the bases) and the perpendicular height between them. In seconds, you'll have the exact area. This trapezium area calculator works for any trapezoid shape, giving you accurate results instantly. Perfect for students, teachers, and anyone solving real-world geometry problems.`}
      />
      <AreaOfTrapeziumUI />
      <HowToUse heading={`How to Use the Area of Trapezium Calculator Easily`} para={`Using the area of trapezium calculator is simple and straightforward. First, identify the two parallel sides of your trapezium (these are called the bases). Measure their lengths. Next, measure the perpendicular height—this is the straight-line distance between the two parallel sides, not the length of the slanted side. Enter these three numbers into the calculator: base 1, base 2, and height. Then click calculate. Within moments, you’ll get the accurate area of the trapezium. This tool works seamlessly as a versatile trapezium area calculator, a trapezoid calculator for general use, or a trapezium area finder for quick measurements. It makes solving geometry problems quick and easy without any confusion or manual formula work. It’s perfect for students checking homework, teachers preparing lessons, or anyone needing a fast and reliable rea of trapezium math solver for DIY or professional projects.`}/>
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  );
};

export default page;