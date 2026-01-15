import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import Vocation from './components/Vocation'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Trip Expenses Calculator - Plan Your Travel Budget Easily`} 
        para={`Dreaming of a vacation but worried about costs? Our trip expenses calculator helps you plan the perfect getaway without financial stress. Just enter your trip details—number of days, daily accommodation costs, food budget, transportation expenses, and activities—and get an instant total cost estimate. This easy-to-use trip cost calculator ensures you can enjoy your vacation knowing exactly what to expect financially, helping you avoid overspending and making your travel planning smoother and more confident.`}
        />
        <Vocation />
        <HowToUse 
        heading={`How to use the trip expenses calculator?`}
        para={`Using our trip cost calculator is simple and fast. First, decide on your trip duration and enter the number of days you'll be traveling. Next, research and input your estimated daily costs: accommodation (hotel, Airbnb, etc.), food and dining (restaurants, groceries), transportation (flights, rental cars, local transit, fuel), and activities (tours, attractions, entertainment). Don't forget to include other expenses like travel insurance, souvenirs, or unexpected costs. The calculator automatically totals everything as you enter amounts. It works like a comprehensive trip budget planner that gives you a clear, detailed view of your total trip cost broken down by category. You can adjust numbers to see how different choices affect your budget—like staying in a cheaper hotel or eating out less—helping you find the perfect balance between your dream vacation and your budget reality.`}
        />
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page