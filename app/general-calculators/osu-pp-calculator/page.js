import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import PerformanceUi from "./components/PerformanceUi";
import HowToUse from "@/app/components/HowToUse";
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Osu PP Calculator - Calculate Your Performance Points Online`}
        para={`Want to know how your latest osu! play stacks up? Our Osu PP Calculator helps you figure that out. Just enter your score, the map's star difficulty, your highest combo, and any mods you used (like Hard Rock or Double Time). The calculator instantly gives you an estimated Performance Points (PP) value, helping you track your progress and understand what affects your ranking. It's the fastest way to calculate osu pp online and see how you're improving.`}
      />
      <PerformanceUi />
      <HowToUse
        heading={`How to use Osu PP Calculator?`}
        para={`Using the Osu PP Calculator is simple and fast. To calculate your performance points online, you'll need a few details from your play. Start by entering your total score from the map. Then, input the star difficulty rating of that beatmap. Next, add your highest combo achieved during the play. Finally, select any mods you had active (this is important as mods like HR or DT significantly affect PP). Once you enter these, the tool provides an accurate osu pp estimation and a detailed osu pp calculation breakdown. This lets you instantly convert your osu score to performance points. Whether you're a competitive player wanting to check osu pp for specific mod combinations, using it as an osu star rating calculator to understand map difficulty, or just need a general performance point calculator to track your growth, this tool makes understanding your performance points easy, precise, and insightful.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  );
};

export default page;