"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const CarUi = () => {
  // States
  const [states, setStates] = useState({
    medicalExpenses: "",
    propertyDamage: "",
    LostWages: "",
    painMultiplier: "",
    legalFee: "",
    other: "",
  });
  const [err, setErr] = useState("");
  const [result, setResult] = useState({
    result: false,
  });

  // Functions
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    let medicalExpenses = Number(states.medicalExpenses) || 0,
      propertyDamage = Number(states.propertyDamage) || 0,
      LostWages = Number(states.LostWages) || 0,
      painMultiplier = Number(states.painMultiplier) || 0,
      legalFeePercentage = Number(states.legalFee) || 0,
      other = Number(states.other) || 0;

    if (medicalExpenses <= 0 && propertyDamage <= 0 && LostWages <= 0)
      return setErr("Please enter required field.");
    if (painMultiplier > 5)
      return setErr("Pain & suffering multiplier should be between 1 and 5.");
    if (legalFeePercentage > 50) return setErr("Legal Fee should be between 1 and 50.");

    // Calculations
    let economicDamage = medicalExpenses + propertyDamage + LostWages + other,
        painAndSuffering = economicDamage * painMultiplier,
        totalSettlement = economicDamage + painAndSuffering,
        legalAmount = totalSettlement * (legalFeePercentage / 100),
        finalSettlement = totalSettlement - legalAmount;

    setResult({
      economicDamage: economicDamage,
      painAndSuffering: painAndSuffering,
      legalAmount: legalAmount,
      finalSettlement: finalSettlement,
      totalSettlement: totalSettlement,
      result: true,
    });
  };


  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {[
          {
            title: "Enter medical expenses",
            placeholder: "e.g. 1000",
            value: states.medicalExpenses,
            name: "medicalExpenses",
          },
          {
            title: "Enter property damage",
            placeholder: "e.g. 2000",
            value: states.propertyDamage,
            name: "propertyDamage",
          },
          {
            title: "Enter lost wages",
            placeholder: "e.g. 1500",
            value: states.LostWages,
            name: "LostWages",
          },
          {
            title: "Enter pain & suffering multiplier",
            placeholder: "e.g. 1.3",
            value: states.painMultiplier,
            name: "painMultiplier",
          },
          {
            title: "Enter legal fee %",
            placeholder: "e.g. 20",
            value: states.legalFee,
            name: "legalFee",
          },
          {
            title: "Enter other expenses",
            placeholder: "e.g. 400",
            value: states.other,
            name: "other",
          },
        ].map((elem, index) => (
          <div key={index}>
            <InputField
              label={elem.title}
              placeholder={elem.placeholder}
              name={elem.name}
              type="number"
              handleChanges={handleChanges}
              value={elem.value}
            />
          </div>
        ))}
        {err && <ErrorComponent error={err} />}
        <BlueBtn btnText="Calculate" type="submit" classes="self-start mt-2" />
      </form>

      {result.result && (
        <div className="result">
          <h3 className="result_heading">Car Accident Settlement Result</h3>
          {[
            { 
              title: "Economic damages:", 
              value: `${result.economicDamage}` 
            },
            { 
              title: "Pain & suffering applied:", 
              value: `${result.painAndSuffering}` 
            },
            { 
              title: "Legal fee:", 
              value: `${result.legalAmount}` 
            },
            { 
              title: "Final settlement:", 
              value: `${result.finalSettlement}` 
            },
          ].map((elem, index)=>(
            <div key={index} className="result_item">
              <p className="font-semibold">{elem.title}</p>
              <span className="font-bold">{elem.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarUi;