import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import CircumUi from './components/CircumUi'
import HowToUse from '@/app/components/HowToUse'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`Calculate Perimeter of Circle Easily with Our Online Calculator`} 
        para={`Need to know the distance around a circle? Our Perimeter of Circle Calculator (also known as a circumference calculator) gives you the answer instantly. Just measure the radius (the distance from the center to the edge) or the diameter (all the way across), enter it, and you'll get the full perimeter length. Perfect for projects involving wheels, circular gardens, frames, or any situation where you need to know the boundary length of a circle.`}
        
        />
        <CircumUi />
        <HowToUse heading={`How to Use the Perimeter of Circle Calculator`} para={`Using the Perimeter of Circle Calculator is simple and quick. First, measure your circle. You can use either the radius (half the distance across) or the diameter (the full distance across). Enter this measurement into the appropriate field. The tool will instantly calculate and provide the perimeter, which is also called the circumference. Whether you need a basic circumference calculator online for schoolwork or a more advanced tool to convert radius to the circle’s full edge length, this calculator gives accurate results in seconds. It’s perfect for practical tasks like measuring the boundary of a circular tablecloth, finding the circular length of a pipe, or calculating the circle edge length for a fencing project with ease and precision.`}/>
        <ToolFAQs FAQs={FAQs} classes={`md:w-[50vw] w-[90vw]`} />
    </div>
  )
}

export default page