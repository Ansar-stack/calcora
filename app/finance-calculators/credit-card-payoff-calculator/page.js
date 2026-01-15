import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import CreditCardPayOff from './components/CreditCardPayOff'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Credit Card Payoff Calculator`}
      para={`Want a clear plan to get out of credit card debt? Our payoff calculator shows you exactly how to do it. Just enter your total credit card balance and the annual interest rate (APR). Then, decide how much you can afford to pay each month. The calculator instantly shows you how many months it will take to become debt-free and exactly how much interest you'll pay along the way. This online credit card debt calculator turns a stressful debt situation into a manageable, step-by-step plan.`}
      />
      <CreditCardPayOff />
      <HowToUse heading={`How to Use the Credit Card Payoff Calculator`} para={`Using the calculator is simple and effective. First, gather your credit card statement to find your current total balance and your card's annual percentage rate (APR). Enter these two numbers into the first two fields. Next, think about your budget: how much can you realistically pay toward this debt each month? Enter that amount as your planned monthly payment. Then, click "Calculate." The tool instantly works as a credit card debt calculator, showing you your personalized credit card payoff timeline. You'll see the number of months or years required, your total interest on credit card debt, and a clear breakdown of each monthly credit card payment. This monthly credit card payment calculator helps you plan repayment online, track how much of your payment goes toward interest versus the principal balance, and stay on top of your finances with ease. You can adjust the monthly payment amount to see how paying just a little more each month can save you money on interest and get you debt-free faster.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page