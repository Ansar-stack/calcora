"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";

const TileCalculator = () => {
  const [states, setStates] = useState({});
  const [err, setErr] = useState({});
  const [result, setResult] = useState("");

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {areaLength, areaWidth, tileLength, tileWidth, wastage} = states;
    // const areaLength = Number(states.areaLength);
    // const areaWidth = Number(states.areaWidth);
    // const tileLength = Number(states.tileLength);
    // const tileWidth = Number(states.tileWidth);
    // const wastage = Number(states.wastage) || 0;

    // Validations
    if (!areaLength) return setErr((prev) => ({ ...prev, areaLength: "Please enter area length in meters." }));
    if (!areaWidth) return setErr((prev) => ({ ...prev, areaWidth: "Please enter area width in meters." }));
    if (!tileLength) return setErr((prev) => ({ ...prev, tileLength: "Please enter tile length in cm." }));
    if (!tileWidth) return setErr((prev) => ({ ...prev, tileWidth: "Please enter tile width in cm." }));

    // Calculation
    const totalArea = areaLength * areaWidth;
    const tileArea = (tileLength / 100) * (tileWidth / 100); // Convert cm to meters
    const tilesNeeded = Math.ceil(totalArea / tileArea * (1 + wastage / 100));
    setResult(tilesNeeded);
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {[
          { label: "Area Length (meters)", name: "areaLength", placeholder: "e.g. 8", value: states.areaLength },
          { label: "Area Width (meters)", name: "areaWidth", placeholder: "e.g. 4", value: states.areaWidth },
          { label: "Tile Length (cm)", name: "tileLength", placeholder: "e.g. 60", value: states.tileLength },
          { label: "Tile Width (cm)", name: "tileWidth", placeholder: "e.g. 60", value: states.tileWidth },
          { label: "Extra Wastage (%)", name: "wastage", placeholder: "e.g. 10", value: states.wastage },
        ].map((field, index) => (
          <div key={index}>
            <InputField
              label={field.label}
              name={field.name}
              value={field.value}
              placeholder={field.placeholder}
              type="number"
              handleChanges={handleChanges}
            />
            {err[field.name] && <ErrorComponent error={err[field.name]} />}
          </div>
        ))}

        <BlueBtn btnText="Calculate Tiles Needed" type="submit" classes="self-start mt-3" />
      </form>

      {result && (
        <div className="result mt-4">
          <h3 className="result_heading">Tiles Required</h3>
          <p>You will need approximately <strong>{result}</strong> tiles to cover the area.</p>
        </div>
      )}
    </div>
  );
};

export default TileCalculator;
