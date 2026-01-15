import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import MidPointUi from './components/MidPointUi'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Midpoint Calculator – Find Midpoint Between Two Points Online`}
      para={`Need to find the exact halfway point between two locations, coordinates, or numbers? Our midpoint calculator makes it easy. Whether you're working on a geometry problem, dividing a line segment on a map, or just finding the average between two values, this tool gives you instant results. Just enter your two points, and you'll see the midpoint coordinates immediately.`}
     />
      <MidPointUi />
      <HowToUse heading={`How to Use the Midpoint Calculator Online`}
      para={`Using the midpoint calculator is simple and fast. First, identify your two points. For coordinates on a graph, you'll need (x1, y1) for the first point and (x2, y2) for the second. Enter these four numbers into the corresponding input fields. The tool instantly applies the midpoint formula and shows you the exact midpoint coordinates in the answer box. This works not only for graph coordinates but also for simpler tasks like finding the midpoint between two numbers on a number line—just use the same number for both y-values. Whether you prefer thinking of it as a coordinate midpoint calculator for geometry class or a midpoint formula calculator to check your algebra work, the steps remain the same: fill in the numbers and get accurate, reliable results in seconds.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page