"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const TengentUi = () => {
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
    if(!parseInt(number))return setErr("Please enter angle in degrees.");
    let degree = number * (Math.PI / 180);

    let result = Math.tan(degree);
      setResult(`The tangent of ${number} is ${result.toFixed(3)}`)
    }

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit}>
        <InputField
          type="number"
          label="Enter a angle in degrees"
          placeholder="e.g. 45"
          value={number}
          handleChanges={handleChanges}
        />
        {err  && <ErrorComponent error={err}/>}
        <BlueBtn btnText="Calculate Tangent" classes="mt-3" type="submit"/>
        
      </form>
      {result && 
      <div className="result">
            {result}
        </div>}
    </div>
  );
};

export default TengentUi;
