import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";
import WaterIntakeUi from "./components/WaterIntakeUi";
export { metadata };
const page = () => {
  
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="Water Intake Calculator – Find Your Perfect Daily Hydration"
        para={`Not sure how much water you should be drinking each day? Our water intake calculator gives you a personalized recommendation based on your body and lifestyle. Just enter your weight, age, activity level, and climate conditions to get your ideal daily water consumption. This easy-to-use hydration calculator helps you stay properly hydrated for better health, energy, and overall wellness.`}
      />
      <WaterIntakeUi />
      <HowToUse 
      heading={`How to Use the Water Intake Calculator`}
      para={`Using our water intake calculator is simple and personalized. Start by entering your current weight—this is the most important factor in determining your hydration needs. Next, add your age, as water requirements change throughout life. Then, select your typical daily activity level (sedentary, moderate, or active) and whether you're in a hot climate or experiencing hot weather. Once you provide these details, the calculator instantly processes them using established hydration formulas. It functions as a comprehensive daily water consumption calculator, a recommended water intake calculator for general guidance, and even specialized tools like a hot weather water intake calculator or water intake calculator for pregnancy when those conditions apply. By filling in all the relevant fields, you get a clear, personalized target for your daily water consumption in liters or ounces, helping you maintain optimal hydration for your health, energy levels, and overall well-being.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[95vw]`}/>
    </div>
  );
};

export default page;