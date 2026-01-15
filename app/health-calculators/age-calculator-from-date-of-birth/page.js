import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import AgeCalcUi from "./components/AgeCalcUi";
import HowToUse from "@/app/components/HowToUse";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="Age Calculator from Date of Birth – Find Your Exact Age Online"
        para={`Want to know exactly how old you are down to the day? Our age calculator makes it simple. Just enter your full date of birth (day, month, and year), and you'll instantly see your exact age in years, months, and days. This easy-to-use online age calculator is perfect for birthday planning, filling out forms, or just satisfying your curiosity about how much time has passed since you were born.`}
      />
      <AgeCalcUi />

      <HowToUse heading={`How to Use the Age Calculator from Date of Birth`} para={`Using the age calculator from date of birth is simple and quick. First, find the input fields for your birthdate. You'll typically see three separate boxes or dropdowns: one for the day, one for the month, and one for the year. Select or type in your complete birthdate. Then, if needed, click the "Calculate" button. The tool instantly processes this information and displays your precise age from birthdate in three formats: total years, months, and days. This online age calculator helps you easily find your age online without any complicated steps or math on your part, making it a reliable date of birth to age converter whenever you need to know your exact age for official documents, milestone tracking, or personal interest.`} />
      <ToolFAQs FAQs={FAQs}/>
    </div>
  );
};

export default page;