import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import AreaOfCirUi from './components/AreaOfCirUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Area of Circle Calculator – Calculate Area of a Circle Instantly`} 
        para={`Need to find the area of a circle for homework, a DIY project, or work? Our area of circle calculator makes it simple. Just measure or enter the radius of your circle (that's the distance from the center to the edge), and the calculator instantly gives you the exact area. Whether you're working with a small circle or a large one, this tool acts as a precise circle size calculator, delivering accurate results in seconds.`}/>
        <AreaOfCirUi />
        <HowToUse heading={`How to Use the Area of Circle Calculator Easily`} para={`Using the area of circle calculator is simple and quick. First, find the radius of your circle. This is half the distance across the circle through its center (if you have the diameter, just divide it by 2 to get the radius). Enter this radius number into the input box. The calculator then instantly processes it using the formula A = πr² and provides the exact area. Whether you need to calculate area of a circle for a school math assignment, a construction project at work, or a personal craft, this tool acts as a precise area of circle using radius calculator. You can also use it as a reliable circle area online calculator to double-check manual calculations or as an area of circle solver to verify measurements—all delivering accurate results in seconds without any hassle.`} />
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
        
    </div>
  )
}

export default page