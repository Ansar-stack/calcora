"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const HeartUi = () => {
  const [states, setStates] = useState({
    age: "",
    bpm: "",
    gender: "Male",
    activity: "Heavy",
  });

  const [err, setErr] = useState({
    age: "",
    bpm: "",
  });

  const [result, setResult] = useState({
    maxHR: "",
    targetZone: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Number(states.age) || states.age <= 0) {
      return setErr((prev) => ({ ...prev, age: "Please enter a valid age." }));
    }
    if (!Number(states.bpm) || states.bpm <= 0) {
      return setErr((prev) => ({
        ...prev,
        bpm: "Please enter a valid resting heart rate.",
      }));
    }

    // Calculation
    const age = Number(states.age);
    const rhr = Number(states.bpm);

    // Max heart rate (simple formula)
    const maxHR = 220 - age;

    // Heart rate reserve
    const hrr = maxHR - rhr;

    // Activity multipliers
    let intensity = { min: 0.5, max: 0.7 }; // default moderate
    if (states.activity === "Sedentary") intensity = { min: 0.4, max: 0.6 };
    if (states.activity === "Heavy") intensity = { min: 0.7, max: 0.85 };
    if (states.activity === "Very Heavy") intensity = { min: 0.8, max: 0.9 };

    // Target heart rate zone (Karvonen formula)
    const targetMin = Math.round(hrr * intensity.min + rhr);
    const targetMax = Math.round(hrr * intensity.max + rhr);

    setResult({
      maxHR,
      targetZone: `${targetMin} - ${targetMax} bpm`,
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>     
        <InputField
          label="Enter age in years"
          placeholder="e.g. 44"
          value={states.age}
          name="age"
          type="number"
          handleChanges={handleChanges}
        />
        {err.age && <ErrorComponent error={err.age} />}
        </div>  
        <div>
        <InputField
          label="Enter your resting heart rate (bpm)"
          placeholder="e.g. 50"
          value={states.bpm}
          name="bpm"
          type="number"
          handleChanges={handleChanges}
        />
        {err.bpm && <ErrorComponent error={err.bpm} />}
        </div>

        <SelectOptionsInputField
          label="Select your gender"
          value={states.gender}
          name="gender"
          handleChanges={handleChanges}
          options={["Male", "Female", "Other"]}
        />

        <SelectOptionsInputField
          label="Select your activity level"
          value={states.activity}
          name="activity"
          handleChanges={handleChanges}
          options={["Sedentary", "Moderate", "Heavy", "Very Heavy"]}
        />

        <BlueBtn
          btnText="Calculate Heart Rate"
          classes="mt-3 self-start"
          type="submit"
        />
      </form>

      {/* Results */}
      {result.maxHR && (
        <div className="result mt-4">
          <h3 className="result_heading">Heart Rate Result</h3>
          {[
            { name: "Maximum Heart Rate:", value: `${result.maxHR} bpm` },
            { name: "Target Heart Rate Zone:", value: result.targetZone },
          ].map((elem, index) => (
            <div
              key={index}
              className={`result_item`}
            >
              {elem.name} <span>{elem.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeartUi;
