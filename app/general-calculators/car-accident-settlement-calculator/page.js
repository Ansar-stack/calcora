import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";
import { metadata } from './metadata'
import CarUi from "./components/CarUi";
export {metadata}

const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Car Accident Settlement Calculator`}
        para={`Estimate your potential car accident settlement amount with our free calculator. This traffic accident claim calculator helps you calculate compensation for medical expenses, property damage, lost wages, and pain & suffering. Use our auto accident payout estimator to get a realistic settlement projection for your motor vehicle accident claim.`}
      />
      
      <CarUi />
      
      <HowToUse
        heading={`How to Use This Car Accident Settlement Calculator`}
        para={`Using our car accident settlement calculator is straightforward. Start by entering your medical expenses including hospital bills, doctor visits, and medication costs. Next, input property damage expenses for vehicle repairs or replacement. Include lost wages from time missed at work due to injuries. Enter a pain & suffering multiplier (typically 1-5) based on injury severity. Add your attorney's legal fee percentage (usually 25-40%). Include any other accident-related expenses in the final field. The calculator will compute your economic damages, apply the pain & suffering multiplier, calculate legal fees, and provide your estimated final settlement amount. This car accident compensation estimator helps you understand potential settlement values before negotiating with insurance companies or during legal consultations.`}
      />
      
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  );
};

export default page;