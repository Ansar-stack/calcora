import React from 'react'
import {metadata} from './metadata';
import ToolsHero from '@/app/components/ToolsHero';
import BMIui from './components/BMIui';
import HowToUse from '@/app/components/HowToUse';
import ToolFAQs from '@/app/components/ToolFAQs';
import { FAQs } from './FAQs';
export {metadata}
const page = () => {
  return (
    <div className='pageContainer'>
    <ToolsHero heading='Body Mass Index Calculator in Kg and Cm – Quick BMI Checker Online'
    para={`Curious about whether your weight is healthy for your height? Our body mass index calculator gives you the answer in seconds. Simply enter your weight in kilograms and your height in centimeters, and you'll get your BMI score immediately. This easy-to-use BMI calculator helps you understand where you stand on the health scale and provides a helpful reference point for tracking your fitness journey and wellness goals.`}/>
    <BMIui />
    <HowToUse heading={`How to Use the Body Mass Index Calculator in Kg and Cm`}
    para={`Using the body mass index calculator in kg and cm is simple and quick. First, step on a scale to get your current weight in kilograms. Next, measure your height in centimeters (if you know it in feet/inches, just multiply feet by 30.48 and inches by 2.54 to convert). Enter these two numbers into the calculator and click the calculate button. Our online body mass index calculator will instantly process this information and display your BMI number along with a category label like "Healthy Weight" or "Overweight." You can then use the healthy BMI checker online feature to see if your weight falls within the recommended range for your height. This tool works equally well for both men and women, including the body mass index calculator in kg and cm female version, making it easy for everyone to monitor their health status and track progress toward their fitness goals.`} />
    <ToolFAQs FAQs={FAQs}/>
    </div>
  )
}

export default page