import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import { metadata } from './metadata'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import StudentUi from './components/StudentUi'
export {metadata}

const page = () => {
  
  return (
    <div className='pageContainer'>
        <ToolsHero heading='Student Loan Repayment Calculator' 
        para='Figuring out your student loan payments can be confusing. Our student loan repayment calculator makes it simple. Just enter your total loan amount, the interest rate, and how long you have to pay it back. You’ll instantly see your estimated monthly payment, total interest cost, and how long it will take to become debt-free. This tool helps you plan your budget and explore different repayment options.' 
       />
        <StudentUi />
        <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page