"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const CubeUi = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");
  const handleChanges = (e) => {
    let value = e.target.value;
    setNumber(value);
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!number || number < 0)return setErr("Please enter a number.");
    let C = Math.cbrt(number);
    setResult(C);
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit}>
        <InputField
          type="number"
          label="Enter number"
          placeholder="e.g. 27"
          value={number}
          handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err} />}
        <BlueBtn btnText="Calculate" classes="mt-3" type="submit" />
      </form>
      {result && <div className="result">
        <h3 className="result_heading">Cube Root Result</h3>
        <p>Cube root of ${number} is ${result}.</p>
        </div>}
    </div>
  );
};

export default CubeUi;
