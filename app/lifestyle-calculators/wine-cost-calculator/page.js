import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import WineUi from './components/WineUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Wine Cost Calculator – Estimate Your Wine Price`} 
        para={`Planning a dinner party, stocking your home bar, or running a restaurant and need to know your wine costs? Our wine cost calculator gives you precise estimates in seconds. Just enter the bottle price, quantity needed, and any additional costs like taxes, shipping fees, or desired markup percentage. Whether you're calculating cost per bottle for purchasing or cost per glass for serving, this tool helps you budget accurately and avoid unexpected expenses on your wine purchases.`}
        />
        <WineUi />
        <HowToUse heading={`How to Use the Wine Cost Calculator Easily`} para={`Using our wine cost calculator is straightforward and efficient. Start by entering the base price of a single bottle of wine. Next, input how many bottles you plan to purchase or serve. Then, add any applicable sales tax percentage for your location. If you're having wine shipped, include the shipping fee—either as a flat rate or percentage. For restaurants, bars, or event planners, you can also add your desired markup percentage to calculate selling prices. The calculator instantly processes all these inputs and shows you several key numbers: the total cost for all bottles, cost per bottle after taxes and shipping, and cost per standard glass (typically 5-6 ounces). This makes it function perfectly as both a wine pricing calculator for buyers and a wine pour cost calculator for businesses. You can easily toggle between different scenarios: "What if I buy 12 bottles instead of 6?" or "How does a 10% price increase affect my per-glass cost?" This flexibility helps you make smart purchasing decisions and price your wine offerings profitably.`} />
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page