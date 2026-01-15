import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import FuelCost from './components/FuelCost'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Road Trip Fuel Cost Calculator - Plan Your Fuel Expenses Easily`}
        para={`Planning a road trip and want to know exactly how much you'll spend on gas? Our road trip fuel cost calculator makes it simple. Just enter the total distance you'll be driving, your vehicle's fuel efficiency (miles per gallon or kilometers per liter), and the current price of fuel. You'll get an instant estimate of your total fuel cost. Whether you're planning a weekend getaway or a cross-country adventure, this tool works as a smart road trip fuel planner and trip mileage cost calculator to help you budget accurately and avoid surprises at the pump.`}/>
      <FuelCost/>
      <HowToUse heading={`How to use the road trip fuel cost calculator?`}
      para={`Using our calculator is simple and fast. Start by entering your total trip distance and select whether it's in miles or kilometers. Then, provide your vehicle's fuel efficiency—this is usually listed as MPG (miles per gallon) for the US or L/100km (liters per 100 kilometers) in many other countries. Next, add the current fuel price per gallon or per liter at your local station. Once you submit this information, the calculator instantly processes the numbers. It shows you the estimated total fuel cost for your trip and how many gallons or liters you'll likely need. This tool also works as a comprehensive road trip fuel planner for budgeting multiple stops, a trip mileage cost calculator for comparing vehicle efficiency, or a long-distance trip fuel calculator for major journeys. By using it, you can plan your journey efficiently, compare costs between different routes or vehicles, and manage your travel budget with confidence and clarity.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page