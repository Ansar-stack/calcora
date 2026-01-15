import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import ToolFAQs from "@/app/components/ToolFAQs";
import HowToUse from "@/app/components/HowToUse";
import { FAQs } from "./FAQs";
import Cegar from "./components/Cegar";
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Cigarette Cost Calculator – Track Your Smoking Expenses Easily`}
        para={`Ever wonder exactly how much your smoking habit is costing you? Our cigarette cost calculator gives you the answer in seconds. Just enter how much you pay for a pack, how many cigarettes you smoke each day, and the calculator shows you your daily, monthly, and yearly expenses. This eye-opening cigarette expense calculator helps you see the real financial impact of smoking and discover how much you could potentially save by making changes.`}
      />
      <Cegar />
      <HowToUse
        heading={`How to Use the Cigarette Cost Calculator to Track Your Spending`}
        para={`Using the Cigarette Cost Calculator is simple and fast. First, check how much you currently pay for one pack of cigarettes—this is your cost per pack. Next, think about your daily habit: how many cigarettes do you typically smoke in a day? Enter that number. Then, if you smoke some days but not others, you can adjust the frequency. Once you enter these details, the calculator instantly shows your expenses broken down three ways: what you spend daily, what it adds up to monthly, and the startling yearly total. This helps you understand your overall tobacco spending in concrete terms. With these insights from the tool, you can create a realistic cigarette budget, monitor your cigarette consumption patterns, and identify clear opportunities to boost cigarette savings. Whether you want to track short-term costs for budgeting or see the long-term financial impact over years, this calculator gives a transparent, clear view of your smoking expenses that might surprise you.`}
      />
      <ToolFAQs FAQs={FAQs} />
    </div>
  );
};

export default page;