"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");
  const handleChanges = (e) => {
    let value = e.target.value;
    setNumbers(value);
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!numbers)return setErr("Please enter numbers comma or space seperated.")
    let pattern = /^[0-9][0-9,\.\W]*$/;
    if (!pattern.test(numbers)) return setErr("Please enter numbers comma or space seperated.");
    let numbersArr = numbers.split(/[\s,]+/);
    let sum = Number(numbersArr[0]);
    let numberCount = Number(numbersArr.length);
    if(numberCount <= 1)return setErr("Please enter more then one number (comma or space seperated).");
    for (let i = 1; i <= numbersArr.length -1; i++) {
      let num = numbersArr[i].trimStart();
      sum = sum + Number(numbersArr[i].trim());
    }
    let res = sum / numberCount;
    setResult(res.toFixed(2));
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          label="Enter numbers (comma seperated)"
          placeholder="e.g. 10, 20, 30"
          value={numbers}
          handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err}/>}
        <BlueBtn btnText="Calculate Average" classes="mt-3" type="submit" />
      </form>
      {result && <div className="result">The average value is: {result}</div>}
    </div>
  );
};

export default AverageCalculator;
