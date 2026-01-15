"use client";
import BlueBtn from "@/app/components/blueBtn";
import ErrorComponent from "@/app/components/ErrorComponent";
import InputField from "@/app/components/InputField";
import SelectOptionsInputField from "@/app/components/SelectOptionsInputField";
import React, { useState } from "react";

const HomeUi = () => {
  const [states, setStates] = useState({
    homeArea: "",
    renovationType: "Full Renovation",
    laborCost: "",
    MeterialCost: "",
    additionalCost: "",
  });
  const [err, setErr] = useState({});
  const [result, setResult] = useState(null);

  // Input handler
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStates((prev) => ({ ...prev, [name]: value }));
    setErr((prev) => ({ ...prev, [name]: "" }));
  };

  // Calculation logic
  const handleSubmit = (e) => {
    e.preventDefault();
    const { homeArea, laborCost, MeterialCost, additionalCost } = states;

    if (!Number(homeArea))
      return setErr((prev) => ({ ...prev, homeArea: "Please enter home area." }));
    if (!Number(laborCost))
      return setErr((prev) => ({ ...prev, laborCost: "Please enter labor cost." }));
    if (!Number(MeterialCost))
      return setErr((prev) => ({ ...prev, MeterialCost: "Please enter material cost." }));

    const area = parseFloat(homeArea);
    const labor = parseFloat(laborCost);
    const material = parseFloat(MeterialCost);
    const extra = parseFloat(additionalCost) || 0;

    const costPerSqFt = labor + material;
    const totalCost = area * costPerSqFt + extra;

    setResult({
      area,
      labor,
      material,
      extra,
      costPerSqFt,
      totalCost,
      renovationType: states.renovationType,
    });
  };

  return (
    <div className="calculatorContainer">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <InputField
            label="Enter home area (sq ft)"
            value={states.homeArea}
            name="homeArea"
            handleChanges={handleChanges}
            placeholder="e.g. 500"
            type="number"
          />
          {err.homeArea && <ErrorComponent error={err.homeArea} />}
        </div>

        <SelectOptionsInputField
          label="Select Renovation Type"
          name="renovationType"
          value={states.renovationType}
          handleChanges={handleChanges}
          options={[
            "Full Renovation",
            "Kitchen",
            "Bathroom",
            "Living Room",
            "Bedroom",
            "Exterior",
            "Other",
          ]}
        />

        <div>
          <InputField
            label="Enter labor cost per sq ft"
            value={states.laborCost}
            name="laborCost"
            handleChanges={handleChanges}
            placeholder="e.g. 12"
            type="number"
          />
          {err.laborCost && <ErrorComponent error={err.laborCost} />}
        </div>

        <div>
          <InputField
            label="Enter material cost per sq ft"
            value={states.MeterialCost}
            name="MeterialCost"
            handleChanges={handleChanges}
            placeholder="e.g. 10"
            type="number"
          />
          {err.MeterialCost && <ErrorComponent error={err.MeterialCost} />}
        </div>

        <div>
          <InputField
            label="Enter additional costs (optional)"
            value={states.additionalCost}
            name="additionalCost"
            handleChanges={handleChanges}
            placeholder="e.g. 100"
            type="number"
          />
        </div>

        <BlueBtn
          btnText="Calculate Home Renovation Budget"
          type="submit"
          classes="self-start mt-3"
        />
      </form>

      {result && (
        <div className="result mt-5 p-4 border rounded bg-gray-50">
          <h3 className="font-semibold text-lg mb-3">Renovation Cost Breakdown</h3>
          <div className="flex justify-between border-b py-1">
            <p>Renovation Type</p>
            <span>{result.renovationType}</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <p>Home Area</p>
            <span>{result.area} sq ft</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <p>Labor Cost per sq ft</p>
            <span>${result.labor}</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <p>Material Cost per sq ft</p>
            <span>${result.material}</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <p>Combined Cost per sq ft</p>
            <span>${result.costPerSqFt}</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <p>Additional Costs</p>
            <span>${result.extra}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <p>Total Renovation Cost</p>
            <span>${result.totalCost.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeUi;
