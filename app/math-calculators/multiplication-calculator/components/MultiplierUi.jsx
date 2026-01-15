"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const MultiplierUi = () => {
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
    if(!numbers)return setErr("Please enter numbers comma  or space seperated.")
    let pattern = /^[0-9][0-9,\.\W]*$/;
    if(!pattern.test(numbers))return setErr("Please enter numbers comma  or space seperated. ")
    let numbersArr = numbers.split(/[\s,]+/);
    let prod = Number(numbersArr[0]); 
    if(numbersArr.length <=1)return setErr("Please Enter more then one number.")
    for(let i=1;i<=numbersArr.length -1;i++){
        prod = prod * Number(numbersArr[i]);
    }
    setResult(prod)
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
        {err  && <ErrorComponent error={err}/>}
        <BlueBtn btnText="Multiply" classes="mt-3" type="submit"/>
      </form>
      {result && 
      <div className="result">
            Product: {result}
        </div>}
    </div>
  );
};

export default MultiplierUi;
