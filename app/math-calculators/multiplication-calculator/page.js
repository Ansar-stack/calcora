import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import MultiplierUi from './components/MultiplierUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Multiplication Calculator – Multiply Numbers Easily Online`} 
        para={`Stuck on multiplication problems? Our Multiplication Calculator makes multiplying numbers simple and error-free. Enter any numbers—whole, decimals, or fractions—and get instant results. This tool works as both a quick multiplier and a step-by-step long multiplication calculator, helping you learn while getting accurate answers. Perfect for students, teachers, professionals, and everyday calculations.`}
        />
        <MultiplierUi />
        <HowToUse heading={`How to Use the Multiplication Calculator Effectively`} para={`Our Multiplication Calculator is designed to make multiplying numbers fast, simple, and educational. First, enter the numbers you want to multiply. You can input two numbers for basic multiplication, or several numbers if you need to multiply a sequence (like 3 × 4 × 5). The calculator instantly processes your input and displays the product. For more complex problems, use it as a long multiplication calculator to see the step-by-step process of multiplying multi-digit numbers, just like you'd do on paper. If you're working with decimals, it functions as a precise decimal multiplication calculator that handles decimal points correctly. Need to multiply large numbers with multiple digits? The multiple digits multiplication calculator feature manages this effortlessly. It also works as a versatile math multiplication calculator for various number types and a common multiple calculator for finding multiples of numbers (though for LCM calculations, you'd want a dedicated LCM tool). Whether you're checking homework answers, calculating prices with tax, determining areas with measurements, or solving complex mathematical problems, this tool guides you through each calculation clearly and efficiently, helping you understand the multiplication process while ensuring accuracy.`} />
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page