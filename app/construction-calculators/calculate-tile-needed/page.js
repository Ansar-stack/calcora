import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import Tile from "./components/Tile";
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Tile Calculator – Calculate How Many Tiles You Need`}
        para={`Need to figure out how many tiles to buy for your floor or wall project? Our tile calculator makes it easy. Enter your room's length and width, plus your tile size, and we'll tell you exactly how many tiles you need—including an extra percentage for cuts and wastage. No more guessing or buying too much!`}
      />
      <Tile />
      <ToolFAQs FAQs={FAQs} />
    </div>
  );
};

export default page;