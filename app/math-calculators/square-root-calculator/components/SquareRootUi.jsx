"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const SquareRootUi = () => {
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
    if(!number)return setErr("Please enter a number.")
    let ans = Math.sqrt(number);
      setResult(`The Square root of ${number} is ${ans.toFixed(2)}`)
    }

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit}>
        <InputField
          type="number"
          label="Enter a number"
          placeholder="e.g. 25"
          value={number}
          handleChanges={handleChanges}
        />
        {err  && <ErrorComponent error={err}/>}
        <BlueBtn btnText="Calculate Square Root" classes="mt-3" type="submit"/>
      </form>
      {result && 
      <div className="result">
            {result}
        </div>}
    </div>
  );
};

export default SquareRootUi;
