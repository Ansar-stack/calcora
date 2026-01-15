"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const CircumUi = () => {
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
    if(!Number(number))return setErr("Please enter raduis number.");
    let C = 2 *  3.14 * number;
    setResult(C.toFixed(2));
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit}>
        <InputField
          type="number"
          label="Enter radius number "
          placeholder="e.g. 8"
          value={number}
          handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err} />}
        <BlueBtn btnText="Calculate Circumference" classes="mt-3" type="submit" />
      </form>
      {result && <div className="result">
        <h3 className="heading_result">Perimeter of Cricle Result</h3>
        <p>The circumference (perimeter) of the circle is ${result} units.</p>
        </div>}
    </div>
  );
};

export default CircumUi;
