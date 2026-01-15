import React from "react";
import ToolCard from "@/app/components/ToolCard";

const Geometry = () => {
  const cards = [
    {
      title: "Area of Circle Calculator",
      desc: "Calculate circle area instantly using radius. Fast, accurate tool for geometry and math calculations.",
      path: "area-of-circle-calculator",
    },
    {
      title: "Area of Trapezium Calculator",
      desc: "Calculate trapezium area quickly. Get accurate results for geometry problems and measurements.",
      path: "area-of-trapezium-calculator",
    },
    {
      title: "Perimeter of Circle Calculator",
      desc: "Calculate circle circumference instantly. Fast tool for geometry calculations and measurements.",
      path: "perimeter-of-circle-calculator",
    },
    {
      title: "Calculate Hypotenuse",
      desc: "Calculate right triangle hypotenuse instantly. Input side lengths for fast geometry results.",
      path: "calculate-hypotenuse-of-right-triangle",
    },
    {
      title: "Interpolation Calculator",
      desc: "Calculate interpolation between points. Linear estimation tool for data analysis and geometry.",
      path: "interpolation-calculator",
    },
    {
      title: "Midpoint Calculator",
      desc: "Calculate midpoint between coordinates instantly. Fast tool for geometry and coordinate plotting.",
      path: "midpoint-calculator",
    },
  ];
  return (
    <>
      <h2 className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700">
        Geometry Calculators
      </h2>
      <div
        id="geometryCalculator"
        className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
      >
        {cards.map((card, index) => (
          <ToolCard
            title={card.title}
            desc={card.desc}
            path={`/geometry-calculators/${card.path}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Geometry;