import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HomeUi from './components/HomeUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Home Renovation Cost Calculator - Quick and Accurate Budget Estimator`} 
        para={`Planning a home renovation? Our Home Renovation Cost Calculator helps you create a realistic budget. Enter your space size, renovation type (kitchen, bathroom, etc.), and estimated labor/material costs. This easy estimator removes guesswork, giving you a clear financial picture for confident planning before you start.`}
        />
        <HomeUi />
        <HowToUse heading={`How to use the home renovation cost calculator to estimate your project?`}
        para={`Using our home renovation cost calculator is simple and fast. Start by measuring your home area—this could be the square footage of a room you're renovating or your entire house. Enter this measurement. Next, select the type of renovation you're planning from the options (like kitchen remodel, bathroom update, flooring replacement, or whole-house renovation). Then, research and enter typical labor costs for your area and material expenses for what you want to install. Don't forget additional costs like permits, design fees, or unexpected contingencies. This tool works as both a comprehensive home renovation cost estimator and a detailed home renovation expenses calculator to give you an accurate budget overview. With our home renovation budget calculator and remodel project cost estimator features, you can plan your renovation confidently and see a clear remodel cost breakdown by category (labor, materials, extras). This makes it much easier to manage your home improvement project, compare quotes from contractors, and ensure you don't run out of money mid-project.`}
        />
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page