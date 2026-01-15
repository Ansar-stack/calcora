import ToolCard from '@/app/components/ToolCard';
import React from 'react'

const ContructionUi = () => {
 const cards = [
    {
      title: "Brick Wall Calculator",
      desc: "Estimate brick requirements for walls with windows and wastage included. Fast, accurate brick masonry calculations for any project.",
      path: "brick-wall-calculator",
    },
     {
      title: "Calculate Density",
      desc: "Get instant density calculations from mass and volume inputs. Simple, reliable tool for material science and construction.",
      path: "calculate-density-from-mass-and-volume",
    },
     {
      title: "Road Construction Cost Calculator",
      desc: "Estimate total road construction costs including labor, materials, and repair expenses for better project planning.",
      path: "road-construction-cost-calculator",
    },
     {
      title: "Concrete Volume Calculator",
      desc: "Calculate concrete volumes for slabs, steps, and post holes. Get accurate concrete mix quantities instantly.",
      path: "concrete-volume-calculator",
    },
     {
      title: "Road Marking Paint Calculator",
      desc: "Calculate paint requirements for road markings. Perfect for traffic lines, street markings, and safety paint planning.",
      path: "road-marking-paint-calculator",
    },
     {
      title: "Calculate Tile Needed",
      desc: "Estimate tile requirements for floors and walls. Calculate exact quantities including cuts and wastage.",
      path: "calculate-tile-needed",
    },
   
  ];
  return (
  <>
    <h2 className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 
    self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700">Construction Calculators</h2>
    <div 
    id="constructionsCalcualtor"
    className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
    >
      {cards.map((card, index) => (
        <ToolCard
          title={card.title}
          desc={card.desc}
          path={`/construction-calculators/${card.path}`}
          key={index}
        />
      ))}
    </div>
  </>
  );
}

export default ContructionUi