"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const WaterIntakeUi = () => {
  const [states, setStates] = useState({
    weight: undefined,
    age: undefined,
    gender: "Male",
    climat: "Cool",
    health: "Healthy",
    exerciseDuration: undefined,
  });
  const [err, setErr] = useState("");
  const [result, setResult] = useState("");
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("")
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Number(states.weight))return setErr("Please enter your weight in kg.");
    let waterReq = 0;
    waterReq += Number(states.weight) * 35;
    waterReq += Number(states.exerciseDuration || 0) * 10;
    if(states.climat == "Hot") waterReq *= 1.1;
    if(states.climat == "Cold") waterReq *= 0.9;
    if(states.health !== "Health") waterReq += 400;
    let res = (waterReq / 1000).toFixed(1)
    setResult(res)
  };
  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
        <div>
          <InputField
            label="Enter your weight in kg"
            handleChanges={handleChanges}
            name="weight"
            value={states.weight}
            type="number"
            placeholder="e.g. 66"
          />
        </div>
        <div>
          <InputField
            label="Enter your age in years"
            handleChanges={handleChanges}
            name="age"
            value={states.age}
            type="number"
            placeholder="e.g. 30"
          />
        </div>
        <SelectOptionsInputField 
        label="Select your gender"
        options={['Male', 'Female', 'Other']}
        handleChanges={handleChanges}
        value={states.gender}
        name="gender"
        />
        <SelectOptionsInputField 
        label="Select your climate"
        options={['Cool', 'Moderate', 'Hot']}
        handleChanges={handleChanges}
        value={states.climat}
        name="climat"
        />
        <SelectOptionsInputField 
        label="Select health condition if (any apply)"
        options={['Healthy','Pregnancy', 'Breastfeeding', 'Illiness']}
        handleChanges={handleChanges}
        value={states.health}
        name="health"
        />
       <div>
        <InputField 
        label="Enter minutes of exercise per day"
        value={states.exerciseDuration}
        name="exerciseDuration"
        type="number"
        placeholder="e.g. 30"
        handleChanges={handleChanges}
        />
        </div>
        {err && <ErrorComponent classes={'mt-2'} error={err}/>}
        <BlueBtn btnText="Calculate Water Intake" type="submit" classes="mt-4 self-start" />
      </form>
      {result && <div className="result">
        <p>Based on your inputs, you should drink <b> {result} liters </b> of water per day.</p>
        </div>}
    </div>
  );
};

export default WaterIntakeUi;
