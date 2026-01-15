import React from "react";
import { metadata } from "./metadata";
import ToolsHero from "@/app/components/ToolsHero";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import WeddingUi from "./components/WeddingUi";
import HowToUse from "@/app/components/HowToUse";
export { metadata };
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Wedding Cost Calculator - Plan Your Wedding Budget Easily`}
        para={`Planning the wedding of your dreams but worried about costs adding up? Our wedding cost calculator helps you create a realistic budget for your big day. Simply enter estimated costs for each category—venue, catering, attire, decorations, photography, and more—and see a complete financial picture instantly. This easy-to-use tool acts as your personal wedding budget planner, giving you a detailed wedding cost breakdown so you can make informed decisions, prioritize what matters most to you, and celebrate your special day without financial stress.`}
      />
      <WeddingUi />
      <HowToUse
        heading={`How to use the wedding cost calculator to plan your perfect day?`}
        para={`Using our wedding cost calculator is simple and intuitive. Start by determining your overall wedding budget—this is your spending limit. Then, fill in estimated costs for each major category: venue rental and fees, catering and beverages, wedding attire (dress, suit, accessories), decorations and flowers, photography and videography, entertainment (music/DJ), invitations and stationery, wedding cake, transportation, and any other special elements you're planning. As you enter amounts, this wedding expenses calculator automatically updates and provides a detailed wedding cost breakdown, showing you exactly where your money is allocated and what percentage each category represents of your total budget. It works as a comprehensive wedding budget planner, detailed wedding cost estimator, and practical marriage budget calculator all in one, making it easy to track every expense and adjust as needed. Whether you want a quick ballpark estimate with our wedding cost estimator feature or a full, detailed plan with our wedding planner calculator functionality, this tool ensures your wedding budget stays organized, transparent, and completely stress-free throughout your planning journey.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  );
};

export default page;