import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import TengentUi from './components/TengentUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Tangent Calculator - Find Tan with Angle Instantly`} 
        para={`Looking for a reliable Tangent Calculator? Enter any angle in degrees and get precise tan values in seconds. Our trigonometric tangent calculator simplifies complex trigonometry, delivering accurate results that help students, engineers, and professionals solve problems faster. No more manual calculations or table lookups—just instant answers.`}
        />
        <TengentUi />
        <HowToUse heading={`How to Use the Tangent Calculator Easily`} para={`Getting accurate tangent values has never been simpler. Start by locating the angle input field on our calculator interface. Enter your angle measurement in degrees—whether it's a common angle like 45° or a specific value like 67.5°. Once you input the angle, click the "Calculate" button. Our Tangent Calculator immediately processes the value using precise trigonometric algorithms and displays the tan result. You can use this tool multiple times for different angles, making it perfect for homework verification, exam preparation, or real-world applications. The calculator functions seamlessly as both a basic tan calculator for quick values and an advanced trigonometric tangent calculator for complex problem-solving, ensuring you get the right answer every time.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page