// import { FAQs } from '@/app/HomePageFAQs'
import React from 'react'
import HomePageFaqs from './HomePageFaqs'

const CatagoryPageFaqsLayout = ({faqs}) => {
  return (
    <div className="mt-15 px-5 self-start mb-10">
        <h2
          className="font-semibold text-[5vw] text-blue-700
     md:text-[3vw] tracking-tighter border-b-[2.5px] inline-block"
        >
          Frequently Asked Questions
        </h2>
        <div className="grid gap-5 mt-8 grid-cols-1 items-start  w-full sm:w-10/12 lg:w-full lg:grid-cols-2"> 
          {faqs.map((element, index)=>(
            <HomePageFaqs question={element.question} answer={element.answer} key={index}/>
          ))}
        </div>
      </div>
  )
}

export default CatagoryPageFaqsLayout