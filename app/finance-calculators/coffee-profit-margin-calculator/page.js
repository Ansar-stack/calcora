import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import Cofee from "./components/Cofee";
import HowToUse from "@/app/components/HowToUse";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Coffee Profit Margin Calculator – The Ultimate Coffee Shop Profit Calculator`}
        para={`Running a café and wondering how profitable each cup really is? Our coffee profit margin calculator helps you figure that out. Just enter what it costs you to make a cup of coffee (beans, milk, cup, etc.) and what you sell it for. Add your daily sales and monthly expenses like rent and utilities. This simple café profit calculator shows you exactly how much money you're making per cup and overall, helping you spot where you can improve your numbers.`}
      />
      <Cofee />
      <HowToUse heading={`How to Use the Coffee Profit Margin Calculator for Your Coffee Shop`}
      para={`Getting started is straightforward. First, look at your costs: calculate exactly how much you spend on ingredients for one cup of coffee. Enter that number. Next, enter your selling price per cup. Then, estimate how many cups you sell in a typical day. Finally, add up all your fixed monthly expenses—things like rent, electricity, and staff wages that don't change with how many cups you sell. Once you enter these numbers, the tool instantly works as a coffee shop profit calculator. It shows you important numbers like your profit per coffee cup, your gross profit margin (profit before fixed costs), and your net profit margin (your real earnings after all expenses). Whether you run a small café or manage a larger coffee business, this reliable calculator helps you track both types of margins without needing to do any complex math yourself.`} />
      <ToolFAQs FAQs={FAQs} />
    </div>
  );
};

export default page;