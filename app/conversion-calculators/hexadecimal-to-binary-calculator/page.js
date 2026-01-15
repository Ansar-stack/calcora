import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import HexToBinary from './components/HexToBinary'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Hexadecimal to Binary Calculator - Convert Hex Numbers Instantly`}
        para={`Easily converrt binary to hexadecimal numbers with our free binary to hexadecimal calcualtor. This simpmle binary conversion tool helps you get accurate result instantly.`}
        />
        <HexToBinary />
        <HowToUse heading={`How to Use Hexadecimal to Binary Calculator`} para={`Using our hexadecimal to binary calculator is simple and quick. Just enter the hexadecimal number you want to convert, and the tool will instantly provide the binary equivalent. This hex to binary calculator acts as a reliable hexadecimal conversion tool, helping you easily transform hexadecimal numbers into binary form. Whether you’re a student, programmer, or hobbyist, this hexadecimal number convertor ensures accurate results every time, making it easier to understand and work with different number systems.`}/>
        <ToolFAQs FAQs={FAQs} classes={` w-[95vw] md:w-[50vw]`}/>
    </div>
  )
}

export default page