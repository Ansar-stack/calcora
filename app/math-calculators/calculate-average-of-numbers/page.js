import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import AverageCalculator from './components/AverageCalculator'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Calculate Average of Numbers in Seconds`} 
        para={`Need to find the average of a set of numbers for homework, work reports, or personal calculations? Our average calculator makes it simple. Just enter your numbers—whether they're test scores, monthly expenses, measurements, or any other values—separated by commas or spaces. The calculator instantly gives you the mean (average), saving you from manual addition and division. This free online tool is perfect for students, teachers, professionals, or anyone who needs quick, accurate average calculations.`}
        />
        <AverageCalculator />
        <HowToUse heading={`How to Calculate Average of Numbers Easily Using This Calculator`} para={`Using this tool to calculate average of numbers takes just a few simple steps. First, gather all the numbers you want to average. These could be anything: grades, temperatures, prices, survey responses, etc. Type or paste these numbers into the input field, separating them with commas (like 85, 90, 78, 92) or spaces. If you have numbers in a spreadsheet or document, you can copy and paste them directly. Our number average calculator and mean calculator will instantly process them as soon as you enter them. You'll immediately see the calculated average value displayed. Whether you want to calculate mean of numbers for a school assignment, work project, statistical analysis, or daily tasks like averaging weekly grocery bills, this Math average calculator handles it effortlessly. It automatically sums all the numbers, counts how many there are, divides correctly, and presents the average—all without any manual calculations, potential arithmetic errors, or time-consuming work on your part.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page