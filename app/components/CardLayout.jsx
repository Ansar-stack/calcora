'use client'
import React from 'react'
import { CardData } from "@/app/CardData"
import Card from './Card'

const CardLayout = () => {
  return (
    <>
      <h2 
        id='calculators' 
        className='font-semibold text-[5vw] text-blue-700 md:text-[3vw] tracking-tighter mt-20 inline-block border-b-[2.5px] ms-5'
      >
        Calculators
      </h2>
     
      <div className='max-w-[2000px] mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 place-items-center-safe'>
        {CardData.map((card, index) => (
          <Card 
            id={`id='Health-Calculator'`} 
            key={index} 
            catagory={card.catagory} 
            tools={card.tools}
          />
        ))}
      </div>
    </>
  )
}

export default CardLayout