import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import BricksUi from './components/BricksUi'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}

const page = () => {
 
  return (
    <>
     
    <div className='pageContainer'>
      <ToolsHero 
        heading={`Calculate Bricks Needed with Our Brick Wall Calculator`}
        para={`Use our Brick Wall Calculator to quickly estimate the number of bricks needed for any wall. This easy-to-use bricks quantity calculator accounts for wall size, brick dimensions, mortar thickness, windows, doors, and wastage to give accurate results for your construction project. Simply enter your wall length, wall height, brick size, mortar joint thickness, and the number and size of any openings to get your total bricks needed.`}
      />
      <BricksUi />
      <HowToUse 
        heading={`How to Use the Brick Wall Calculator for Accurate Results`} 
        para={`Using the Brick Wall Calculator is simple and quick. First, enter the wall's length and height in meters or feet. Then, input your brick dimensions (length, width, height) and mortar thickness. Add the number and size of any windows or doors. The calculator will process these inputs to give you the total bricks needed. This bricks quantity calculator accounts for wastage to ensure you have enough materials. Whether you're using it as a bricks calculator, bricks required calculator, or brick masonry calculator, it helps you plan your wall efficiently. This number of bricks calculator ensures your brick wall building project is precise and you get the exact quantity needed.`}
      />
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
    </>
  )
}

export default page