import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HypUi from './components/HypUi'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Calculate Hypotenuse of Right Triangle Easily with Our Calculator`}
      para={`Need to find the longest side of a right triangle? Our hypotenuse calculator makes it simple. Just measure and enter the lengths of the two shorter sides (the legs), and the calculator instantly uses the Pythagorean theorem to find the hypotenuse. Perfect for geometry homework, DIY projects, or any situation where you need to calculate the diagonal distance or missing side of a right triangle quickly and accurately.`}
      
      />
      <HypUi />
      <HowToUse heading={`How to Calculate Hypotenuse of Right Triangle Easily`} para={`To calculate the hypotenuse of a right triangle, simply enter the lengths of side A and side B into the labeled input fields above. These are the two sides that form the right angle. Our right triangle calculator instantly processes these values using the Pythagoras formula (c² = a² + b²), giving you the precise hypotenuse length in seconds. The calculation happens automatically—there's no need to press a button in many versions. Whether you’re using it as a dedicated triangle hypotenuse solver to find one missing side or as a hypotenuse formula calculator to understand the math, the process is straightforward and intuitive. You can also use it as a comprehensive triangle hypotenuse and sides calculator to double-check your results or experiment with different side lengths, helping with complete triangle calculations and understanding geometric relationships.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page