import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";
import HeartUi from "./components/HeartUi";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading="Heart Rate Zones Calculator for Workouts and Fitness Tracking"
        para={`Want to train smarter, not harder? Our heart rate zone calculator helps you find your personalized training zones in seconds. Just enter your age and resting heart rate, and discover exactly which heart rate ranges you should target for fat burning, cardio improvement, or peak performance. Whether you're a runner, cyclist, or just starting your fitness journey, this tool makes it easy to optimize every workout by training in the right heart rate zones.`}
      />
      <HeartUi />
      <HowToUse
        heading={`How to Use the Heart Rate Zone Calculator`}
        para={`Using the heart rate zone calculator is simple and fast. First, measure your resting heart rate (bpm) - the best time is first thing in the morning before getting out of bed. Count your pulse for 60 seconds or use a fitness tracker. Enter this number along with your age into the calculator. You can also specify your gender for slightly more personalized results and select your typical activity level. Click calculate, and within seconds, you'll see your personalized heart rate zones displayed. These include heart rate zone 1 (very light recovery), zone 2 (fat burning/easy cardio), zone 3 (aerobic fitness), zone 4 (threshold training), and zone 5 (maximum effort). Cyclists, runners, and fitness enthusiasts can use these zones to track their heart rate during specific workouts, while anyone can check their average resting heart rate for health monitoring. This easy-to-use tool with bpm input helps you understand your heart's performance and optimize every training session for better results and safer workouts.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[95vw]`} />
    </div>
  );
};

export default page;