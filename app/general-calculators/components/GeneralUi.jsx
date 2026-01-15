import React from "react";
import ToolCard from "@/app/components/ToolCard";

const GeneralUi = () => {
  const cards = [
    {
      title: "Twin Flame Calculator",
      desc: "Calculate relationship compatibility based on names and gender. Discover love scores and name matching insights.",
      path: "twin-flame-calculator",
    },
    {
      title: "Osu PP Calculator",
      desc: "Calculate osu! performance points instantly. Input score, difficulty, combo, and mods for accurate PP estimation.",
      path: "osu-pp-calculator",
    },
    {
      title: "Road Trip Fuel Cost Calculator",
      desc: "Estimate road trip fuel expenses quickly. Input distance, fuel efficiency, and price for instant cost results.",
      path: "road-trip-fuel-cost-calculator",
    },
    {
      title: "Restaurant Bill Calculator",
      desc: "Calculate restaurant tips and split bills easily. Input bill amount, tip percentage, and people count.",
      path: "restaurant-bill-calculator",
    },
    {
      title: "Parking Cost Calculator",
      desc: "Calculate parking expenses for any duration. Estimate parking fees and avoid unexpected charges.",
      path: "parking-cost-calculator",
    },
    {
      title: "RIO Staking Calculator",
      desc: "Calculate RIO staking interest and profits. Track your staking returns and investment growth accurately.",
      path: "rio-staking-calculator",
    },
    {
      title: "CC to HP Calculator",
      desc: "Enter engine CC and type to get HP results instantly. Convert cubic centimeters to horsepower for cars, bikes, diesel & petrol engines.",
      path: "cc-to-hp-calculator",
    },
    {
      title: "WHP to HP Calculator",
      desc: "Convert wheel horsepower to engine HP. Enter WHP, select drivetrain type (FWD/RWD/AWD), and calculate engine power instantly.",
      path: "whp-to-hp-calculator",
    },
    {
  title: "Playback Speed Calculator",
  desc: "Speed up learning! Calculate how much time you save when adjusting video playback speed. Enter your video duration and speed multiplier for instant results.",
  path: "playback-speed-calculator",
},
  ];
  return (
    <>
      <h2
        className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 
    self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700"
      >
        General Calculators
      </h2>
      <div
        id="generalCalculators"
        className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
      >
        {cards.map((card, index) => (
          <ToolCard
            title={card.title}
            desc={card.desc}
            path={`/general-calculators/${card.path}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default GeneralUi;
