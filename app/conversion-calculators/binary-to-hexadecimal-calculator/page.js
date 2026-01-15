import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import BinToHex from './components/BinToHex'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Binary to Hexadecimal Calculator – Convert Binary Numbers Instantly`}
        para={`Need to convert binary to hex? Our binary to hexadecimal calculator makes it easy. Just type in your binary number (a string of 0s and 1s) and get the hexadecimal equivalent immediately. This free binary conversion tool is perfect for computer science students, programmers working with low-level code, or anyone dealing with digital systems. It's fast, accurate, and gives you the hex result without any complicated steps.`}
        />
        <BinToHex />
        <HowToUse heading={`How to Use the Binary to Hexadecimal Calculator Easily`} para={`Using our calculator couldn't be simpler. First, find the input box labeled for binary numbers. Type or paste your binary number there—make sure it contains only 0s and 1s. Then, click the "Convert to Hexadecimal" button. Instantly, our binary conversion tool processes your input and displays the hexadecimal result in the output field. This binary to hexadecimal number convertor handles both short and long binary strings with perfect accuracy. Whether you're learning number systems in a class, debugging code that uses hex values, or doing technical work that requires base conversions, this binary calculator provides fast and reliable results every time. You can use this binary to hexadecimal calculator anytime you need a quick, precise conversion without the manual math.`}/>
        <ToolFAQs FAQs={FAQs} classes={` w-[95vw] md:w-[50vw]`}/>
    </div>
  )
}

export default page