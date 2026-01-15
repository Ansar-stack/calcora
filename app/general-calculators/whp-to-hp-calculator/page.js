import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
import WHPUi from './components/WHPUi'
export {metadata}

const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`WHP to HP Calculator: Convert Wheel Horsepower to Engine HP`}
        para={`Use our free WHP to HP calculator to convert wheel horsepower to engine horsepower instantly. Simply enter your WHP value, select your drivetrain type (FWD, RWD, or AWD), and optionally add custom drivetrain loss percentage. Get accurate engine power calculations for performance tuning and automotive analysis.`}
      />
      
      <WHPUi/>
      
      <HowToUse
        heading={`How to Use This WHP to HP Calculator`}
        para={`1. Enter your Wheel Horsepower (WHP) value - this is power measured at the wheels from dyno testing. 2. Select your drivetrain type: choose FWD for front-wheel drive (15% loss), RWD for rear-wheel drive (20% loss), or AWD/4WD for all-wheel drive (25% loss). 3. For custom setups, select 'Add Custom Drivetrain Loss' and enter your specific percentage. 4. Click 'Calculate HP' to convert WHP to engine horsepower. The calculator uses the formula: HP = WHP ÷ (1 - drivetrain loss % / 100). Use this tool for accurate wheel power to engine power conversion in automotive performance analysis.`}
      />
      
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  );
};
export default page;