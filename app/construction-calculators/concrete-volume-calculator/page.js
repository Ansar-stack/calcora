import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import HowToUse from '@/app/components/HowToUse'
import { FAQs } from './FAQs'
import Concrete from './components/Concrete'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Concrete Volume Calculator – Estimate Concrete for Any Project`}
      para={`Need to know how much concrete to order? Our concrete volume calculator gives you a quick estimate for slabs, footings, steps, or post holes. Just enter your project's length, width, and depth. The calculator figures out the cubic yards or meters you'll need, so you can buy the right amount of concrete mix and avoid waste.`}
      />
      <Concrete />
      <HowToUse heading={`How to Use the Concrete Volume Calculator Easily`}
      para={`It's really simple to use. First, choose your project shape – like a slab, footing, or steps. Then, enter the measurements. For a slab, that's length, width, and thickness. The calculator does the math instantly. It works as a concrete volume estimator to tell you the total volume. It also acts as a concrete mix quantity calculator, helping you figure out how many bags of mix to buy if you're not getting a truck delivery. You'll save time and money by getting the amount just right.`}
      />
      <ToolFAQs FAQs={FAQs}/>
    </div>
  )
}

export default page