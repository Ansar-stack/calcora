"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const DensityUi = () => {
  const [states, setStates] = useState({});
  const [result, setResult] = useState("")
  const [err, setErr] = useState({});

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr({
        mass: "",
        volume:"",
    })
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!Number(states.mass))return setErr(prev=>({...prev, mass:"Please enter mass."}));
    if(!Number(states.volume))return setErr(prev =>({...prev, volume:"Please enter volume."}));
    let res = parseFloat(states.mass) / parseFloat(states.volume);
    setResult(res.toFixed(2))
  }
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
        <InputField
          label="Enter the mass"
          value={states.mass}
          name="mass"
          handleChanges={handleChanges}
          placeholder="e.g. 100"
          type="number"
        />
        <ErrorComponent error={err.mass}/>
        </div>
        <div>
        <InputField
          label="Enter the volume"
          value={states.volume}
          name="volume"
          handleChanges={handleChanges}
          placeholder="e.g. 14"
          type="number"
        />
         <ErrorComponent error={err.volume}/>
         </div>
        <BlueBtn btnText="Calculate Density" type="submit" classes="self-start mt-3"/>
      </form>
      {result && <div className="result">
        <h3 className="result_heading">Density Result</h3>
        <p>The calculated density is: {result}</p>
      </div>}
    </div>
  );
};

export default DensityUi;
