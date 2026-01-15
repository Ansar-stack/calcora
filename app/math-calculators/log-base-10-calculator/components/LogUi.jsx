"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const LogUi = () => {
  const [number, setNumber] = useState("");
  const [base, setBase] = useState("Base-10 log");
  const [err, setErr] = useState("");
  const [result, setResult] = useState("")

  const handleChanges = (e) => {
    setNumber(e.target.value);
    setErr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let num  = parseInt(number)
    if (!num) return setErr("Please enter number.");
    if(base == "Natural log"){
        let In = Math.log(num);
        setResult(In.toFixed(2));
    }else if(base == "Base-10 log"){
        let Log10 = Math.log10(num);
        setResult(Log10.toFixed(2))
    }else if(base == "Natural log of 1+x"){
        let log1X = Math.log1p(num);
        setResult(log1X.toFixed(2));
    }else if(base == "Base-2 log"){
        let base2 = Math.log2(num);
        setResult(base2.toFixed(2));
    }
    
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex- flex-col gap-2">
        <InputField
          label="Enter number"
          placeholder="e.g. 100"
          type="number"
          value={number}
          handleChanges={handleChanges}
          autoFocus={true}
        />
        {err && <ErrorComponent error={err} />}
        <div className="mt-3">
          <SelectOptionsInputField 
          label="Select base"
          value={base}
          name="base"
          handleChanges={(e)=>setBase(e.target.value)}
          options={["Natural log", "Base-10 log", "Natural log of 1+x", "Base-2 log"]}
          />
         
        </div>
        <BlueBtn btnText="Calculate Log" type="submit" classes="self-start mt-3" />
      </form>
      {result && <div className="result">
          <h3 className="heading_result">Log-base 10 Result</h3>
          <p>The base-10 logarithm of ${number} is {result}</p>
        </div>}
    </div>
  );
};

export default LogUi;
