import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import RetirementUi from "./components/RetirementUi";
import HowToUse from "@/app/components/HowToUse";

export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="401k Match Calculator – Maximize Your Savings"
        para={`Want to know how much your employer will match for your retirement? Our 401k match calculator helps you figure it out. Simply enter your salary, how much you plan to contribute, and your employer's match policy. You'll see exactly how much free money you could be getting and how it grows over time. This tool also functions as a 401k employer contribution calculator and a 401k savings match calculator, giving you clear numbers to help you make smart retirement decisions.`}
      />
      <RetirementUi />
      <HowToUse 
      heading={`How to Use the 401k Match Calculator?`}
      para={`Getting started is simple. First, enter your basic information: your current age, when you plan to retire, and your annual salary. Then, add how much you contribute to your 401k each month—this could be a dollar amount or a percentage of your salary. Next, input your employer's match details: what percentage they match and up to what limit (many employers match 50% or 100% of your contributions up to a certain percentage of your salary). Our calculator does the rest. It functions as a comprehensive 401k plan match calculator and max 401k match calculator, showing you how much your employer adds. It also works as a detailed 401k employer match calculator and 401k contribution calculator, projecting how your savings grow with compound interest over the years. You'll see totals for your contributions, employer matches, interest earned, and what your savings could be worth in today's dollars after accounting for inflation. By filling in all the fields, you get a realistic picture of your retirement potential, helping you make smarter decisions for your financial future.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[95vw]`}/>
    </div>
  );
};

export default page;