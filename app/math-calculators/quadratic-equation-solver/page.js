import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import QuadraticUi from './components/QuadraticUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Quadratic Equation Solver – Solve Quadratic Equations Online Fast`} 
        para={`Struggling with quadratic equations? Our Quadratic Equation Solver provides the quickest way to find accurate solutions. Simply input your A, B, and C coefficients, and get step-by-step results that show the roots, discriminant, and solution method. Perfect for students, teachers, and professionals who need reliable answers without the math stress.`}
        />
        <QuadraticUi />
        <HowToUse heading={`How to Use This Quadratic Equation Solver`}
        para={`Getting your quadratic equation solved is straightforward with our intuitive interface. First, identify the coefficients from your standard quadratic equation (ax² + bx + c = 0). Enter the 'A' value (the coefficient of x²) into the first input field. Next, input the 'B' value (the coefficient of x) into the second field. Finally, enter the constant 'C' value. Once all three values are correctly placed, click the "Calculate" button. Our solver instantly processes your equation using the quadratic formula, displaying both real or complex roots with clear precision. You'll also see the discriminant calculation, which determines whether your roots are real and distinct, real and equal, or complex conjugates. This tool works seamlessly as both a quadratic formula calculator and quadratic roots finder, making it ideal for homework verification, exam preparation, and real-world problem-solving applications.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page