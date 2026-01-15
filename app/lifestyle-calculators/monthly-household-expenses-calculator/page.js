import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HouseHoldUi from './components/HouseHoldUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Monthly Household Expenses Calculator – Your Complete Home Budget Planner`} 
        para={`Feeling like your money disappears each month without knowing exactly where it goes? Our monthly household expenses calculator brings clarity to your spending. Simply enter all your regular costs—rent or mortgage, utility bills, groceries, transportation, insurance, and other monthly obligations. This home expenses calculator gives you a complete picture of where your money is going, helping you create a smart budget, identify saving opportunities, and take control of your household finances.`}
        
        />
        <HouseHoldUi />
        <HowToUse heading={`How to Use the Monthly Household Expenses Calculator`} para={`Using the monthly household expenses calculator is simple and straightforward. Start by gathering your recent bills and bank statements. Then, enter each monthly expense into its category: start with your biggest fixed costs like rent or mortgage payments and property taxes. Next, add your utilities (electricity, water, gas, internet, phone). Don't forget variable costs like groceries, dining out, transportation (fuel, public transit, car payments), insurance premiums (home, auto, health), and subscriptions. The calculator will automatically total all these costs as you enter them, helping you see exactly how much you spend each month in one clear view. You can also adjust values to create "what-if" scenarios for planning your budget more efficiently. Tools like a comprehensive home expenses calculator or detailed household spending planner can give you additional insights by showing spending percentages and trends, making it easier to control your household costs, set realistic saving goals, and stay on track with your monthly budget without feeling overwhelmed.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page