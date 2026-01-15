import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import PartyCostUi from './components/PartyCostUI'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'

export { metadata }

const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero 
        heading={`Party Cost Calculator - Easily Estimate Your Party Budget & Expenses`}
        para={`Planning an event and need to manage your party budget? Our free Party Cost Calculator helps you estimate total party expenses quickly. Calculate costs for food, drinks, venue, entertainment, and decorations to create an accurate party budget planner. Perfect for birthday parties, weddings, corporate events, and celebrations of all sizes.`}
      />
      
      <PartyCostUi />
      
      <HowToUse 
        heading={`How to Use the Party Cost Calculator for Your Event Planning`}
        para={`Using our Party Cost Calculator is straightforward. First, enter the number of guests attending your event. Then, input the estimated cost per person for food and drinks. Add additional expenses like venue rental fees, entertainment costs (DJ, band, or performers), decorations, and any other party supplies. The calculator instantly computes your total party budget and breaks down the average cost per guest. This tool helps you track expenses, compare pricing options, and ensure you stay within your event planning budget for weddings, birthday celebrations, corporate parties, and social gatherings.`}
      />
      
      <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page