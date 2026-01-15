import React from "react";
import ToolCard from "@/app/components/ToolCard";
const Math = () => {
  const cards = [
    {
      title: "Calculate Average of Numbers",
      desc: "Calculate mean average of any number set instantly. Fast, accurate tool for statistical calculations.",
      path: "calculate-average-of-numbers",
    },
    {
      title: "Cube Root Calculator",
      desc: "Calculate cube roots of any number instantly. Essential tool for algebra and geometry problems.",
      path: "cube-root-calculator",
    },
    {
      title: "Discount Calculator",
      desc: "Calculate discounted prices and savings instantly. Essential tool for shopping and finance.",
      path: "discount-calculator",
    },
    {
      title: "Exponentiation Calculator",
      desc: "Calculate powers and exponents instantly. Solve x^y calculations with accurate results.",
      path: "exponentiation-calculator",
    },
    {
      title: "Factorial Calculator",
      desc: "Calculate factorials for large numbers instantly. Essential for probability and combinatorics.",
      path: "factorial-calculator",
    },
     {
      title: "Multiplication Calculator",
      desc: "Calculate multiplication with step-by-step guidance. Handles multiple digits and complex calculations.",
      path: "multiplication-calculator",
    },
    {
      title: "Percentage Calculator",
      desc: "Calculate percentages, discounts, and changes instantly. Essential math tool for daily calculations.",
      path: "percentage-calculator",
    },
    {
      title: "Log Base 10 Calculator",
      desc: "Calculate common logarithms instantly. Essential for scientific and engineering calculations.",
      path: "log-base-10-calculator",
    },
     {
      title: "Square Root Calculator",
      desc: "Calculate square roots instantly for any number. Fast, accurate tool for math problems.",
      path: "square-root-calculator",
    },
    {
      title: "Prime Number Calculator",
      desc: "Check numbers for primality and find prime factors instantly. Essential number theory tool.",
      path: "prime-number-calculator",
    },
    {
      title: "Quadratic Equation Calculator",
      desc: "Solve quadratic equations instantly with step-by-step solutions. Includes discriminant calculation.",
      path: "quadratic-equation-solver",
    },
    {
      title: "Tangent Calculator",
      desc: "Calculate tangent values for any angle instantly. Essential trigonometric tool for math.",
      path: "tangent-calculator",
    },
  ];
  return (
    <>
      <h2 className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700">
        Math Calculators
      </h2>
      <div
        id="mathCalculators"
        className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
      >
        {cards.map((card, index) => (
          <ToolCard
            title={card.title}
            desc={card.desc}
            path={`/math-calculators/${card.path}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Math;