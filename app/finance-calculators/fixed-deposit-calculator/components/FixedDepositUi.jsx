"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import Result from "@/app/components/Result";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const FixedDepositUi = () => {
  const [states, setStates] = useState({
    fdAmount: "",
    fdPeriod: "",
    interestRate: "",
    compoundingFrequency: "Quaterly",
  });
  const [err, setErr] = useState({});
  const [result, setResult] = useState({
    
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let p = parseInt(states.fdAmount);
    let r = parseInt(states.interestRate);
    let t = parseInt(states.fdPeriod);
    let num = 1;

    if (!p)
      return setErr((prev) => ({
        ...prev,
        fdAmount: "Please enter FD amount.",
      }));
    if (!t)
      return setErr((prev) => ({
        ...prev,
        fdPeriod: "Please enter FD period (years).",
      }));
    if (!r)
      return setErr((prev) => ({
        ...prev,
        interestRate: "Please enter interest rate.",
      }));
    if (r > 100)
      return setErr((prev) => ({
        ...prev,
        interestRate: "Interest rate should be between 0% and 100%",
      }));
    r = r / 100;
    t = t / 12;

    if (states.compoundingFrequency == "Yearly") num = 1;
    else if (states.compoundingFrequency == "Half-yearly") num = 2;
    else if (states.compoundingFrequency == "Quaterly") num = 4;
    else if (states.compoundingFrequency == "Monthly") num = 12;

    let A = p * Math.pow(1 + r / num, num * t);
    let interestEarned = A - p;
    console.log(A, interestEarned, p, r);
    setResult({
      principle: states.fdAmount,
      interest: states.interestRate,
      tenure: states.fdPeriod,
      compounding: states.compoundingFrequency,
      maturityAmount: A.toFixed(2),
      interestEarned: interestEarned.toFixed(2),
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* Input field array */}
        {[
          {
            title: "Enter FD amount",
            value: states.fdAmount,
            name: "fdAmount",
            placeholder: "e.g. 20000",
          },
          {
            title: "Enter FD period (years)",
            value: states.fdPeriod,
            name: "fdPeriod",
            placeholder: "e.g. 5",
          },
          {
            title: "Enter interest rate (%)",
            value: states.interestRate,
            name: "interestRate",
            placeholder: "e.g. 6.5",
          },
        ].map((element, index) => (
          <div key={index}>
            <InputField
              label={element.title}
              placeholder={element.placeholder}
              value={element.value}
              name={element.name}
              type="number"
              handleChanges={handleChanges}
            />
            {index == 0 && err.fdAmount && (
              <ErrorComponent error={err.fdAmount} />
            )}
            {index == 1 && err.fdPeriod && (
              <ErrorComponent error={err.fdPeriod} />
            )}
            {index == 2 && err.interestRate && (
              <ErrorComponent error={err.interestRate} />
            )}
          </div>
        ))}
        <SelectOptionsInputField
          label="Select compound frequency"
          name="compoundingFrequency"
          value={states.compoundingFrequency}
          handleChanges={handleChanges}
          options={["Quaterly", "Half-yearly", "Yearly", "Monthly"]}
        />
        <BlueBtn
          btnText="Calculate FD"
          type="submit"
          classes="self-start mt-3"
        />
      </form>
      {result.principle && (
          <Result heading={'Fixed Deposit Result'} arr={[
            { title: `Principal Amount`, result: `$${result.principle}` },
            { title: "Interest Rate", result: `${result.interest}%` },
            { title: "Tenure", result: `${result.tenure} years` },
            { title: "Compounding", result: `${result.compounding}` },
            { title: "Maturity Amount", result: `$${result.maturityAmount}` },
            { title: "Interest earned", result: `$${result.interestEarned}` },
          ]}/>
      )}
    </div>
  );
};

export default FixedDepositUi;
