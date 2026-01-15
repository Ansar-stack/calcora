import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import TipCalculatorUi from "./components/TipCalculatorUi";
import HowToUse from "@/app/components/HowToUse";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Restaurant Bill Calculator - Calculate Tips & Split Bills Instantly`}
        para={`Need to calculate tips and split restaurant bills quickly? Our Restaurant Bill Calculator makes it simple. Enter your total bill amount, tip percentage, number of people, and even apply discounts for accurate, instant results. Perfect for dining out with friends, family meals, or business dinners.`}
      />
      <TipCalculatorUi />
      <HowToUse heading={`How to use the Restaurant Bill Calculator`}
      para={`Using our Restaurant Bill Calculator is straightforward. Start by entering your total bill amount in the first field. Next, choose your desired tip percentage or enter a custom amount. If you're dining with others, input the number of people to split the bill evenly. Optionally, add any discount percentage to see your final cost. The calculator instantly shows each person's share, total tip amount, and final bill including tip. It's perfect for groups, families, or solo dining where you want precise bill calculations without guesswork.`}
      />
      <ToolFAQs FAQs={FAQs}/>
    </div>
  );
};

export default page;