import React from 'react'

const HowToUse = ({heading, para}) => {
  return (
    <div className='mt-5 mb-15 px-1 md:w-[50vw] w-[95vw]  rounded-md'>
        <h2 className='font-semibold text-blue-700 text-lg md:text-xl xl:text-[2vw] tracking-tighter'>
            {heading}
        </h2>
        <p className='text-gray-700 tracking-tight'>
            {para}
        </p>
    </div>
  )
}

export default HowToUse