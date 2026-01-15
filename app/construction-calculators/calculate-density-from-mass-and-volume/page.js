import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import DensityUi from "./components/DensityUi";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";

export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="Calculate Density from Mass and Volume Easily"
        para={`Need to find density fast? Our density calculator makes it super easy. Just enter the mass of your object and its volume. You'll get the density result in seconds. This mass and volume calculator is perfect for homework, science projects, or DIY work. No confusing math—just type and go.`}
      />
      <DensityUi />
      <HowToUse
        heading={`How to Calculate Density from Mass and Volume Easily`}
        para={`Here's how it works: Go to the calculator above. First, enter the object's mass (like grams or kilograms). Then, enter its volume (like cubic centimeters or liters). Hit the calculate button. That's it! You'll see the density right away. This online mass and volume calculator handles all the math for you. It's a great tool whether you're a student, teacher, or just curious about an object's density.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[95vw]`} />
    </div>
  );
};

export default page;