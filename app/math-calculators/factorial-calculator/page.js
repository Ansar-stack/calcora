import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import { metadata } from './metadata'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import FactorialUi from './components/FactorialUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}

const page = () => {
  
  return (
    <div className='pageContainer'>
        <ToolsHero heading='Fast Factorial Calculator Online – Your Ultimate Math Computation Tool' para={`Need to calculate factorials for math class, statistics, probability problems, or computer science algorithms? Our factorial calculator gives you instant results. Just enter any whole number, and you'll get its factorial (n!) immediately—that"s the product of all positive integers up to that number. This easy factorial calculator online handles everything from small numbers (like 5! = 120) to surprisingly large calculations, making it perfect for students, teachers, researchers, or anyone who needs fast, accurate factorial results without the tedious manual multiplication.`}
     />
        <FactorialUi/>
        <HowToUse heading={`How to Use the Factorial Calculator Easily`} para={`Using the factorial calculator is simple and quick. First, identify the number whose factorial you need to calculate—this should be a non-negative integer (0, 1, 2, 3, etc.). Type this number into the input field. The tool instantly processes your input and displays the factorial result, often showing the calculation steps: for example, 5! = 5 × 4 × 3 × 2 × 1 = 120. Whether you're a student learning about factorials in algebra or combinatorics, a researcher working with large numbers in statistics or probability, or a programmer dealing with permutations and combinations, this fast factorial calculator online handles all computations smoothly and efficiently. You can see each step clearly when available, making it easy to understand how the factorial is derived and reinforcing the mathematical concept. This easy factorial calculator online is perfect for anyone who wants accurate results without the time-consuming manual calculations that can lead to errors, especially with larger numbers where the results grow exponentially.`}/>
        <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />

    </div>
  )
}

export default page