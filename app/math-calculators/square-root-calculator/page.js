import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import SquareRootUi from './components/SquareRootUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Square Root Calculator – Find Roots Fast and Easy`} 
        para={`Need to find a square root quickly? Our Square Root Calculator delivers instant, accurate results for any number. Whether you're working with perfect squares, decimals, or large values, this intuitive sqrt calculator gives you the precise root with just one click. Perfect for students, professionals, and anyone who needs reliable mathematical solutions.`}
        />
        <SquareRootUi />
        <HowToUse heading={`How to Calculate Square Root Easily`} para={`Using our Square Root Calculator couldn't be simpler. Start by locating the input field on the calculator interface. Enter your desired number—this can be a whole number, a decimal, a fraction (entered as a decimal), or even a negative number if you're working with complex mathematics. After typing your value, click the "Calculate" or "Find Root" button. Immediately, the calculator processes your input using optimized algorithms and displays the square root result. For perfect squares, you'll see a clean whole number answer. For non-perfect squares, the calculator provides the exact decimal approximation. You can also use the tool repeatedly to compare different numbers or verify manual calculations. This process works identically whether you need a basic perfect square root calculator for simple problems or a scientific square root calculator for advanced mathematics, making it versatile for all skill levels.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page