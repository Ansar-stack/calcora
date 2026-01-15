import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import ProfitAndLoseUi from "./components/ProfitAndLoseUi";
import HowToUse from "@/app/components/HowToUse";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Profit and Loss Calculator - Instantly Calculate Your Profit & Loss`}
        para={`Need to know if you're actually making money on your sales? Our Profit and Loss Calculator gives you the answer fast. Just enter what it cost you to get or make an item, what you sold it for, and any extra expenses like shipping or fees. In seconds, you'll see your profit, loss, and profit margin percentage. This easy-to-use P and L Calculator is perfect for small business owners, online sellers, and traders who want clear, accurate financial results without complicated spreadsheets.`}
      />
      <ProfitAndLoseUi />
      <HowToUse
        heading={`How to Use the Profit and Loss Calculator (P & L Calculator)?`}
        para={`Our Business Profit and Loss Calculator makes it easy to figure out your financial results. To get started, enter the basic numbers: the cost you paid for an item and the price you sold it for. Then, make it more accurate by adding details if they apply: the quantity sold, any discount you offered, sales tax collected, shipping charges you paid, and fees from platforms like Etsy or Amazon. Once all details are entered, click “Calculate Profit and Loss.” Instantly, you'll see your net profit or loss in dollars, and your profit margin as a percentage. This Online Profit Calculator and P&L Calculator helps businesses, traders, and sellers calculate net profit, loss, and margin percentages effortlessly. You can use it for a single sale or for a batch of items. With this calculator, you can quickly analyze your sales performance, understand exactly where your money is going, and make informed business decisions about pricing and costs.`}
      />
      <ToolFAQs FAQs={FAQs} />
    </div>
  );
};

export default page;