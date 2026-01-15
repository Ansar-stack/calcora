import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import HomeMortageCalculator from './components/HomeMortageCalculator'
import HowToUse from '@/app/components/HowToUse'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
export {metadata}

const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`House Loan Calculator - Calculate Your Home Loan EMI Easily`}
        para={`Planning to buy a home and need to know what your monthly payments will be? Our house loan calculator helps you figure that out in seconds. Just enter the property's total value, how much you can pay upfront as a down payment, the loan's interest rate, and how many years you'll take to repay. You'll instantly see your estimated monthly EMI (Equated Monthly Installment), helping you plan your housing loan budget effectively and confidently.`}/>
        <HomeMortageCalculator />
        <HowToUse heading={`How to Use the House Loan Calculator?`}
        para={`Using our house loan calculator is simple and quick. First, enter the total price of the home you want to buy. Next, input the down payment amount you've saved or plan to pay—this reduces the loan amount you need to borrow. Then, add the annual interest rate offered by your bank. Finally, choose the loan duration, typically between 10 to 30 years. Once you enter these details, the calculator instantly shows your monthly EMI. This tool helps you calculate house loan EMI accurately, allowing you to plan your home loan budget realistically. It acts as a housing loan EMI budget planner, showing you how different down payments or loan tenures affect your monthly outgo. Whether you are comparing different loan options from various banks or managing an existing housing loan to see if you can afford a higher amount, this EMI calculator for home loan makes financial planning easier, clearer, and faster.`}/>
        <ToolFAQs FAQs={FAQs}/>
    </div>
  )
}

export default page