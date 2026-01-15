import React from "react";
import { metadata } from "./metadata";
import FinanceUi from "./Components/FinanceUi";
import WhyOurTools from "@/app/components/WhyOurTools";
import { MdAttachMoney, MdCheck, MdPhoneIphone, MdPrivacyTip, MdSecurity, MdSpeed } from "react-icons/md";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import CatagoryHeroSection from "@/app/components/CatagoryHeroSection";
export { metadata };
const page = () => {
 const cardArray = [
  {
    icon: <MdAttachMoney className="text-green-600 text-2xl" />,
    title: "Accurate Financial Calculations",
    para: "Get precise results for loans, investments, and savings instantly.",
  },
  {
    icon: <MdSpeed className="text-blue-700 text-2xl" />,
    title: "Fast & Reliable",
    para: "Calculate complex financial scenarios in seconds with zero delays.",
  },
  {
    icon: <MdSecurity className="text-zinc-900 text-2xl" />,
    title: "Safe & Private",
    para: "We never store or share your financial data. 100% secure.",
  },
  {
    icon: <MdPhoneIphone className="text-orange-600 text-2xl" />,
    title: "Mobile-Friendly Design",
    para: "Use any finance calculator smoothly on your phone or tablet.",
  },
];

  return (
    <div className="flex flex-col items-center px-3">
      <CatagoryHeroSection
        heading={`Finance Calculators – Smart Tools for Money Management`}
        para={`Managing your money just got easier. Our collection of finance calculators helps you with almost every financial question. Need to know what your home loan payment will be? Use our EMI calculator. Planning for retirement? Try our 401k and withdrawal calculators. Want to see how long it takes your savings to double? The Rule of 72 calculator shows you instantly. Whether you're paying off student loans, calculating PayPal fees for your business, or figuring out credit card payoff, these free tools give you quick, accurate answers to make better financial decisions.`}
        path={`financeCalculators`}
      />
      <WhyOurTools title={`Why Use Our Finance Calculators?`} cardArr={cardArray}/>
      <FinanceUi />
      <div className="ms-5 self-start mt-20">
          <ToolFAQs FAQs={FAQs}/>
      </div>
    </div>
  );
};

export default page;