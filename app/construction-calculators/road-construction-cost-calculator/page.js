import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import RoadConstructionUi from "./components/RoadConstructionUi";
import HowToUse from "@/app/components/HowToUse";

export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="Road Construction Cost Calculator – Estimate Your Project Expenses Easily"
        para={`Need to know how much your road project will cost? Our road construction cost calculator gives you a solid estimate in minutes. Whether you're planning a small driveway, a local street, or a bigger repair job, this tool helps you budget accurately. It works as a road construction expenses calculator and road infrastructure cost estimator, taking into account all the important factors like materials, labor, and project size so you can plan with confidence.`}
      />
      <RoadConstructionUi />
      <HowToUse
        heading={`How to Use the Road Construction Cost Calculator Effectively`}
        para={`Getting your cost estimate is straightforward. Start by entering basic project details. This includes the length and width of the road section, the type of material you plan to use (like asphalt or concrete), and the soil conditions at the site. You'll also input the expected traffic volume, as heavier traffic often requires stronger materials. Next, add the current costs for labor and materials in your area. Finally, include your estimated project duration. As you fill in each field, the calculator works behind the scenes. It functions as a road building cost calculator, a road construction expenses calculator, and a comprehensive road construction estimator. It combines all your inputs to provide a detailed budget breakdown. You can also use it specifically as a road repair cost calculator if you're fixing an existing road, or as a road paving budget planner for new surfaces. For large projects, it serves as a reliable road infrastructure cost estimator. Within a few minutes, you'll have a clear, itemized view of where your money will go, helping you make smart decisions and avoid unexpected costs down the line.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[95vw]`} />
    </div>
  );
};

export default page;