import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import PercentageUi from "./PercentageUi";
import HowToUse from "@/app/components/HowToUse";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Percentage Calculator – Online Tool with Steps for Easy Calculations`}
        para={`Stop struggling with manual percentage calculations. Our free Percentage Calculator delivers instant, accurate results for discounts, taxes, tips, and commissions. Perfect for students, shoppers, freelancers, and businesses, this tool provides clear, step-by-step solutions that save time and prevent errors. Get reliable answers for any percentage problem in seconds.`}
      />
      <PercentageUi />
      <HowToUse
        heading={`How to Use the Percentage Calculator Easily`}
        para={`Using our Percentage Calculator is incredibly simple and takes less than 30 seconds. First, locate the two input fields. In the first field, enter the total or whole value (for example, the original price of an item or the total points possible on a test). In the second field, enter the partial or obtained value (such as the discounted price, the actual score you received, or the tax amount). Then, simply click the 'Calculate' button. Instantly, our intelligent Percentage Calculator will display your precise result, showing the exact percentage relationship between the two numbers. This tool is designed as a comprehensive online percentage calculator with steps, meaning it can also guide you through the calculation process if you're learning. You can use it repeatedly for different scenarios—calculate a 30% discount on a $50 jacket, determine what percentage a $15 tip is on a $75 meal, or find out the sales tax percentage on a $1,200 laptop. Its user-friendly interface makes it ideal for quick calculations and double-checking your manual work, ensuring accuracy every time.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  );
};

export default page;