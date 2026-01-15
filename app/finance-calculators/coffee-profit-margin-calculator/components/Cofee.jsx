"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const Cofee = () => {
  const [states, setStates] = useState({});
  const [err, setErr] = useState({});
  const [result, setResult] = useState({});
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let cost = Number(states.cost);
    let sellingPrice = Number(states.sellingPrice);
    let volume = Number(states.volume);
    let fixedCost = Number(states.fixedCost);
    // Validation
    if (!cost)
      return setErr((prev) => ({
        ...prev,
        cost: "Please enter cost per cup.",
      }));

    if (!cost < 0)
      return setErr((prev) => ({
        ...prev,
        cost: "Please enter valid cost per cup.",
      }));

    if (!sellingPrice)
      return setErr((prev) => ({
        ...prev,
        sellingPrice: "Please enter selling price per cup.",
      }));

    if (!volume)
      return setErr((prev) => ({
        ...prev,
        volume: "Please enter volume per day.",
      }));
    // Calculations
    let dailyProfit = sellingPrice * volume - cost * volume;
    let monthlyGrossProfit = dailyProfit * 30;
    let monthlyNetPrifit = monthlyGrossProfit - fixedCost;
    setResult({
      dailyProfit: dailyProfit,
      monthlyGrossProfit: monthlyGrossProfit,
      monthlyNetPrifit: monthlyNetPrifit,
    });
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
        {[
          {
            title: "Enter cost per cup",
            placeholder: "e.g. 1.5",
            value: states.cost,
            name: "cost",
          },
          {
            title: "Enter selling price per cup",
            placeholder: "e.g 1.7",
            value: states.sellingPrice,
            name: "sellingPrice",
          },
          {
            title: "Enter daily sales volume (cups)",
            placeholder: "e.g. 99",
            value: states.volume,
            name: "volume",
          },
          {
            title: "Enter other fixed monthly cost (if any)",
            placeholder: "e.g 30",
            value: states.fixedCost,
            name: "fixedCost",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              placeholder={elem.placeholder}
              value={elem.value}
              name={elem.name}
              type="number"
              handleChanges={handleChanges}
            />
          </div>
        ))}
        {err.cost && <ErrorComponent error={err.cost} />}
        {err.sellingPrice && <ErrorComponent error={err.sellingPrice} />}
        {err.volume && <ErrorComponent error={err.volume} />}
        <BlueBtn
          btnText="Calculate Coffee Profit"
          classes="self-start mt-2"
          type="submit"
        />
      </form>
      {result.dailyProfit >= 0 && (
        <Result
          heading={"Coffee Profit Margin Result"}
          arr={[
            { title: "Daily Profit", value: `$${result.dailyProfit}` },
            {
              title: "Monthly Gross Profit",
              value: `$${result.monthlyGrossProfit}`,
            },
            {
              title: "Monthly Net Profit",
              value: `$${result.monthlyNetPrifit}`,
            },
          ]}
        />
      )}
    </div>
  );
};

export default Cofee;
