import React from "react";
import ToolCard from "@/app/components/ToolCard";

const Conversion = () => {
  const cards = [
    {
      title: "Binary to Decimal Calculator",
      desc: "Convert binary numbers to decimal instantly. Fast, accurate binary conversion tool for programming and math.",
      path: "binary-to-decimal-calculator",
    },
    {
      title: "Binary to Hexadecimal Calculator",
      desc: "Transform binary numbers to hexadecimal format. Reliable conversion tool for computer science applications.",
      path: "binary-to-hexadecimal-calculator",
    },
    {
      title: "Decimal to Hexadecimal",
      desc: "Convert decimal numbers to hexadecimal easily. Essential tool for programming and digital systems work.",
      path: "decimal-to-hexadecimal-calculator",
    },
    {
      title: "Decimal to Binary Calculator",
      desc: "Change decimal numbers to binary instantly. Perfect for computer programming and digital logic projects.",
      path: "decimal-to-binary-calculator",
    },
    {
      title: "Hexadecimal to Binary Calculator",
      desc: "Convert hexadecimal numbers to binary format. Fast, accurate tool for programming and system design.",
      path: "hexadecimal-to-binary-calculator",
    },
    {
      title: "Hexadecimal to Decimal",
      desc: "Transform hexadecimal numbers to decimal instantly. Essential for programming and computer system work.",
      path: "hexadecimal-to-decimal-calculator",
    },
  ];
  return (
    <>
      <h2 className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700">
        Conversion Calculators
      </h2>
      <div
        id="conversionCalculator"
        className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
      >
        {cards.map((card, index) => (
          <ToolCard
            title={card.title}
            desc={card.desc}
            path={`/conversion-calculators/${card.path}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Conversion;