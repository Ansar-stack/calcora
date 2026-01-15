"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const Marking = () => {
  const [states, setStates] = useState({
    roadLength: "",
    lineWidth: "",
    paintCoverage: "",
    lineType: "Solid",
    lineGap: "",
  });

  const [err, setErr] = useState({});
  const [result, setResult] = useState(null);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { roadLength, lineWidth, paintCoverage, lineType, lineGap } = states;

    if (!Number(roadLength))
      return setErr((prev) => ({ ...prev, roadLength: "Please enter road length." }));
    if (!Number(lineWidth))
      return setErr((prev) => ({ ...prev, lineWidth: "Please enter line width." }));
    if (!Number(paintCoverage))
      return setErr((prev) => ({ ...prev, paintCoverage: "Please enter paint coverage." }));

    let length = parseFloat(roadLength);
    let width = parseFloat(lineWidth);
    let coverage = parseFloat(paintCoverage);
    let gap = parseFloat(lineGap) || 0;

    let effectiveLength = length;
    if (lineType === "Dashed" && gap > 0) {
      const segment = 2; // 2m painted per cycle
      const cycle = segment + gap;
      const cycles = length / cycle;
      effectiveLength = cycles * segment;
    }

    let area = effectiveLength * (width / 100); // width in cm -> meters
    let paintRequired = area / coverage;

    setResult({
      effectiveLength: effectiveLength.toFixed(2),
      area: area.toFixed(2),
      paintRequired: paintRequired.toFixed(2),
      lineType,
    });
  };

  // Array for input fields
  const inputFields = [
    { label: "Enter road length (m)", name: "roadLength", placeholder: "e.g. 1200" },
    { label: "Enter line width (cm)", name: "lineWidth", placeholder: "e.g. 15" },
    { label: "Enter paint coverage (m² per liter)", name: "paintCoverage", placeholder: "e.g. 5" },
  ];

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {inputFields.map((field, idx) => (
          <div key={idx}>
            <InputField
              label={field.label}
              name={field.name}
              type="number"
              placeholder={field.placeholder}
              value={states[field.name]}
              handleChanges={handleChanges}
            />
            {err[field.name] && <ErrorComponent error={err[field.name]} />}
          </div>
        ))}

        <div>
          <SelectOptionsInputField
            label="Select line type"
            name="lineType"
            value={states.lineType}
            handleChanges={handleChanges}
            options={["Solid", "Dashed"]}
          />
        </div>

        {states.lineType === "Dashed" && (
          <div>
            <InputField
              label="Enter gap length (m) between dashes"
              name="lineGap"
              type="number"
              placeholder="e.g. 4"
              value={states.lineGap}
              handleChanges={handleChanges}
            />
          </div>
        )}

        <BlueBtn btnText="Calculate Paint" classes="mt-2 self-start" type="submit" />
      </form>

      {result && (
        <div className="result mt-5">
          <h3 className="result_heading">Road Marking Paint Result</h3>
          <div className="result_item">
            <span className="font-semibold">Line Type:</span> {result.lineType}
          </div>
          <div className="result_item">
            <span className="font-semibold">Effective Painted Length:</span>{" "}
            {result.effectiveLength} m
          </div>
          <div className="result_item">
            <span className="font-semibold">Total Painted Area:</span> {result.area} m²
          </div>
          <div className="result_item">
            <span className="font-semibold">Paint Required:</span> {result.paintRequired} liters
          </div>
        </div>
      )}
    </div>
  );
};

export default Marking;
