import ToolsHero from '@/app/components/ToolsHero'
import React from 'react'
import ToolFAQs from '@/app/components/ToolFAQs'
import { FAQs } from './FAQs'
import InterpolationUi from './components/InterpolationUi'
import HowToUse from '@/app/components/HowToUse'
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
      <ToolsHero heading={`Interpolation Calculator – Quickly Estimate Values Between Points`}
      para={`Need to find values between known data points? Our Interpolation Calculator estimates missing values instantly. Enter two known (x,y) coordinates and your target x-value to get the estimated y-value. Perfect for scientific data, financial projections, engineering measurements, or any situation where you need to fill data gaps accurately. Get precise linear interpolation results in seconds.`}
      />
      <InterpolationUi />
      <HowToUse heading={`How to Use the Interpolation Calculator Effectively`} para={`Using the interpolation calculator is straightforward and fast. First, identify your two known data points. Enter the first point as (x1, y1) and the second as (x2, y2). These could be anything: time and temperature, distance and cost, etc. Then, enter the target x value—the point in between where you want an estimate. The tool instantly calculates the corresponding y value. This intuitive interface helps you estimate values between points and interpolate x and y values with ease, visualizing how the value changes linearly. Whether you are handling simple linear functions or complex numeric data sets, the calculator also guides you step by step. It acts as a practical linear interpolation calculator for straightforward estimates and an interpolation formula calculator that shows the math behind the result, ensuring accurate and understandable outcomes every time.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  )
}

export default page