import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
import LoveUi from './components/LoveUi'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Twin Flame Calculator - Discover Your Spiritual Connection`}
      para={`Explore your twin flame connection with our intuitive calculator. Enter names and optional birth dates to discover your spiritual compatibility percentage. This twin flame test reveals insights about your unique soul connection.`}/>
      <LoveUi />
      <HowToUse heading={`How to use the Twin Flame Calculator`}
      para={`Using our Twin Flame Calculator is simple. Enter your name and your twin flame's name in the first two fields. For enhanced accuracy, optionally add birth dates in MM/DD/YYYY format. Click calculate to instantly receive your twin flame compatibility percentage, numerology breakdown, and spiritual insights about your connection. This tool functions as both a twin flame test and twin flame checker.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page