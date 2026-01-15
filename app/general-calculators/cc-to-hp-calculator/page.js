import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";
import { metadata } from './metadata'
import CCUi from "./components/CCUi";
export {metadata}

const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`CC to HP Calculator - Engine CC to Power Calculator`}
        para={`Convert CC to HP with our precise cubic centimeters to horsepower converter. This bike cc to hp calculator and car engine cc to hp online tool helps you calculate horsepower from engine displacement for all vehicle types. Perform accurate cc to hp conversion for petrol, diesel, and motorcycle engines.`}
      />
      
      <CCUi />
      
      <HowToUse
        heading={`How to Use This CC to HP Calculator for Engine CC to Power Calculation`}
        para={`Using our cubic centimeters to horsepower converter is simple. First, locate your engine's CC value in your vehicle manual or specifications. Enter this number in the CC field. Next, select your engine type: choose Petrol for gasoline engines, Diesel for diesel vehicles, Motorcycle for bikes, or Other for specialty engines. This engine cc to power calculator applies different conversion factors for each engine type. When you click Calculate HP, it performs the cc to hp conversion using industry-standard ratios. Use this bike cc to hp calculator for motorcycles or our car engine cc to hp online tool for automotive applications. For accurate convert cc to hp results, ensure you've selected the correct engine type since diesel engines convert differently than petrol engines. The calculator accounts for these variations in the cc to hp conversion process, giving you reliable horsepower estimates from cubic centimeters.`}
      />
      
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  );
};

export default page;