"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const PercentageUi = () => {
  const [states, setStates] = useState({
    obtainedValue: "",
    totalValue: "",
  });
  const [err, setErr] = useState({
    obtainedValue: "",
    totalValue: "",
  });
  const [result, setResult] = useState("");
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!states.obtainedValue)
      return setErr((prev) => ({
        ...prev,
        obtainedValue: "Please enter obtained value.",
      }));
    if (!Number(states.totalValue))
      return setErr((prev) => ({
        ...prev,
        totalValue: "Please enter total value.",
      }));
    if (!states.obtainedValue && !states.totalValue) {
      return setErr((prev) => ({
        ...prev,
        obtainedValue: "Pleasee enter obtained and total value.",
      }));
    }
    let precentage = (states.obtainedValue / states.totalValue) * 100;
    setResult(precentage.toFixed(2));
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <InputField
            label="Enter the obtained value"
            placeholder="e.g. 45"
            value={states.obtainedValue}
            name="obtainedValue"
            handleChanges={handleChanges}
            type="number"
          />
          {err.obtainedValue && <ErrorComponent error={err.obtainedValue} />}
        </div>
        <div>
          <InputField
            label="Enter the total value"
            placeholder="e.g. 60"
            value={states.totalValue}
            handleChanges={handleChanges}
            name="totalValue"
          />
          {err.totalValue && <ErrorComponent error={err.totalValue} />}
        </div>
        <BlueBtn
          btnText="Calculate Percentage"
          type="submit"
          classes="self-start mt-2"
        />
      </form>
      {result && <div className="result">
        <h3 className="result_heading">Percentage Result</h3>
        <p>${states.totalValue} is ${result}% of ${states.totalValue}</p>
        </div>}
    </div>
  );
};

export default PercentageUi;
