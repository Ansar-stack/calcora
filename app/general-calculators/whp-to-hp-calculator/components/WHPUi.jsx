"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const WHPUi = () => {
  // States
  const [states, setStates] = useState({
    whp: "",
    drivetrain: 15,
    customLoss: ""
  });
  const [err, setErr] = useState({
    whp:"",
    customeLoss:""
  });
  const [result, setResult] = useState({});

  // Functions
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr(prev =>({...prev, [name]: ""}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    let whp = Number(states.whp),
        drivetrain = Number(states.drivetrain),
        customLoss = Number(states.customLoss);

    if(!whp)return setErr(prev =>({...prev, whp:"Please enter hoursepower (WHP)."}));
    if(!drivetrain && !customLoss || customLoss<0)return setErr(prev =>({...prev, customLoss:"Please enter drivetrain loss (%)."}));
    let hp = whp / (1 - (drivetrain || customLoss) / 100);
    setResult({
      hp: hp.toFixed(1),
      whp: whp,
      drivetrain: (drivetrain || customLoss)
    })
};

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <InputField
            label="Enter wheel hoursepower (WHP)"
            placeholder="e.g. 250"
            name="whp"
            value={states.whp}
            handleChanges={handleChanges}
            type="number"
          />
          {err && <ErrorComponent error={err.whp} />}
        </div>
        {/* Select Input Field for  Drivetrain Loss */}
        <div>
          <label htmlFor="modifier" className="font-semibold block">
            Select drivetrain type
          </label>
          <select
            name="drivetrain"
            onChange={handleChanges}
            className="outline-0 px-2 w-full py-1 border border-gray-300 rounded-md"
          >
            {[
              { name: "FWD (15% loss)", value: 15 },
              { name: "RWD (20% loss)", value: 20 },
              { name: "AWD/4WD (25% loss)", value: 25 },
              { name: "Add Custom Drivetrain Loss", value: 0},
            ].map((elem, index) => (
              <option key={index} value={elem.value}>
                {elem.name}
              </option>
            ))}
          </select>
        </div>
        {states.drivetrain === "0" && (
          <div>
            <InputField
              label="Enter drivetrain loss (%)"
              placeholder="e.g. 15"
              name="customLoss"
              value={states.customLoss}
              handleChanges={handleChanges}
              type="number"
            />
            {err.customeLoss && <ErrorComponent error={err.customeLoss} />}
          </div>
        )}

        <BlueBtn
          btnText="Calculate HP"
          type="submit"
          classes="self-start mt-2"
        />
      </form>

      {result.hp && (
        <div className="result">
          <h3 className="result_heading">WHP to HP Result</h3>
          <div className="result_item">
            <p>Engine Horsepower (HP): </p><span>{result.hp}</span>
          </div>
            <div className="result_item">
            <p>Wheel Horsepower (WHP): </p><span>{result.whp}</span>
          </div>
          <div className="result_item">
            <p>Drivetrain Loss Used (%): </p><span>{result.drivetrain}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WHPUi;
