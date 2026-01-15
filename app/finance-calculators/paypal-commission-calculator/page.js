import React from 'react'
import { metadata } from './metadata'
import ToolsHero from '@/app/components/ToolsHero'
import PayPalUi from './components/PayPalUi'
import HowToUse from '@/app/components/HowToUse'
import { FAQs } from './FAQs'
import ToolFAQs from '@/app/components/ToolFAQs'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
        <ToolsHero heading={`PayPal Commission Calculator – Calculate Your Fees`} 
        para={`Need to know how much PayPal will take from your payment? Our PayPal Commission Calculator shows you instantly. Just enter the amount of money being sent, choose whether it's a purchase, a personal transfer, or an international payment, and see exactly what the fees will be and how much will actually arrive. This calculator works as a PayPal Fee Estimator, PayPal international transaction calculator, and PayPal deduction calculator all in one tool, giving you clarity on every transaction.`}/>
        <PayPalUi/>
        <HowToUse heading={`How to Use the PayPal Commission Calculator Easily?`}
        para={`Using the PayPal Commission Calculator is simple and quick. First, enter the amount of money involved in the transaction. Next, select the type of transaction—this is important because fees differ for purchases, sending money to friends and family, receiving donations, or international transfers. Then, choose what you want to calculate: the fee amount or the net amount the recipient gets. This calculator works as a multi-purpose tool: a PayPal Fee Estimator to show the charge, a PayPal international transaction calculator for cross-border fees, a PayPal cut calculator for business transactions, a PayPal transaction fees calculator for detailed breakdowns, and even a PayPal deduction calculator to see what's taken out. Whether you are sending money to friends, making a donation, calculating a business payout, or receiving payment from abroad, this all-in-one calculator helps you know the exact fees and final amount instantly, so there are no surprises.`}/>
        <ToolFAQs FAQs={FAQs}/>
    </div>
  )
}

export default page