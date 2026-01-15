"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const CCUi = () => {
  // States
  const [states, setStates] = useState({
    engineSize: "",
    hpFactor: 15,
  });
  const [err, setErr] = useState("");
  const [result, setResult] = useState({});

  // Functions
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!Number(states.engineSize)) return setErr("Please enter engine displacement in CC.");
    let hp = Number(states.engineSize) / Number(states.hpFactor);
    setResult({
      hp: hp.toFixed(2),
      cc: states.engineSize
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div><InputField
          label="Enter engine displacement in CC"
          placeholder="e.g. 150"
          name="engineSize"
          value={states.engineSize}
          handleChanges={handleChanges}
          type="number"
        />
        {err && <ErrorComponent error={err}/>}
        </div>
        {/* Select Input Field for  Engine Type */}
        <div>
          <label htmlFor="modifier" className="font-semibold block">
            Select engine type
          </label>
          <select
            name="hpFactor"
            onChange={handleChanges}
            className="outline-0 px-2 w-full py-1 border border-gray-300 rounded-md"
          >
            {[
              { name: "Normal Petrol Engine (Standard Car)", value:16.5},
              { name: "High Performance Engine", value: 10.5},
              { name: "Diesel (Standard Car)", value: 15.2},
              { name: "Small Engine (Lawnmower, etc)", value: 22},
              { name: "Motorcycle Engine (Standard)", value: 12.8},
              { name: "Other Engine Type", value: 15.5},
            ].map((elem, index) => (
              <option key={index} value={elem.value}>
                {elem.name}
              </option>
            ))}
          </select>
        </div>

        <BlueBtn
          btnText="Calculate HP"
          type="submit"
          classes="self-start mt-2"
        />
      </form>

      {result.hp && (
        <div className="result">
          <h3 className="result_heading">CC to HP Result</h3>
          <p> The estimated HP is <span className="font-bold">{result.hp}</span> for {result.cc} CC.</p>
        </div>
      )}
    </div>
  );
};

export default CCUi;
