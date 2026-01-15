import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HexToDec from './components/HexToDec'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Hexadecimal to Decimal Calculator – Convert Hexadecimal Numbers Easily`}
        para={`Need to convert hex values to regular numbers? Our Hexadecimal to Decimal Calculator makes it simple. Enter any hexadecimal number (0-9, A-F) and get the decimal equivalent instantly. This free conversion tool is perfect for programmers working with memory addresses or color codes, computer science students learning number systems, or anyone needing to understand hex values in everyday numbers. Fast, accurate, and straightforward.`}
        />
        <HexToDec />
        <HowToUse heading={`How to Use the Hexadecimal to Decimal Calculator Easily`} para={`Using our calculator is straightforward. First, find the input box—it should be clearly labeled for hexadecimal input. Type or paste your hexadecimal number there. Remember, hexadecimal numbers can include digits 0-9 and letters A through F (both uppercase and lowercase work fine). Then, click the "Convert" button or simply press Enter on your keyboard. Instantly, our hexadecimal conversion tool processes your hex input and displays the decimal result. This reliable hexadecimal to decimal number convertor shows you the regular base-10 number that corresponds to your hex value. Whether you're a student working on a computer science assignment, a developer debugging code that shows hex values, or just curious about what a hexadecimal number means in decimal, this hexadecimal calculator ensures accurate results in seconds. It handles any valid hex value, from simple ones like "A" or "1F" to complex, longer strings.`} />
        <ToolFAQs FAQs={FAQs} classes={` w-[95vw] md:w-[50vw]`}/>
    </div>
  )
}

export default page