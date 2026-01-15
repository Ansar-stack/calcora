import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import Discountui from './components/Discountui'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Discount Calculator – Instantly Find Final Price After Discount`}
      para={`Shopping online or in-store and want to know exactly how much you'll pay after a discount? Our discount calculator gives you the answer instantly. Just enter the original price and the discount percentage (like 20% off, 30% sale, etc.), and you'll immediately see both the amount you're saving and the final price you'll actually pay. This tool is perfect for comparing deals, budgeting for purchases, or checking if that "amazing sale" is really as good as it seems.`}
      />
      <Discountui />
      <HowToUse heading={`How to Use This Discount Calculator`} para={`Quickly calculate the final price after discount with just two simple numbers. First, find the original price of the item—this is the price before any discounts. Next, note the discount percentage being offered (like 15%, 25%, 50% off). Enter both numbers into the calculator. This discount percentage calculator instantly processes your inputs and shows two important results: the discount amount (exactly how much money you're saving in dollars) and the final price after discount (what you'll actually pay at checkout). Ideal for shoppers comparing multiple deals, retailers setting sale prices, or anyone who needs a fast, accurate discounted price calculator, it helps you save time and avoid calculation errors that could cost you money. Use it as a reliable discount estimator to determine the final price after discount in seconds, whether you're buying one item or calculating savings across an entire shopping cart.`} />
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page