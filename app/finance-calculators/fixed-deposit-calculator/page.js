import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import FixedDepositUi from './components/FixedDepositUi'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Fixed Deposit Calculator to Calculate Interest Earned on FD Easily`}
      para={`Thinking about opening a fixed deposit and want to know exactly how much it will earn? Our fixed deposit calculator makes it simple. Just enter the amount you want to deposit, how long you'll keep it locked in, and the current interest rate offered by the bank. This easy-to-use online fixed deposit return tool shows you the total interest you'll earn and the final amount you'll get back at maturity, helping you compare different FD options quickly.`}
      />
      <FixedDepositUi />
      <HowToUse heading={`How to Use the Fixed Deposit Calculator to Estimate Your FD Returns`} para={`Using the fixed deposit calculator is simple and fast. First, decide on the deposit amount you're considering. Enter this principal amount into the first field. Next, choose the FD period or tenure—this could be 6 months, 1 year, 5 years, etc. Then, input the annual interest rate your bank is offering. Finally, select how often the interest is compounded (monthly, quarterly, or annually). Once you hit calculate, you’ll instantly see two key numbers: the total interest earned over the entire period and the full maturity amount (your original deposit plus all interest). This tool also helps you plan smarter by showing accurate results for different scenarios. It acts as both an online fixed deposit return tool to compare banks and a handy investment maturity calculator for FD to see how time affects your growth. With this, you can easily understand your potential earnings, track interest payouts, and make informed decisions about where to place your fixed deposits for the best returns.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page