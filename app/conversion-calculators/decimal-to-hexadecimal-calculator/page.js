import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import DecToHex from './components/DecToHex'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Decimal to Hexadecimal Calculator – Convert Decimal Numbers Fast`}
        para={`Need to convert regular numbers to hexadecimal? Our Decimal to Hexadecimal Calculator makes it easy. Enter any decimal number (like 255, 4096, or 100) and get the hex equivalent immediately. This free conversion tool is perfect for programmers working with color codes or memory addresses, computer science students learning number systems, or anyone needing quick base conversions. Reliable, accurate results every time.`}
        />
        <DecToHex />
        <HowToUse heading={`How to Use the Decimal to Hexadecimal Calculator`} para={`Using our calculator is straightforward. First, locate the input field—it will likely be labeled "Enter decimal number" or something similar. Type or paste the decimal number you want to convert. Then, simply click the "Convert" button or press Enter on your keyboard. Our tool instantly works as a decimal conversion tool, processing your number and displaying the hexadecimal result in the output area. This easy-to-use decimal to hexadecimal conversion calculator shows you the hex value, which uses digits 0-9 and letters A-F. Whether you're a student practicing number system conversions, a developer needing hex values for CSS colors or programming, or just curious about different numeral systems, this fast decimal to hexadecimal number convertor gives you accurate results in seconds. You can rely on this decimal calculator for all your conversion tasks without any complicated steps.`}/>
        <ToolFAQs FAQs={FAQs} classes={` w-[95vw] md:w-[50vw]`}/>
    </div>
  )
}

export default page