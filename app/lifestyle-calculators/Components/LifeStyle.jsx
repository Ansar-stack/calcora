import React from "react";
import ToolCard from "@/app/components/ToolCard";

const LifeStyle = () => {
  const cards = [
    {
      title: "Wedding Cost Calculator",
      desc: "Calculate wedding expenses including venue, catering, and attire. Perfect budget planning tool for couples.",
      path: "wedding-cost-calculator",
    },
    {
      title: "Party Cost Calculator",
      desc: "Calculate party expenses for events and gatherings. Estimate costs for food, decor, and entertainment.",
      path: "party-cost-calculator",
    },
    {
      title: "Trip Expenses Calculator",
      desc: "Calculate travel costs for accommodation, food, and transport. Smart budget tool for trip planning.",
      path: "trip-expenses-calculator",
    },
     {
      title: "Wine Cost Calculator",
      desc: "Calculate total wine purchase costs including bottles, tax, and shipping. Plan wine purchases accurately.",
      path: "wine-cost-calculator",
    },
    {
      title: "Home Renovation Cost Calculator",
      desc: "Calculate home renovation expenses for remodeling projects. Estimate budgets for home improvements.",
      path: "home-renovation-cost-calculator",
    },
     {
      title: "Household Expenses Calculator",
      desc: "Calculate monthly household costs including rent, bills, and groceries. Track home budget effectively.",
      path: "monthly-household-expenses-calculator",
    },
  ];
  return (
    <>
      <h2 className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 
      self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700">
        Life Style Calculators
      </h2>
      <div
        id="life-styleCalculators"
        className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
      >
        {cards.map((card, index) => (
          <ToolCard
            title={card.title}
            desc={card.desc}
            path={`/lifestyle-calculators/${card.path}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default LifeStyle;