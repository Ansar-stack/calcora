import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import DecimalToBinaryConvertorUi from './components/DecimalToBinaryConvertorUi'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Decimal to Binary Calculator - Easy Decimal Conversion Tool`}
        para={`Need to convert regular numbers to binary? Our Decimal to Binary Calculator makes it simple. Enter any decimal number (like 42, 255, or 1024) and get the binary equivalent instantly. This easy conversion tool is perfect for computer science students, programmers working with binary data, or anyone curious about computer number systems. Fast, accurate, and completely free.`}
        />
        <DecimalToBinaryConvertorUi />
        <HowToUse heading={`How to Use the Decimal to Binary Calculator`} para={`Using our calculator takes just seconds. First, find the input box—it might say "Enter decimal number" or something similar. Type or paste the decimal number you want to convert. Make sure it's a positive whole number (our tool handles those best). Then, click the "Convert" button or press Enter. Instantly, our decimal conversion tool works its magic and displays the binary result. This reliable decimal to binary conversion calculator shows you the string of 0s and 1s that represents your original number. Whether you need a quick check for homework, a conversion for coding, or just want to see what a number looks like in binary, our decimal calculator acts as a handy decimal to binary number convertor. It gives you accurate decimal to binary results every time, no complicated steps required.`} />
        <ToolFAQs FAQs={FAQs}/>
    </div>
  )
}

export default page