import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import BMRUi from "./components/BMRUi";
import HowToUse from "@/app/components/HowToUse";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";

export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="Basal Metabolic Rate Calculator – Track Daily Calories"
        para={`Want to know how many calories your body needs just to function at rest? Our basal metabolic rate (BMR) calculator gives you that number. Simply enter your age, gender, height, and weight, and you'll get an estimate of the calories you burn without any activity. This is your starting point for understanding your daily energy needs. Whether you're trying to lose weight, maintain, or gain, knowing your BMR is the first step to creating an effective nutrition plan.`}
      />
      <BMRUi />
      <HowToUse heading={`How to Use the Basal Metabolic Rate Calculator Effectively`}
      para={`To use the basal metabolic rate calculator, start by gathering your basic information. You'll need to enter your current age, select your gender, and input your height and weight in the units you prefer (feet/inches or cm, pounds or kg). If you happen to know your body fat percentage from a recent measurement, you can include it for a more precise result. Once you've filled in these details, click calculate. You'll immediately see your estimated daily energy requirement at rest—this is your BMR. The calculator also shows average BMR values for comparison. Understanding this number helps you plan how many calories to eat each day. You can then combine this information with your activity level using an activity level calorie calculator to get your total daily needs, or use it alongside a weight maintenance calculator to plan your diet effectively. This approach makes managing your daily calorie needs and overall metabolism and weight management much easier, more accurate, and personalized to your body.`}
       />
      <ToolFAQs FAQs={FAQs}/>
    </div>  
  );
};

export default page;