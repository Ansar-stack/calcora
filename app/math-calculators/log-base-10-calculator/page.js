import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import LogUi from './components/LogUi'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Log Base 10 Calculator – Your Free Common Logarithm Calculator`}
      para={`Need to find the logarithm base 10 of a number for math class, scientific research, or engineering work? Our log base 10 calculator gives you the answer instantly. Just enter any positive number—whether it's a whole number, decimal, or fraction—and you'll get its common logarithm (log₁₀) immediately. This tool is perfect for students learning about logarithms, scientists working with pH or decibel scales, engineers dealing with logarithmic scales, or anyone who needs quick, accurate log calculations without manual work or scientific calculator lookup tables.`}
      />
      <LogUi />
      <HowToUse heading={`How to Use the Log Base 10 Calculator Easily`} para={`Using the log base 10 calculator is simple and intuitive. First, identify the positive number whose logarithm you need to calculate. This could be anything: a measurement from an experiment, a value from a math problem, a concentration for pH calculation, or any other positive real number. Enter this number into the input field. The calculator instantly processes your input and provides the logarithm value—this is the power to which 10 must be raised to equal your input number. For example, log₁₀(100) = 2 because 10² = 100. Whether you're exploring math problems, checking formulas, or solving complex scientific or engineering calculations, this tool works as a reliable logarithm base 10 calculator and log 10 calculator. With its clean interface and precise results (often showing several decimal places for accuracy), it also functions as a scientific log calculator or math log calculator, making it easy to understand logarithmic relationships and verify your calculations step by step without the complexity of manual logarithmic computation.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page