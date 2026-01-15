import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import CryptoUi from "./components/CryptoUi";
import HowToUse from "@/app/components/HowToUse";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="RIO Staking Calculator – Instantly Estimate Your Crypto Rewards"
        para="Thinking about staking RIO tokens but want to know the potential rewards first? Our RIO staking calculator gives you the answer. Simply enter how many RIO tokens you plan to stake, the expected annual interest rate (APY), and how long you'll lock them up. You'll instantly see an estimate of the rewards you could earn. This RIO staking return calculator and RIO staking interest calculator makes it easy to visualize your crypto profits and plan your staking strategy in seconds."
      />
      <CryptoUi />
      <HowToUse
        heading={`How to Use the RIO Staking Calculator Effectively`}
        para={`Using the RIO staking calculator is simple and intuitive. First, enter the total amount of RIO tokens you own or plan to stake. Next, input the staking duration—this could be 30 days, 90 days, 1 year, or more. Finally, add the expected annual interest rate (APY) offered by the staking platform. Once you enter these three key numbers, click calculate. The tool instantly works as a RIO staking return calculator, showing your total potential rewards in RIO tokens. It also functions as a RIO staking profit calculator, displaying the value of those rewards in your local currency if you provide the current RIO price. This helps you understand both your short-term and long-term gains clearly. Whether you want to check specific projections with our RIO staking interest calculator or explore different scenarios with our Crypto RIO staking calculator, this tool makes tracking, comparing, and planning your RIO staking strategy fast, easy, and insightful.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`}/>
    </div>
  );
};

export default page;