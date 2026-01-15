"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const AreaOfCirUi = () => {
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
    if(!numbers || numbers == "0")return setErr("Please enter radius number.");
    let num = numbers * numbers;
    let area = 3.1416 * num;
    setResult(area.toFixed(2));
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit}>
        <InputField
          type="number"
          label="Enter radius"
          placeholder="e.g. 7"
          value={numbers}
          handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err}/>}
        <BlueBtn btnText="Calculate Area of Cirlce" classes="mt-3" type="submit" />
      </form>
      {result && <div className="result">
        <h3 className="result_heading">Area of Cricle Result</h3>
        <p>The area of the circle is {result} square units.</p>
        </div>}
    </div>
  );
};

export default AreaOfCirUi;
