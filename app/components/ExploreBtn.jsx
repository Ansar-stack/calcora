'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ExploreBtn = ({path, btnText, classes}) => {
  const router = useRouter();

  return (
    <button
           className={`px-6 flex items-center duration-300 md:px-10 py-2 lg:py-2.5 
           text-sm sm:text-lg mt-2 shadow-lg hover:bg-blue-800 hover:shadow-[#9e9ec1] shadow-[#c3d5fa] 
           bg-[#2563eb] text-white font-semibold rounded-full cursor-pointer ${classes}`}
           onClick={() => router.push(`${path}`)}
         >
           {btnText} <FaArrowRight className="ms-2 mt-[2px] text-md" />
         </button>
  )
}

export default ExploreBtn