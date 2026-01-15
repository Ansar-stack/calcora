"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const HypUi = () => {
  const [side, setSide] = useState({
    sideA: "",
    sideB: "",
  });
  const [err, setErr] = useState({
    sideA: "",
    sideB: "",
  });
  const [result, setResult] = useState("");

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setSide((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!side.sideA)return setErr(prev=>({...prev, sideA: "Please enter side A."}));
    if(!side.sideB)return setErr(prev=>({...prev, sideB: "Please enter side B."}));
    let res = Math.sqrt(Math.pow(side.sideA, 2) + Math.pow(side.sideB, 2));
    setResult(res.toFixed(2));
    setErr({
      sideA: "",
      sideB: ""
    })
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <InputField
          label="Enter side A"
          placeholder="e.g. 3"
          type="number"
          value={side.sideA}
          name="sideA"
          handleChanges={handleChanges}
          autoFocus={true}
        />
        {err.sideA && <ErrorComponent error={err.sideA} />}
        <InputField
          label="Enter side B"
          placeholder="e.g. 4"
          type="number"
          value={side.sideB}
          name="sideB"
          handleChanges={handleChanges}
        />
        {err.sideB && <ErrorComponent error={err.sideB} />}
        <BlueBtn type="submit" btnText="Calculate Hypotenuse" classes="self-start mt-3"/>
      </form>
      {result && 
      <div className="result">
        <h3 className="result_heading">Hypotenuse of Right Triangle Result</h3>
       <p>The length of the hypotenuse is ${result} units.</p>
      </div>}
    </div>
  );
};

export default HypUi;
