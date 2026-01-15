import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import CubeUi from './components/CubUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Free Cube Root Calculator to Solve Cube Roots Quickly`} 
        para={`Stuck on a cube root problem in your math homework or work? Our cube root calculator gives you the answer instantly. Just enter any number—positive, negative, or decimal—and get its cube root immediately. This quick cube root finder handles everything from simple perfect cubes (like 8, 27, 64) to complex numbers, saving you time and eliminating calculation errors. Perfect for students, engineers, and anyone who needs reliable cube root calculations without the manual work.`}/>
        <CubeUi />
        <HowToUse heading={`How to Use the Cube Root Calculator Effectively`} para={`Using our cube root calculator is simple and quick. First, identify the number you need the cube root of—this could be from a math problem, engineering calculation, or any situation requiring a cube root. Enter this number into the input box. You can type it directly or paste it if it's already copied. The calculator accepts positive numbers, negative numbers (since negative numbers have real cube roots), decimals, and even very large numbers. Once you've entered your number, click the calculate button or simply press Enter. This smart cube root tool works as an efficient cube root solver that processes your input and displays the cube root result instantly. Whether you're a student trying to solve cube root problems for algebra or geometry class, a professional needing quick calculations, or just someone curious about cube roots, the results appear in seconds with complete mathematical accuracy. You can use it repeatedly to check different numbers or verify your manual calculations.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page