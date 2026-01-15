import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import CreditCardUi from './components/CreditCardUi'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Credit Card Minimum Payment Calculator – Manage Your Balance`}
      para={`Wondering what your minimum credit card payment will be this month? Our calculator helps you figure it out quickly. Just enter your current credit card balance, your card's annual interest rate, and how your minimum payment is calculated (usually a percentage of your balance or a fixed amount). You'll see exactly how much you need to pay, how long it will take to pay off your debt with minimum payments, and how much interest you'll end up paying. This tool helps you manage your credit card effectively and make smarter payment decisions.`}
      />
      <CreditCardUi />
      <HowToUse heading={`How to Use the Credit Card Minimum Payment Calculator`} para={`Using our calculator is straightforward. First, gather your latest credit card statement. You'll need three key numbers: your current total balance, your card's annual percentage rate (APR), and your card's minimum payment terms (this is usually listed on your statement—often 1-3% of your balance or a fixed dollar amount like $25, whichever is greater). Enter these numbers into the corresponding fields. Then, click "Calculate." Instantly, this online tool for credit card payment planning shows you your required minimum monthly payment. It also provides a detailed breakdown: how many months it will take to pay off your balance if you only make minimum payments, and the total interest you'll pay over that time. This helps you track debt, plan credit card payments online, and stay on top of your finances effortlessly. You can also experiment by entering a payment higher than the minimum to see how much faster you could become debt-free.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page