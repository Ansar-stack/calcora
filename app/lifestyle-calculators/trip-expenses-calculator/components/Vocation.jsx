"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const Vocation = () => {
  const [states, setStates] = useState({
    numberOfDays: "",
    accommodationCost: "",
    dailyFoodCost: "",
    transportCost: "",
    otherExpences: "",
  });
  const [err, setErr] = useState("");
  const [result, setResult] = useState({
    result: false, 
    totalExpences: "", 
    dailExpences: ""
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    if (name == "numberOfDays" || name == "accommodationCost") setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(states.numberOfDays))
      return setErr("Please enter number of days.");
    if(!Number(states.accommodationCost))
      return setErr("Please enter daily accommodations cost");
    let accommodation = Number(states.accommodationCost) * Number(states.numberOfDays);
    let dailyFoodCost = Number(states.dailyFoodCost) * Number(states.numberOfDays)
    console.log(accommodation, dailyFoodCost);
    let totalExpences = 0;
    totalExpences += Number(states.transportCost) + Number(states.otherExpences);
    totalExpences += accommodation + dailyFoodCost;
   let  dailyExpences = totalExpences / Number(states.numberOfDays)
    setResult({
      totalExpences:totalExpences.toFixed(2), 
      dailExpences: dailyExpences, 
      result: true
    })
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input Field Array */}
        {[
          {
            title: "Enter number of days",
            value: states.numberOfDays,
            name: "numberOfDays",
            placeholder: "e.g. 10",
          },
          {
            title: "Enter daily accommodation cost",
            value: states.accommodationCost,
            name: "accommodationCost",
            placeholder: "e.g. 200",
          },
          {
            title: "Enter Food Cost per day",
            value: states.dailyFoodCost,
            name: "dailyFoodCost",
            placeholder: "e.g. 100",
          },
          {
            title: "Enter transport cost",
            value: states.transportCost,
            name: "transportCost",
            placeholder: "e.g. 300",
          },
          {
            title: "Enter other expences",
            value: states.otherExpences,
            name: "otherExpences",
            placeholder: "e.g. 400",
          },
        ].map((elment, index) => (
          <div key={index}>
            <InputField
              label={elment.title}
              placeholder={elment.placeholder}
              value={elment.value}
              type="number"
              name={elment.name}
              handleChanges={handleChanges}
            />
          </div>
        ))}
        {err && <ErrorComponent error={err} />}
        <BlueBtn
          btnText="Calculate Cost"
          type="submit"
          classes="mt-2 self-start"
        />
      </form>
      {result.result && <div className="result">
        <div className="border-b mb-4 flex justify-between">
          <p>Your total vocation cost is: </p> <span className="flex items-center"><FiDollarSign className="mt-0.5"/>{result.totalExpences}</span>
        </div>
          <div className="border-b flex justify-between">
          <p>Your daily vocation cost is: </p> <span className="flex items-center"><FiDollarSign className="mt-0.5"/>{result.dailExpences}</span>
        </div>
        </div>}
    </div>
  );
};

export default Vocation;
