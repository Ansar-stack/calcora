import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import PrimeUi from './components/PrimeUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Prime Number Calculator – Prime Factorization Made Simple`} 
        para={`Enter any whole number into our Prime Number Calculator and instantly see if it's prime or composite. This versatile tool checks numbers, provides clear prime factorization, and identifies the largest prime in any list—all in one place.`}
        />
        <PrimeUi />
        <HowToUse heading={`How to Use the Prime Number Calculator`} para={`Using our Prime Number Calculator is straightforward and designed for immediate understanding. First, locate the input field where you can type any whole number. You can test a single number like 17 or enter multiple numbers separated by commas (e.g., 12, 29, 51, 97) to check them all at once. After entering your number(s), simply click the 'Calculate' or 'Check' button. Within seconds, the calculator processes your input using optimized algorithms. For each number, you'll see a clear result indicating 'Prime' or 'Composite.' If a number is composite, the tool functions as a complete prime factorization calculator, showing you exactly which prime numbers multiply together to create it (like revealing that 12 = 2 × 2 × 3). For lists of numbers, it instantly highlights the largest prime number detected. This step-by-step approach makes the Prime Number Calculator an excellent educational resource, allowing you to both verify results and understand the underlying mathematical principles. It's ideal for checking homework answers, preparing for exams, or satisfying curiosity about numerical patterns.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page