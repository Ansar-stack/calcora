import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import BinaryToDecimalUi from './components/BinaryToDecimalUi'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Binary to Decimal Calculator`}
        para={`Need to convert a binary number to decimal? Our binary to decimal calculator makes it super easy. Just type in your binary number (like 1011 or 11001) and get the decimal equivalent instantly. This binary conversion tool is perfect whether you're studying computer science, debugging code, or just curious about how binary works. It's fast, accurate, and completely free to use for all your conversion needs.`}
        />
        <BinaryToDecimalUi/>
        <HowToUse heading={`How to Use the Binary to Decimal Calculator (Binary Conversion Tool)`} para={`Using our calculator is quick and straightforward. Look for the input box that says something like "Enter binary number" or similar. Type in your binary digits—make sure you only use 0s and 1s. Once you've entered your number, click the "Convert" button or just press enter. That's it! The tool will instantly work as a binary to decimal number convertor, displaying the decimal result right next to or below your input. This reliable binary calculator handles conversions of any length, ensuring accurate results every time. It's a handy binary conversion tool for students working on homework, developers checking values, or anyone learning about different number systems.`}/>
        <ToolFAQs FAQs={FAQs} classes={` w-[95vw] md:w-[50vw]`}/>
    </div>
  )
}

export default page