import React from 'react'
import ContactHeroSection from './components/ContactHeroSection'
import ContactForm from './components/ContactForm'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='flex flex-col items-center'>
        <ContactHeroSection />
        <ContactForm />
    </div>
  )
}

export default page