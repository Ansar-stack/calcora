"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const PrimeUi = () => {
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
    if (!numbers) return setErr("Please enter a number.");

    let isPrime = (n) => {
      if(n <= 1)return false;
      if(n== 2)return true;
      if(n%2 == 0)return false;
      for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2){
        if(n%i == 0)return false;
      }
      return true;
    };

    let result = isPrime(numbers);
    setResult(`${numbers} is ${result?`prime number.`:`not a prime number.`}`);
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          label="Enter a number."
          placeholder="e.g. 67"
          value={numbers}
          handleChanges={handleChanges}
        />
        {err && <ErrorComponent error={err} />}
        <BlueBtn btnText="Check Number" classes="mt-3" type="submit" />
      </form>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default PrimeUi;
