import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";
import ParkingCost from "./components/ParkingCost";
import { metadata } from './metadata'
export {metadata}
const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Accurate Parking Cost Calculator for All Parking Charges`}
        para={`Going into the city and worried about parking fees? Our Parking Cost Calculator helps you budget before you even leave. Just enter how many hours you'll be parked and the hourly rate (or daily rate) for the parking lot or garage. Select your vehicle type, and you'll get an instant total. This easy-to-use parking charges calculator and garage cost calculator helps you avoid surprises and find the most affordable parking option for your trip.`}
      />
      <ParkingCost />
      <HowToUse heading={`How to Use the Parking Cost Calculator`} para={`Using the Parking Cost Calculator is simple and fast. First, estimate or check how many hours your vehicle will be parked. Enter that number. Next, find out the parking rate—this could be an hourly rate, a flat daily rate, or an evening rate. Enter that amount per hour or per day. If you have a validation ticket or a discount code, you can enter the discount percentage. Finally, select your vehicle type from the dropdown (standard car, SUV, or motorcycle, as rates sometimes differ). The calculator will instantly process this and provide your total parking cost. It’s an easy, hassle-free way to estimate fees, compare parking options at different lots or garages, and plan your transportation expenses accurately.`}/>
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  );
};

export default page;