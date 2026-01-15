
import Link from 'next/link'
import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
export let metadata = {
    title: '404 - Page Not Found | AI Tools Hub', 
    description: "Sorry, the page you'r looking for doesn't exist. Explore other AiI tools on our site ", 
    robot: "noindex,follow", 
    
}
const PageNotFound= () => {
  return (
    <>
   
    <div className='w-full flex flex-col items-center justify-center'>
            <FaExclamationTriangle className='text-red-500 text-[13vw] mt-12 mb-3 animate-bounce' />
            <h1 className='text-[7vw] md:text-[4vw] tracking-tight font-bold leading-[7vw] md:leading-[4vw]'>404 - Page Not Found</h1>
            <p className='text-gray-800 mb-5 tracking-tight text-[4vw]  md:text-[2vw] mt-3'>
                Sorry, we couldn't find that page.
            </p>
            <Link href='/'>
            <button className='px-5 py-1 mb-40 bg-blue-700 rounded-md text-white hover:bg-blue-600 duration-200 cursor-pointer
            active:scale-95'>Go Home</button>
            </Link>

    </div>
    </>
  )
}

export default PageNotFound