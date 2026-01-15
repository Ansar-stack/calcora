import React from "react";
import ToolCard from "@/app/components/ToolCard";

const Health = () => {
  const cards = [
    {
      title: "Body Mass Index Calculator",
      desc: "Calculate BMI instantly using kg and cm. Track healthy weight ranges and health metrics accurately.",
      path: "body-mass-index-calculator",
    },
    {
      title: "Basal Metabolic Rate Calculator",
      desc: "Calculate daily calorie needs and metabolic rate. Essential tool for fitness and weight management.",
      path: "basal-metabolic-rate-calculator",
    },
    {
      title: "Age Calculator",
      desc: "Calculate exact age from birthdate. Get years, months, and days instantly for any date.",
      path: "age-calculator-from-date-of-birth",
    },
     {
      title: "Water Consumption Calculator",
      desc: "Calculate daily water intake needs. Personalized hydration based on age, weight, and activity.",
      path: "daily-water-consumption-calculator",
    },
     {
      title: "Heart Rate Zone Calculator",
      desc: "Calculate target heart rate zones for workouts. Optimize exercise intensity for fitness goals.",
      path: "heart-rate-zone-calculator",
    },
      {
      title: "Cigarette Cost Calculator",
      desc: "Calculate cigarette expenses over time. Track smoking costs for better budget management.",
      path: "cigerettes-cost-calculator",
    },
  ];
  return (
  <>
    <h2 className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700">Health Calculators</h2>
    <div 
    id="healthCalculators"
    className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
    >
      {cards.map((card, index) => (
        <ToolCard
          title={card.title}
          desc={card.desc}
          path={`/health-calculators/${card.path}`}
          key={index}
        />
      ))}
    </div>
  </>
  );
};

export default Health;