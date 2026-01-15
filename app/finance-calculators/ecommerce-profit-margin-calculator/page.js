import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import ProfitAndLoseUi from './components/ProfitAndLoseUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Ecommerce Profit Margin Calculator - Calculate Your Profits`} 
        para={`Running an online store is exciting, but knowing your real profits can be tricky. Our ecommerce profit margin calculator makes it simple. Just enter what it costs you to get the product, your selling price, and all the extra expenses like shipping, packaging, marketplace fees, and any discounts you offer. In just a few clicks, you'll see exactly how much you actually earn from each sale, helping you price smarter and grow your business.`}/>
        <ProfitAndLoseUi />
        <HowToUse heading={`How to use the  ecommerce profit margin calculator?`}
        para={`Using this calculator is simple and beginner-friendly. Start by entering your basic numbers: the cost you pay for the product, the price you sell it for, and how many you're calculating for. Then, don't forget the "hidden" costs! Add any extra expenses per item, such as shipping fees, packaging materials, marketplace commissions (like Amazon or Etsy fees), or platform subscription costs. The tool will instantly calculate your margins, showing you your real earnings after all costs. Think of it as more than just a margin tool—it also works like an ecommerce revenue calculator to show your total income and an online store profit calculator to reveal your net gain. Whether you're running a dropshipping business, selling handmade goods, or tracking ROI for ads, this calculator gives you a clear, accurate picture of your profits before you even make the sale.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page