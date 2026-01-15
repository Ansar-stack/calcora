import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import RuleOf72Ui from './components/RuleOf72Ui'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Rule of 72 Calculator – Calculate Years to Double Money Fast`}
      para={`Curious how long it will take for your savings or investments to double in value? Our Rule of 72 calculator gives you the answer instantly. Just enter the annual interest rate or expected rate of return, and you'll see how many years it will take for your money to grow twofold. It's a simple, powerful way to estimate your money doubling time and plan your financial future.`}
     />
      <RuleOf72Ui />
      <HowToUse heading={`How to Use the Rule of 72 Calculator to Estimate Money Growth`} para={`Using the Rule of 72 calculator couldn't be simpler. Just find the input field and type in your expected annual interest rate (or investment return rate). For example, if you have a savings account with 6% interest or expect a 9% return from the stock market, enter that number. The tool instantly does the calculation and shows you the money doubling time—the approximate number of years it will take. Whether you want to calculate years to double money for a high-yield savings account, a CD, or stock investments, this step helps you understand how quickly your funds can grow. It’s a quick and practical way to apply the financial rule of 72 and get an approximate years to double money without needing to remember or use any complicated formulas yourself.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page